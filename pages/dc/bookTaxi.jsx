import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const BookTaxiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    car: "",
    ac: false,
    placeFrom: "",
    placeTo: "",
    dateFrom: "",
    dateTo: "",
    otherStops: "",
    returntrip: false
  });

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsSnapshot = await getDocs(collection(db, "cars"));
        const carsData = carsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await addDoc(collection(db, "taxiBookings"), formData);
      setSuccessMsg("Booking submitted successfully!");
      setFormData({
        name: "",
        number: "",
        email: "",
        car: "",
        ac: false,
        placeFrom: "",
        placeTo: "",
        dateFrom: "",
        dateTo: "",
        otherStops: "",
        returntrip: false
      });
    } catch (error) {
      setErrorMsg("Error submitting booking: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h2>Book a Taxi</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Select Car:</label>
          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          >
            <option value="">Select a car</option>
            {cars.map(car => (
              <option key={car.id} value={car.carName}>
                {car.carName}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            <input
              type="checkbox"
              name="ac"
              checked={formData.ac}
              onChange={handleChange}
            />
            AC Required
          </label>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>From:</label>
          <input
            type="text"
            name="placeFrom"
            value={formData.placeFrom}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>To:</label>
          <input
            type="text"
            name="placeTo"
            value={formData.placeTo}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Start Date:</label>
          <input
            type="date"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>End Date:</label>
          <input
            type="date"
            name="dateTo"
            value={formData.dateTo}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Other Stops:</label>
          <textarea
            name="otherStops"
            value={formData.otherStops}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            <input
              type="checkbox"
              name="returntrip"
              checked={formData.returntrip}
              onChange={handleChange}
            />
            Return Trip Required
          </label>
        </div>

        <button type="submit" disabled={loading} style={{ width: "100%", padding: 8 }}>
          {loading ? "Submitting..." : "Book Taxi"}
        </button>

        {successMsg && <div style={{ color: "green", marginTop: 10 }}>{successMsg}</div>}
        {errorMsg && <div style={{ color: "red", marginTop: 10 }}>{errorMsg}</div>}
      </form>
    </div>
  );
};

export default BookTaxiForm;

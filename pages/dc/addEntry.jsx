import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const AddEntryForm = () => {
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
    returntrip: false,
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await addDoc(collection(db, "entries"), {
        ...formData,
        createdAt: new Date()
      });
      setSuccessMsg("Entry added successfully!");
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
        returntrip: false,
        message: ""
      });
    } catch (error) {
      console.error("Error adding entry:", error);
      setErrorMsg("Failed to add entry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>Add Entry</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
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
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Car:</label>
          <input
            type="text"
            name="car"
            value={formData.car}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
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

        <div style={{ marginBottom: 12 }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>

        <button type="submit" disabled={loading} style={{ width: "100%", padding: 8 }}>
          {loading ? "Adding..." : "Add Entry"}
        </button>

        {successMsg && <div style={{ color: "green", marginTop: 10 }}>{successMsg}</div>}
        {errorMsg && <div style={{ color: "red", marginTop: 10 }}>{errorMsg}</div>}
      </form>
    </div>
  );
};

export default AddEntryForm;

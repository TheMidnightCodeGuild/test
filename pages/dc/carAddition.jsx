import React, { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const CarAdditionForm = () => {
  const [carName, setCarName] = useState("");
  const [taxiPriceAc, setTaxiPriceAc] = useState("");
  const [taxiPriceNonAc, setTaxiPriceNonAc] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [carPhotoLink, setCarPhotoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    // Basic validation
    if (
      !carName ||
      !taxiPriceAc ||
      !taxiPriceNonAc ||
      !carNumber ||
      !carPhotoLink
    ) {
      setErrorMsg("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "cars"), {
        carName,
        taxiPriceAc: Number(taxiPriceAc),
        taxiPriceNonAc: Number(taxiPriceNonAc),
        carNumber,
        carPhotoLink,
      });
      setSuccessMsg("Car added successfully!");
      setCarName("");
      setTaxiPriceAc("");
      setTaxiPriceNonAc("");
      setCarNumber("");
      setCarPhotoLink("");
    } catch (error) {
      setErrorMsg("Error adding car: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Car Name:</label>
          <input
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Taxi Price (AC):</label>
          <input
            type="number"
            value={taxiPriceAc}
            onChange={(e) => setTaxiPriceAc(e.target.value)}
            required
            min="0"
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Taxi Price (Non-AC):</label>
          <input
            type="number"
            value={taxiPriceNonAc}
            onChange={(e) => setTaxiPriceNonAc(e.target.value)}
            required
            min="0"
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Car Number:</label>
          <input
            type="text"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Car Photo Link:</label>
          <input
            type="text"
            value={carPhotoLink}
            onChange={(e) => setCarPhotoLink(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 8 }}>
          {loading ? "Adding..." : "Add Car"}
        </button>
        {successMsg && <div style={{ color: "green", marginTop: 10 }}>{successMsg}</div>}
        {errorMsg && <div style={{ color: "red", marginTop: 10 }}>{errorMsg}</div>}
      </form>
    </div>
  );
};

export default CarAdditionForm;

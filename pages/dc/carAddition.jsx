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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Add New Car
            </h2>
            <p className="text-gray-600">Add a new vehicle to your fleet</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Car Name
              </label>
              <input
                type="text"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
                required
                placeholder="e.g., Honda City, Toyota Innova"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Taxi Price (AC) - ₹ per km
              </label>
              <input
                type="number"
                value={taxiPriceAc}
                onChange={(e) => setTaxiPriceAc(e.target.value)}
                required
                min="0"
                placeholder="15"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Taxi Price (Non-AC) - ₹ per km
              </label>
              <input
                type="number"
                value={taxiPriceNonAc}
                onChange={(e) => setTaxiPriceNonAc(e.target.value)}
                required
                min="0"
                placeholder="12"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Car Number
              </label>
              <input
                type="text"
                value={carNumber}
                onChange={(e) => setCarNumber(e.target.value)}
                required
                placeholder="MP 09 AB 1234"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Car Photo URL
              </label>
              <input
                type="url"
                value={carPhotoLink}
                onChange={(e) => setCarPhotoLink(e.target.value)}
                required
                placeholder="https://example.com/car-image.jpg"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-gray-700"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Adding Car...
                </div>
              ) : (
                "Add Car to Fleet"
              )}
            </button>

            {successMsg && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {successMsg}
              </div>
            )}

            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarAdditionForm;

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const ManageTaxiBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const q = query(collection(db, "taxiBookings"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const bookingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate().toLocaleString() || 'No date'
        }));
        setBookings(bookingsData);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteDoc(doc(db, "taxiBookings", id));
        setBookings(bookings.filter(booking => booking.id !== id));
      } catch (err) {
        console.error("Error deleting booking:", err);
        alert("Failed to delete booking");
      }
    }
  };

  const handleEdit = (booking) => {
    setEditingId(booking.id);
    setEditForm(booking);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setEditForm({
      ...editForm,
      [e.target.name]: value
    });
  };

  const handleUpdate = async (id) => {
    try {
      const docRef = doc(db, "taxiBookings", id);
      const updateData = { ...editForm };
      delete updateData.id;
      delete updateData.createdAt;
      
      await updateDoc(docRef, updateData);
      
      setBookings(bookings.map(booking => 
        booking.id === id ? { ...editForm, createdAt: booking.createdAt } : booking
      ));
      setEditingId(null);
    } catch (err) {
      console.error("Error updating booking:", err);
      alert("Failed to update booking");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>Manage Taxi Bookings</h1>
      <div>
        {bookings.map((booking) => (
          <div 
            key={booking.id} 
            style={{
              border: '1px solid #ddd',
              padding: 15,
              marginBottom: 15,
              borderRadius: 5
            }}
          >
            {editingId === booking.id ? (
              <>
                <div style={{ marginBottom: 12 }}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="number"
                    value={editForm.number}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>Car Type:</label>
                  <input
                    type="text"
                    name="car"
                    value={editForm.car}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>
                    <input
                      type="checkbox"
                      name="ac"
                      checked={editForm.ac}
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
                    value={editForm.placeFrom}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>To:</label>
                  <input
                    type="text"
                    name="placeTo"
                    value={editForm.placeTo}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="dateFrom"
                    value={editForm.dateFrom}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>End Date:</label>
                  <input
                    type="date"
                    name="dateTo"
                    value={editForm.dateTo}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>Other Stops:</label>
                  <textarea
                    name="otherStops"
                    value={editForm.otherStops}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>
                    <input
                      type="checkbox"
                      name="returntrip"
                      checked={editForm.returntrip}
                      onChange={handleChange}
                    />
                    Return Trip Required
                  </label>
                </div>
                <button 
                  onClick={() => handleUpdate(booking.id)}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    marginRight: 10
                  }}
                >
                  Save Changes
                </button>
                <button 
                  onClick={() => setEditingId(null)}
                  style={{
                    backgroundColor: '#999',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 4,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>Name: {booking.name}</h3>
                <p>Phone: {booking.number}</p>
                <p>Email: {booking.email}</p>
                <p>Car Type: {booking.car}</p>
                <p>AC Required: {booking.ac ? 'Yes' : 'No'}</p>
                <p>From: {booking.placeFrom}</p>
                <p>To: {booking.placeTo}</p>
                <p>Start Date: {booking.dateFrom}</p>
                <p>End Date: {booking.dateTo}</p>
                <p>Other Stops: {booking.otherStops}</p>
                <p>Return Trip: {booking.returntrip ? 'Yes' : 'No'}</p>
                <p>Booking Date: {booking.createdAt}</p>
                <button
                  onClick={() => handleEdit(booking)}
                  style={{
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    marginRight: 10
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(booking.id)}
                  style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 4,
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTaxiBookings;

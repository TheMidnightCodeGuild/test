import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const ManageEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const q = query(collection(db, "entries"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const entriesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate().toLocaleString() || 'No date'
        }));
        setEntries(entriesData);
      } catch (err) {
        console.error("Error fetching entries:", err);
        setError("Failed to load entries");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        await deleteDoc(doc(db, "entries", id));
        setEntries(entries.filter(entry => entry.id !== id));
      } catch (err) {
        console.error("Error deleting entry:", err);
        alert("Failed to delete entry");
      }
    }
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setEditForm(entry);
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
      const docRef = doc(db, "entries", id);
      const updateData = { ...editForm };
      delete updateData.id;
      delete updateData.createdAt;
      
      await updateDoc(docRef, updateData);
      
      setEntries(entries.map(entry => 
        entry.id === id ? { ...editForm, createdAt: entry.createdAt } : entry
      ));
      setEditingId(null);
    } catch (err) {
      console.error("Error updating entry:", err);
      alert("Failed to update entry");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>Manage Entries</h1>
      <div>
        {entries.map((entry) => (
          <div 
            key={entry.id} 
            style={{
              border: '1px solid #ddd',
              padding: 15,
              marginBottom: 15,
              borderRadius: 5
            }}
          >
            {editingId === entry.id ? (
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
                <div style={{ marginBottom: 12 }}>
                  <label>Message:</label>
                  <textarea
                    name="message"
                    value={editForm.message}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <button
                  onClick={() => handleUpdate(entry.id)}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '10px'
                  }}
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  style={{
                    backgroundColor: '#808080',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>Name: {entry.name}</h3>
                <p>Phone: {entry.number}</p>
                <p>Email: {entry.email}</p>
                <p>Car Type: {entry.car}</p>
                <p>AC: {entry.ac ? 'Yes' : 'No'}</p>
                <p>From: {entry.placeFrom}</p>
                <p>To: {entry.placeTo}</p>
                <p>Start Date: {entry.dateFrom}</p>
                <p>End Date: {entry.dateTo}</p>
                <p>Other Stops: {entry.otherStops}</p>
                <p>Return Trip: {entry.returntrip ? 'Yes' : 'No'}</p>
                <p>Message: {entry.message}</p>
                <p>Created: {entry.createdAt}</p>
                <button
                  onClick={() => handleEdit(entry)}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '10px',
                    marginTop: '10px'
                  }}
                >
                  Edit Entry
                </button>
                <button
                  onClick={() => handleDelete(entry.id)}
                  style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  Delete Entry
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEntries;

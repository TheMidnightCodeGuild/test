import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const ManageCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const q = query(collection(db, "cars"));
        const querySnapshot = await getDocs(q);
        const carsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCars(carsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load cars");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await deleteDoc(doc(db, "cars", id));
        setCars(cars.filter(car => car.id !== id));
      } catch (err) {
        console.error("Error deleting car:", err);
        alert("Failed to delete car");
      }
    }
  };

  const handleEdit = (car) => {
    setEditingId(car.id);
    setEditForm(car);
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm({
      ...editForm,
      [name]: type === 'checkbox' ? checked : 
              (name === 'taxiPriceAc' || name === 'taxiPriceNonAc') ? Number(value) : value
    });
  };

  const handleUpdate = async (id) => {
    try {
      if (!editForm.carName || !editForm.carNumber || !editForm.taxiPriceAc || 
          !editForm.taxiPriceNonAc || !editForm.carPhotoLink) {
        alert("Please fill in all fields");
        return;
      }

      const carRef = doc(db, "cars", id);
      const updateData = { 
        ...editForm
      };
      delete updateData.id;
      
      await updateDoc(carRef, updateData);
      
      setCars(cars.map(car => 
        car.id === id ? { ...car, ...editForm } : car
      ));
      setEditingId(null);
    } catch (err) {
      console.error("Error updating car:", err);
      alert("Failed to update car");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Manage Cars</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {cars && cars.length > 0 ? (
          cars.map((car) => (
            <div 
              key={car.id} 
              style={{ 
                border: '1px solid #ddd',
                padding: 20,
                borderRadius: 8
              }}
            >
              {editingId === car.id ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <input
                    type="text"
                    name="carName"
                    value={editForm.carName || ''}
                    onChange={handleEditChange}
                    placeholder="Car Name"
                    required
                  />
                  <input
                    type="text"
                    name="carNumber"
                    value={editForm.carNumber || ''}
                    onChange={handleEditChange}
                    placeholder="Car Number"
                    required
                  />
                  <input
                    type="number"
                    name="taxiPriceAc"
                    value={editForm.taxiPriceAc || ''}
                    onChange={handleEditChange}
                    placeholder="AC Price"
                    required
                  />
                  <input
                    type="number"
                    name="taxiPriceNonAc"
                    value={editForm.taxiPriceNonAc || ''}
                    onChange={handleEditChange}
                    placeholder="Non-AC Price"
                    required
                  />
                  <input
                    type="text"
                    name="carPhotoLink"
                    value={editForm.carPhotoLink || ''}
                    onChange={handleEditChange}
                    placeholder="Car Photo Link"
                    required
                  />
                  <button 
                    onClick={() => handleUpdate(car.id)}
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}
                  >
                    Save
                  </button>
                  <button 
                    onClick={() => setEditingId(null)}
                    style={{
                      backgroundColor: '#777',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <h3>Car Name: {car.carName}</h3>
                  <p>Car Number: {car.carNumber}</p>
                  <p>AC Price: ₹{car.taxiPriceAc}</p>
                  <p>Non-AC Price: ₹{car.taxiPriceNonAc}</p>
                  <img 
                    src={car.carPhotoLink} 
                    alt={car.carName} 
                    style={{
                      maxWidth: '200px',
                      marginTop: '10px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }} 
                  />
                  <button
                    onClick={() => handleEdit(car)}
                    style={{
                      backgroundColor: '#2196F3',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: 4,
                      cursor: 'pointer',
                      marginRight: 10,
                      marginTop: 10
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)}
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
          ))
        ) : (
          <div>No cars found</div>
        )}
      </div>
    </div>
  );
};

export default ManageCars;

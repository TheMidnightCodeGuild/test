import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const ManageEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "enquiries"));
      const enquiriesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEnquiries(enquiriesData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching enquiries:", err);
      setError("Failed to load enquiries");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "enquiries", id));
      setEnquiries(enquiries.filter(enquiry => enquiry.id !== id));
    } catch (err) {
      console.error("Error deleting enquiry:", err);
      alert("Failed to delete enquiry");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>Manage Enquiries</h1>
      
      {enquiries.length === 0 ? (
        <p>No enquiries found</p>
      ) : (
        <div>
          {enquiries.map((enquiry) => (
            <div 
              key={enquiry.id} 
              style={{
                border: '1px solid #ddd',
                padding: 15,
                marginBottom: 15,
                borderRadius: 5
              }}
            >
              <h3>Name: {enquiry.name}</h3>
              <p>Email: {enquiry.email}</p>
              <p>Phone: {enquiry.phone}</p>
              <p>Message: {enquiry.message}</p>
              <button
                onClick={() => handleDelete(enquiry.id)}
                style={{
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  marginTop: 10
                }}
              >
                Delete Enquiry
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEnquiry;

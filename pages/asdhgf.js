import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function CarPriceManager() {
  const [prices, setPrices] = useState({
    balenoAuto: 0,
    balenoManual: 0,
    endeavourAuto: 0,
    ertigaAuto: 0,
    ertigaManual: 0,
    fortunerAuto: 0,
    i10Auto: 0,
    i10Manual: 0,
    i20AutoSunRoof: 0,
    i20Manual: 0,
    miniCooper: 0,
    swiftAuto: 0,
    swiftManual: 0,
    tharAuto: 0,
    tharHardTopAuto: 0
  });

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [enquiriesLoading, setEnquiriesLoading] = useState(true);
  const [enquiriesError, setEnquiriesError] = useState(null);
  const [deletingEnquiry, setDeletingEnquiry] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const docRef = doc(db, 'carPrice', 'carPrice');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setPrices(docSnap.data());
        }
        setLoading(false);
      } catch (err) {
        setError('Error fetching prices');
        setLoading(false);
      }
    };

    const fetchEnquiries = async () => {
      try {
        setEnquiriesLoading(true);
        const enquiriesCollection = collection(db, 'Enquiries');
        const enquiriesSnapshot = await getDocs(enquiriesCollection);
        const enquiriesList = enquiriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEnquiries(enquiriesList);
        setEnquiriesLoading(false);
      } catch (err) {
        setEnquiriesError('Error fetching enquiries');
        setEnquiriesLoading(false);
      }
    };

    fetchPrices();
    fetchEnquiries();
  }, []);

  const handlePriceChange = (field, value) => {
    setPrices(prev => ({
      ...prev,
      [field]: Number(value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const docRef = doc(db, 'carPrice', 'carPrice');
      await updateDoc(docRef, prices);
      setSuccess(true);
    } catch (err) {
      setError('Error updating prices');
    }
    setLoading(false);
  };

  const handleDeleteEnquiry = async (id) => {
    try {
      setDeletingEnquiry(id);
      const enquiryRef = doc(db, 'Enquiries', id);
      await deleteDoc(enquiryRef);
      setEnquiries(enquiries.filter(enquiry => enquiry.id !== id));
    } catch (err) {
      setEnquiriesError('Error deleting enquiry');
    } finally {
      setDeletingEnquiry(null);
    }
  };

  if (loading) return (
    <>
      <Head>
        <title>Admin Dashboard - Car Price Manager | india Car Rentals</title>
        <meta name="description" content="Manage car rental prices and view customer enquiries in our admin dashboard. Update pricing for our fleet of premium vehicles in india." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-10 w-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p className="mt-4 text-center text-gray-700 font-medium">Loading dashboard...</p>
        </div>
      </div>
      <Footer />
    </>
  );
  
  if (error) return (
    <>
      <Head>
        <title>Admin Dashboard - Car Price Manager | india Car Rentals</title>
        <meta name="description" content="Manage car rental prices and view customer enquiries in our admin dashboard. Update pricing for our fleet of premium vehicles in india." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
          <div className="flex items-center justify-center text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Error</h2>
          <p className="text-gray-700 text-center">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Head>
        <title>Admin Dashboard - Car Price Manager | india Car Rentals</title>
        <meta name="description" content="Manage car rental prices and view customer enquiries in our admin dashboard. Update pricing for our fleet of premium vehicles in india." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Navbar />
      
      <div className="bg-gray-50 min-h-screen pt-24 pb-12">
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 border-b pb-4 border-yellow-300">
            Admin Dashboard
          </h1>
          
          <div className="mb-10 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Car Price Manager
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(prices).map(([field, value]) => (
                  <div key={field} className="flex flex-col bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-yellow-300 transition-colors duration-200">
                    <label className="text-sm font-medium mb-2 text-gray-700" htmlFor={field}>
                      {field.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        id={field}
                        type="number"
                        value={value}
                        onChange={(e) => handlePriceChange(field, e.target.value)}
                        className="border rounded-md p-2 pl-8 w-full text-sm sm:text-base focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition-all"
                        min="0"
                        aria-label={`Price for ${field.replace(/([A-Z])/g, ' $1').trim()}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-300 disabled:text-gray-500 font-medium transition duration-300 flex items-center justify-center"
                  aria-label="Update car prices"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating...
                    </>
                  ) : 'Update Prices'}
                </button>
                
                {success && (
                  <div className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-md" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Prices updated successfully!</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="mt-10 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Customer Enquiries
            </h2>
            
            {enquiriesLoading ? (
              <div className="p-8 text-center">
                <svg className="animate-spin h-8 w-8 text-yellow-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-4 text-gray-600">Loading enquiries...</p>
              </div>
            ) : enquiriesError ? (
              <div className="p-8 text-red-500 text-center bg-red-50 rounded-lg" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">{enquiriesError}</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                <table className="min-w-full bg-white" aria-label="Customer enquiries table">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" scope="col">Name</th>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" scope="col">Email</th>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell" scope="col">Phone</th>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell" scope="col">Message</th>
                      <th className="py-3 px-4 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {enquiries.length > 0 ? (
                      enquiries.map((enquiry) => (
                        <tr key={enquiry.id} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="py-3 px-4 text-sm text-gray-800">{enquiry.name}</td>
                          <td className="py-3 px-4 text-sm text-gray-800 truncate max-w-[120px] sm:max-w-none">{enquiry.email}</td>
                          <td className="py-3 px-4 text-sm text-gray-800 hidden sm:table-cell">{enquiry.phone}</td>
                          <td className="py-3 px-4 text-sm text-gray-800 hidden md:table-cell truncate max-w-[200px] lg:max-w-none">{enquiry.message}</td>
                          <td className="py-3 px-4 text-sm">
                            <button
                              onClick={() => handleDeleteEnquiry(enquiry.id)}
                              disabled={deletingEnquiry === enquiry.id}
                              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-xs font-medium transition duration-150 flex items-center"
                              aria-label={`Delete enquiry from ${enquiry.name}`}
                            >
                              {deletingEnquiry === enquiry.id ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Deleting...
                                </>
                              ) : (
                                <>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Delete
                                </>
                              )}
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-6 text-center text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                          </svg>
                          <p>No enquiries found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

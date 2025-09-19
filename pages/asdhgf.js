import { useState } from 'react';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "Create Manual Entry",
      path: "/dc/addEntry",
      description: "Add new manual entries to the system",
      icon: "📝"
    },
    {
      title: "Add Cars",
      path: "/dc/carAddition",
      description: "Add new cars to the fleet",
      icon: "🚗"
    },
    {
      title: "Manage Cars",
      path: "/dc/manageCars",
      description: "View and manage existing cars",
      icon: "🔧"
    },
    {
      title: "Manage Enquiries",
      path: "/dc/manageEnquiry",
      description: "Handle customer enquiries",
      icon: "📨"
    },
    {
      title: "Manage Manual Entries",
      path: "/dc/manageEntries",
      description: "View and manage manual entries",
      icon: "📋"
    },
    {
      title: "Manage Taxi Bookings",
      path: "/dc/manageTaxiBookings",
      description: "Handle taxi booking requests",
      icon: "🚕"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              bg-white rounded-lg shadow-md p-6 cursor-pointer
              transform transition-all duration-300 hover:shadow-xl
              ${hoveredCard === index ? 'scale-105' : 'scale-100'}
            `}
            onClick={() => router.push(card.path)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

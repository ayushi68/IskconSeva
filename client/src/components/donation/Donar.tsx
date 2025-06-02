import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define the Donor type for TypeScript
interface Donor {
  id: string; // Changed to string to match MongoDB _id
  name: string;
  amount: number;
  date: string;
}

// Function to fetch recent donors from the API
const fetchRecentDonors = async (): Promise<Donor[]> => {
  try {
    const response = await fetch('/api/recent-donations?category=annadana-seva&limit=6', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch donor data');
    }
    const data = await response.json();
    // Map API response to Donor interface
    return data.map((item: any) => ({
      id: item._id.toString(),
      name: item.firstName,
      amount: parseFloat(item.amount),
      date: item.createdAt,
    }));
  } catch (error) {
    console.error('Error fetching donors:', error);
    throw error;
  }
};

const Donor: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDonors = async () => {
      try {
        const data = await fetchRecentDonors();
        setDonors(data);
        setLoading(false);
      } catch (err) {
        setError('Unable to load recent donors. Please try again later.');
        setLoading(false);
      }
    };
    getDonors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-amber-800"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 py-10 text-lg font-semibold">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-amber-800 mb-8 text-center">
        Our Recent Donors
      </h2>
      {donors.length === 0 ? (
        <p className="text-center text-gray-600 text-lg py-6">No recent donors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor) => (
            <motion.div
              key={donor.id}
              className="bg-white rounded-xl shadow-lg border border-amber-100 p-6 transform transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-800 text-xl font-bold">
                    {donor.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{donor.name}</p>
                  <p className="text-sm text-gray-500">{new Date(donor.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</p>
                </div>
              </div>
              <p className="text-xl font-bold text-amber-600">
                ₹{donor.amount.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-600 mt-2">Thank you for supporting </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donor;
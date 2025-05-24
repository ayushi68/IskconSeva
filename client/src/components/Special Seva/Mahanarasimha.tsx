import React from 'react';
import DonationForm from '../donation/DonationForm'; // Importing the pre-existing DonationForm component

const MahaSudarshanaNarasimhaYajnaSeva: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-100 to-orange-100">
      {/* Header */}
      <header className="bg-red-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Maha Sudarshana Narasimha Yajna Seva - HKM Bhilai
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            "Invoke the divine protection of Lord Narasimha and the Sudarshana Chakra."
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-pulse-slow">
            Embrace the Power of Maha Sudarshana Narasimha Yajna
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
            “namo bhagavate narasimhaya, sudarshana-chakraya cha <br />
            vajra-nakha vajra-damstra, raksha raksha sarvatah” <br />
            — Adapted from Narasimha Stotra and Sudarshana Mantra <br />
            "Obeisances to Lord Narasimha and the Sudarshana Chakra, with thunderbolt nails and teeth, protect us from all dangers."
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join HKM Bhilai in the Maha Sudarshana Narasimha Yajna Seva, a sacred fire sacrifice to invoke the combined blessings of Lord Narasimha and the Sudarshana Chakra for protection, purification, and spiritual elevation.
          </p>
        </div>
      </section>

      {/* About Maha Sudarshana Narasimha Yajna Seva */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
            What is Maha Sudarshana Narasimha Yajna Seva?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lord Narasimha & Sudarshana Chakra</h3>
              <p className="text-gray-600">
                Lord Narasimha, the fierce protector of devotees, and the Sudarshana Chakra, Lord Vishnu’s divine discus, together offer unparalleled protection and spiritual strength. This yajna invokes their combined power to dispel negativity and obstacles.
              </p>
            </div>
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Sacred Yajna</h3>
              <p className="text-gray-600">
                The Maha Sudarshana Narasimha Yajna is a grand Vedic fire sacrifice performed with precise mantras and offerings. It purifies the environment, protects participants, and fosters devotion, bringing divine blessings to all involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Participation */}
      <section className="py-16 bg-gradient-to-br from-red-200 to-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Support This Seva?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Contributing to the Maha Sudarshana Narasimha Yajna Seva brings divine protection, removes material and spiritual obstacles, and deepens your connection with Lord Narasimha and the Sudarshana Chakra. Your support uplifts society and spreads divine grace.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-red-700">Divine Protection</h3>
              <p className="text-gray-600">Receive the shield of Lord Narasimha and the Sudarshana Chakra against all dangers.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-red-700">Spiritual Purification</h3>
              <p className="text-gray-600">The yajna cleanses the mind and soul, fostering devotion and inner peace.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-red-700">Community Blessings</h3>
              <p className="text-gray-600">Your contribution supports sacred rituals, benefiting all participants and society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-8">Contribute to Maha Sudarshana Narasimha Yajna Seva</h2>
          <DonationForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            For more details or to contribute, reach out to HKM Bhilai-Raipur:
          </p>
          <p className="mt-2">Email: info@hkmbhilai.org</p>
          <p>Phone: +91-123-456-7890</p>
          <p className="mt-2">
            <a href="https://hkmbhilai.org/donate" className="text-red-400 hover:underline">
              Visit our donation page
            </a>
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default MahaSudarshanaNarasimhaYajnaSeva;
import React from 'react';
import DonationForm from '../donation/DonationForm'; // Importing the pre-existing DonationForm component

const Narasimhayajna: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
      {/* Header */}
      <header className="bg-red-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Narasimha Yajna - HKM Bhilai
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            "Invoke the protection of Lord Narasimha through sacred yajna."
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-pulse-slow">
            Seek the Blessings of Lord Narasimha
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
            “namo bhagavate narasimhaya <br />
            namas tejas-tejase avir-avirbhava vajra-nakha vajra-damstra” <br />
            — Narasimha Stotra <br />
            "Obeisances to Lord Narasimha, whose effulgence is the source of all power, who appears with thunderbolt nails and teeth to protect His devotees."
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join HKM Bhilai in performing Narasimha Yajna, a sacred fire sacrifice to invoke the divine protection and blessings of Lord Narasimha, the fierce protector of His devotees.
          </p>
        </div>
      </section>

      {/* About Narasimha Yajna */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8">What is Narasimha Yajna?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Glory of Lord Narasimha</h3>
              <p className="text-gray-600">
                Lord Narasimha, the half-man, half-lion incarnation of Lord Krishna, appeared to protect His devotee Prahlada and destroy evil. His fierce form symbolizes divine protection and the triumph of devotion over material obstacles.
              </p>
            </div>
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Power of Yajna</h3>
              <p className="text-gray-600">
                Narasimha Yajna is a Vedic fire sacrifice performed with Vedic mantras to invoke Lord Narasimha’s blessings. It purifies the environment, protects devotees from negativity, and fosters spiritual growth through selfless participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Participation */}
      <section className="py-16 bg-gradient-to-br from-red-200 to-orange-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Support Narasimha Yajna?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Participating in Narasimha Yajna brings divine protection, removes obstacles, and deepens your connection with Lord Narasimha. Your contributions help organize these sacred rituals, benefiting both participants and society.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-red-600">Divine Protection</h3>
              <p className="text-gray-600">Invoke Lord Narasimha’s grace to shield you from material and spiritual dangers.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-red-600">Spiritual Purification</h3>
              <p className="text-gray-600">The yajna purifies the mind and soul, fostering devotion and clarity.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-red-600">Community Upliftment</h3>
              <p className="text-gray-600">Your support helps spread Lord Narasimha’s blessings to all participants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Contribute to Narasimha Yajna</h2>
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

export default Narasimhayajna;
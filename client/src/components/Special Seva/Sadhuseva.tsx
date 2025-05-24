import React from 'react';
import DonationForm from '../donation/DonationForm';

const Sadhuseva: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
      {/* Header */}
      <header className="bg-orange-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Sadhu Seva - HKM Bhilai
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            "Serve the devotees of Lord Krishna and receive divine blessings."
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-pulse-slow">
            Embrace the Spirit of Sadhu Seva
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
            “gopī-bhartuḥ pada-kamalayor dāsa-dāsānudāsaḥ” <br />
            "I am simply the servant of the servant of the servant of the lotus feet of Lord Krishna, the beloved maintainer of the gopis." <br />
            — Śrī Caitanya-caritāmṛta, Madhya 13.80
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join HKM Bhilai in serving sadhus, the pure devotees of Lord Krishna, and attract His divine mercy through selfless service.
          </p>
        </div>
      </section>

      {/* About Sadhu Seva */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">What is Sadhu Seva?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Role of Sadhus</h3>
              <p className="text-gray-600">
                As Srila Prabhupada explains, "A sādhu is one who unflinchingly engages in devotional service to Krishna." Sadhus and sadhvis renounce worldly life to focus on spiritual practices, guiding us to cut material attachments.
              </p>
            </div>
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Power of Seva</h3>
              <p className="text-gray-600">
                Sadhu seva, or Vaishnava seva, involves supporting these great souls who live simply, dedicating their lives to Lord Krishna. Your contributions provide essentials like food, clothing, and shelter, honoring their service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-gradient-to-br from-yellow-200 to-orange-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Donate to Sadhu Seva?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Sadhus in holy places like Ayodhya lead austere lives, relying on devotees’ kindness. Your donations support their devotional practices—bhajans, kirtans, and circumambulation—bringing you closer to Lord Krishna.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-orange-600">Divine Blessings</h3>
              <p className="text-gray-600">Serving sadhus attracts Lord Krishna’s merciful glance.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-orange-600">Spiritual Growth</h3>
              <p className="text-gray-600">Seva fosters humility and devotion, advancing your spiritual journey.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-orange-600">Joy of Giving</h3>
              <p className="text-gray-600">Experience the profound joy of supporting Krishna’s devotees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Reserve Your Seva Now</h2>
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
            <a href="https://hkmbhilai.org/donate" className="text-orange-400 hover:underline">
              Visit our donation page
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sadhuseva;
import React from 'react';
import DonationForm from '../donation/DonationForm';

const GitaDaan: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-yellow-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Gita Daan - HKM Bhilai
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            "Gift the Bhagavad Gita, share the wisdom of Lord Krishna."
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-pulse-slow">
            The Timeless Wisdom of Bhagavad Gita
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
            “gita su-gita kartavya, kim anyaih shastra-vistaraih <br />
            ya svayam padmanabhasya, mukha-padmad vinihsrita” <br />
            "Because Bhagavad-gita is spoken by the Supreme Personality of Godhead, one need only attentively and regularly hear and read Bhagavad-gita."
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            As Albert Einstein said, “I have made the Bhagavad Gita as the source of my inspiration and guide for the purpose of scientific investigation and formation of my theories.”
          </p>
        </div>
      </section>

      {/* About Gita Daan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">What is Gita Daan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Power of Gifting Gita</h3>
              <p className="text-gray-600">
                Lord Krishna Himself says, “For one who explains this supreme secret to the devotees, pure devotional service is guaranteed, and at the end he will come back to Me.” Gifting the Bhagavad Gita saves souls from material existence and brings divine blessings to both donor and recipient.
              </p>
            </div>
            <div className="card-3d bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transform Lives</h3>
              <p className="text-gray-600">
                The Bhagavad Gita, with Srila Prabhupada’s undeviated explanations, has transformed millions worldwide. By donating the Gita, you help people overcome material struggles, rekindle their wisdom, and improve their lives.
              </p>
            </div>
          </div>
        </div>
        </section>

      {/* Why Donate */}
      <section className="py-16 bg-gradient-to-br from-blue-200 to-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Support Gita Daan?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            In today’s world, people face countless challenges due to a lack of spiritual knowledge. Your contribution to Gita Daan helps spread the Gita’s wisdom, uplifting society and guiding souls toward Lord Krishna.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-blue-600">Spiritual Elevation</h3>
              <p className="text-gray-600">Donating the Gita guarantees pure devotional service and a path back to Krishna.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-blue-600">Global Impact</h3>
              <p className="text-gray-600">Share the Gita’s wisdom to transform lives across the world.</p>
            </div>
            <div className="card-3d bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-blue-600">Joy of Giving</h3>
              <p className="text-gray-600">Experience the bliss of helping others discover spiritual truth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Join Gita Daan Today</h2>
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
            <a href="https://hkmbhilai.org/donate" className="text-blue-400 hover:underline">
              Visit our donation page
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default GitaDaan;
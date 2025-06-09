import React, { useState, useEffect } from 'react';
import DonationForm from './DonationForm'; // Replace with actual donation form component path
import Donor from './Donar'; // Replace with actual donor component path
import { motion } from 'framer-motion';

const Generaldonation: React.FC = () => {
  // Carousel images (replace with actual temple-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=General+Donation+1',
    'https://via.placeholder.com/1200x500?text=General+Donation+2',
    'https://via.placeholder.com/1200x500?text=General+Donation+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`General Donation Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Support Our Sacred Mission
          </h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImage ? 'bg-white' : 'bg-gray-400'
              } shadow-md`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center">
          General Donation: A Gift of Devotion
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At the heart of our temple’s mission is the spirit of giving. Your
          general donations support the daily operations, spiritual programs, and
          community outreach efforts that keep the divine presence vibrant and
          accessible to all. Every contribution, no matter the size, is an act of
          devotion that helps sustain our sacred traditions and serves humanity.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Inspired by the teachings of Sanatana Dharma, your generosity ensures
          that the temple remains a beacon of spirituality, offering solace,
          education, and divine connection to devotees and visitors alike.
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-indigo-50 to-blue-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          The Impact of Your Donation
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your contributions make a tangible difference in sustaining the temple’s
          sacred activities. General donations are utilized for:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 mt-4">
          <li>Maintaining daily deity worship and rituals</li>
          <li>Supporting temple maintenance and upkeep</li>
          <li>Providing free prasadam to devotees and visitors</li>
          <li>Organizing spiritual education programs and festivals</li>
          <li>Supporting community outreach and charitable initiatives</li>
        </ul>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          By donating, you become a vital part of our mission to spread love,
          devotion, and spiritual wisdom, ensuring that the temple continues to
          serve as a sanctuary for all.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Join Us in Service
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your support is essential to keep our temple’s sacred traditions alive.
          Whether it’s a one-time gift or a recurring donation, your contribution
          helps us continue our service to the Divine and the community. Together,
          let’s create a legacy of devotion and compassion.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          For more details or to donate, please contact us at{' '}
          <a
            href="mailto:contact@hkmbhilai.org"
            className="text-indigo-600 hover:underline"
          >
            contact@hkmbhilai.org
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919755098615"
            className="text-indigo-600 hover:underline"
          >
            +91 9755098615
          </a>.
        </p>
        <a
          href="https://hkmbhilai.org/donate"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform transition-transform hover:scale-105"
        >
          Offer Seva
        </a>
      </section>

      <section className="py-20 px-4 md:px-16 lg:px-32 bg-[linear-gradient(135deg,#fef3c7_0%,#f97316_100%)]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Donor />
        </motion.div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Make Your Contribution
        </h2>
        <DonationForm preselectedCategoryId="General-Donation"/>
      </section>
    </div>
  );
};

export default Generaldonation;
import React, { useState, useEffect } from 'react';
import DonationForm from './DonationForm'; // Replace with actual donation form component path

const Corpusdonation: React.FC = () => {
  // Carousel images (replace with actual temple-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Corpus+Donation+1',
    'https://via.placeholder.com/1200x500?text=Corpus+Donation+2',
    'https://via.placeholder.com/1200x500?text=Corpus+Donation+3',
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Corpus Donation Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Corpus Donation Seva: A Legacy of Devotion
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
          Corpus Donation: Serving Krishna Eternally
        </h2>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4 mb-4">
          “pūjādīnāṁ pravāhārthaṁ mahā-parvasv athānv-aham<br />
          kṣetrāpaṇa-pura-grāmān dattvā mat-sārṣṭitām iyāt”<br />
          <span className="text-sm">— Śrīmad-Bhāgavatam 11.27.51</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          One who offers the Deity gifts of land, markets, cities, and villages so
          that the regular daily worship and special festivals of the Deity may go
          on continually will achieve opulence equal to My own. As Srila
          Prabhupada explains, “Whatever goes into that spiritual bank account is
          never lost, even at the time of death.” Your corpus donation ensures the
          continuity of sacred worship and festivals at the temple.
        </p>
      </section>

      {/* Life Patron Program Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-indigo-50 to-purple-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          The Life Patron Program
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Srila Prabhupada introduced the “Life Patrons” system in ISKCON temples
          to keep devotees connected to the temple and its divine activities.
          Life Patrons are the torchbearers of the Krishna Conscious movement,
          engaging in chanting, sankirtan, satsang programs, participating in
          festivals, and spreading the message of Krishna Consciousness.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          By becoming a Life Patron through a corpus donation, you receive numerous
          benefits, including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 mt-4">
          <li>Special invitations to temple festivals</li>
          <li>Three-day stays at ISKCON centers across India with minimal expenses</li>
          <li>Copies of Srimad Bhagavatam and other books by Srila Prabhupada</li>
          <li>Sankalpa and archana performed in your name on special days of your choice</li>
        </ul>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Your contribution ensures the temple’s mission continues to thrive,
          bringing divine mercy and blessings to all.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Join the Life Patron Program
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          There is only welfare and satisfaction in serving Krishna, with no loss
          at all. By participating in the Corpus Donation Seva, you take part in a
          transcendental service that brings divine blessings and eternal
          connection with Krishna. Your generous contribution supports the temple’s
          sacred activities and ensures their continuity for future generations.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          For more details or to become a Life Patron, please contact us at{' '}
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
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform transition-transform hover:scale-105">
          Become a Life Patron
        </button>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-purple-50 to-indigo-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Contribute to Corpus Donation Seva
        </h2>
        <DonationForm />
      </section>
    </div>
  );
};

export default Corpusdonation;
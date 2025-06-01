import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DonationForm from './DonationForm';

// Define the type for the membership options
interface MembershipOption {
  title: string;
  description: string;
  price: string;
  bgColor: string;
}

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

  // Membership options data
  const membershipOptions: MembershipOption[] = [
    { 
      title: 'Life Membership Programme (Sevak)', 
      description: 'Join as a Sevak to support the temple’s mission with a foundational contribution', 
      price: '', 
      bgColor: 'bg-indigo-400' 
    },
    { 
      title: 'Life Membership Programme (Dharma Karta)', 
      description: 'Become a Dharma Karta to deepen your commitment to Krishna Consciousness', 
      price: '', 
      bgColor: 'bg-indigo-400' 
    },
    { 
      title: 'Life Membership Programme (Dharmadhikari)', 
      description: 'As a Dharmadhikari, take a leadership role in supporting temple activities', 
      price: '', 
      bgColor: 'bg-indigo-400' 
    },
    { 
      title: 'Life Membership Programme (Maha Dharmadhikari)', 
      description: 'Join as a Maha Dharmadhikari to make a significant impact on the temple’s mission', 
      price: '', 
      bgColor: 'bg-indigo-400' 
    },
    { 
      title: 'Life Membership Programme (Mukhya Dharmadhikari)', 
      description: 'Become a Mukhya Dharmadhikari, a key patron ensuring the temple’s legacy', 
      price: '', 
      bgColor: 'bg-indigo-400' 
    },
  ];

  // Function to scroll to the donation form
  const scrollToDonationForm = () => {
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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

      {/* Life Membership Options Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4 text-center">
          Life Membership Options
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Choose a membership tier to become a Life Patron and support the temple’s sacred mission
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {membershipOptions.map((option, index) => (
            <motion.div
              key={index}
              className={`${option.bgColor} p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-2">{option.title}</h4>
              <p className="text-sm mb-4">{option.description}</p>
              <p className="text-lg font-semibold">{option.price}</p>
              <button
                className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
                onClick={scrollToDonationForm}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
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
        <button 
          className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform transition-transform hover:scale-105"
          onClick={scrollToDonationForm}
        >
          Become a Life Patron
        </button>
      </section>

      {/* Donation Form Section */}
      <section 
        id="donation-form"
        className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-purple-50 to-indigo-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Contribute to Corpus Donation Seva
        </h2>
        <DonationForm preselectedCategoryId="Become-a-Life-Patron"/>
      </section>
    </div>
  );
};

export default Corpusdonation;
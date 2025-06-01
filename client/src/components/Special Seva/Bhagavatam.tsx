import React from 'react';
import { motion } from 'framer-motion';
import DonationForm from '../donation/DonationForm';

// Define the type for the seva options
interface SevaOption {
  title: string;
  description: string;
  price: string;
  bgColor: string;
}

const Bhagavatam: React.FC = () => {
  // Seva options data
  const sevaOptions: SevaOption[] = [
    { 
      title: 'Srimad Bhagvatam Prachara - 18 Volume Set (English)', 
      description: 'Sponsor the distribution of an 18-volume set of Srimad Bhagavatam in English', 
      price: '', 
      bgColor: 'bg-indigo-500' 
    },
    { 
      title: 'Srimad Bhagvatam Prachara - 18 Volume Set (Hindi)', 
      description: 'Sponsor the distribution of an 18-volume set of Srimad Bhagavatam in Hindi', 
      price: '', 
      bgColor: 'bg-indigo-500' 
    },
  ];

  // Function to scroll to the donation form
  const scrollToDonationForm = () => {
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-800 text-white font-sans">
      {/* Hero Section with 3D Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')] bg-cover bg-center opacity-20"></div>
        <div className="text-center z-10 transform perspective-1000 rotateY-10 scale-100 hover:scale-105 transition-transform duration-500">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Śrīmad-Bhāgavatam: The Greatest Purana
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Gift the transcendental wisdom of Śrīmad-Bhāgavatam and transform lives with Krishna Consciousness.
          </p>
        </div>
      </section>

      {/* About Śrīmad-Bhāgavatam Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">The Supreme Spiritual Literature</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="transform perspective-1000 rotateX-5 hover:rotateX-0 transition-transform duration-500">
              <p className="text-lg leading-relaxed">
                Described as the greatest of all Puranas, Śrīmad-Bhāgavatam is likened to the Gaṅgā among rivers, Lord Acyuta among deities, and Lord Śiva among Vaiṣṇavas. This sacred text, as per Śrīmad-Bhāgavatam 12.13.16, holds unparalleled spiritual wisdom that can liberate souls from the cycle of birth and death, offering true peace and purpose.
              </p>
              <p className="mt-4 text-lg">
                By gifting Śrīmad-Bhāgavatam, you share transcendental knowledge that uplifts the less privileged, doubles the spiritual merit for the giver, and sets the receiver on a path of divine fulfillment. Join HKM Bhilai in spreading this timeless wisdom.
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1513415756790-2ae6b4db4263"
                alt="Śrīmad-Bhāgavatam"
                className="rounded-lg shadow-lg transform group-hover:scale-105 group-hover:rotateY-10 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">The Amalam Puranam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic font-light transform perspective-1000 rotateX-10 hover:rotateX-0 transition-transform duration-500">
            “There is no literature throughout the universe like Śrīmad-Bhāgavatam. There is no comparison. There is no competition. Every word is for the good of human society.”
            <footer className="mt-4 text-lg font-semibold">
              — Srila Prabhupada, Lecture on SB 1.16.8, Los Angeles, January 5, 1974
            </footer>
          </blockquote>
          <p className="mt-6 text-lg">
            Gifting Śrīmad-Bhāgavatam is an act of profound charity, doubling the spiritual rewards for the giver and igniting a new life of spiritual value for the receiver.
          </p>
        </div>
      </section>

      {/* Bhagavatam Seva Options Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-4">Bhagavatam Seva Options</h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Choose a seva to share the divine wisdom of Śrīmad-Bhāgavatam and uplift souls worldwide
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {sevaOptions.map((option, index) => (
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
                  Sponsor Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action and Donation Form */}
      <section id="donation-form" className="py-16 px-4 md:px-16 bg-gradient-to-b from-purple-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Gift Śrīmad-Bhāgavatam Today</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            At HKM Bhilai, we are committed to sharing the divine wisdom of Śrīmad-Bhāgavatam with the world. By gifting this sacred text to your loved ones or supporting our mission through donations, you can help liberate souls and spread Krishna Consciousness. Be a part of this noble cause today!
          </p>
          <div className="transform perspective-1000 rotateX-5 hover:rotateX-0 transition-transform duration-500">
            <DonationForm preselectedCategoryId="Bhagavatam-Daan"/>
          </div>
          <p className="mt-8 text-lg">
            For more details or to participate, contact us at: <br />
            <a href="mailto:info@hkmbhilai.org" className="underline hover:text-yellow-300">info@hkmbhilai.org</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-indigo-950 text-center">
        <p className="text-lg">HKM Bhilai | Spreading Krishna Consciousness Worldwide</p>
        <p className="mt-2 text-sm">© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Bhagavatam;
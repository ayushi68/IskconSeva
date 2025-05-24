import React from 'react';
import DonationForm from '../donation/DonationForm'; // Importing the existing DonationForm component

const Ekadashiseva: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-800 text-white font-sans">
      {/* Hero Section with 3D Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center opacity-20"></div>
        <div className="text-center z-10 transform perspective-1000 rotateY-10 scale-100 hover:scale-105 transition-transform duration-500">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Ekadashi Seva: Embrace Divine Service
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Join HKM Bhilai in observing Ekadashi, a sacred day of fasting and devotion to Lord Sri Krishna.
          </p>
        </div>
      </section>

      {/* About Ekadashi Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">The Significance of Ekadashi Seva</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="transform perspective-1000 rotateX-5 hover:rotateX-0 transition-transform duration-500">
              <p className="text-lg leading-relaxed">
                Ekadashi is a sacred day observed twice a month in the Vedic tradition, dedicated to Lord Vishnu and His devotees. It is a time for fasting, prayer, and performing seva (selfless service) to deepen one’s connection with Lord Sri Krishna. At HKM Bhilai, we invite you to participate in Ekadashi Seva by engaging in devotional activities, distributing Srila Prabhupada’s books, or supporting our mission through donations.
              </p>
              <p className="mt-4 text-lg">
                Inspired by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, our Ekadashi Seva programs aim to uplift souls by spreading Krishna Consciousness. By participating, you contribute to a global movement of spiritual awakening and divine love.
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597"
                alt="Ekadashi Devotion"
                className="rounded-lg shadow-lg transform group-hover:scale-105 group-hover:rotateY-10 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">A Day of Divine Connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-800 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic font-light transform perspective-1000 rotateX-10 hover:rotateX-0 transition-transform duration-500">
            “Fasting on Ekadashi and remembering the Lord’s pastimes purifies the heart and brings one closer to Krishna.”
            <footer className="mt-4 text-lg font-semibold">
              — Inspired by Srila Prabhupada’s Teachings
            </footer>
          </blockquote>
          <p className="mt-6 text-lg">
            “Through selfless service on Ekadashi, we can offer our love and devotion to Lord Krishna, transforming our lives and others’.”
          </p>
        </div>
      </section>

      {/* Call to Action and Donation Form */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-blue-800 to-purple-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Join Ekadashi Seva at HKM Bhilai</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Be a part of our sacred mission to honor Ekadashi through devotion, service, and sharing Krishna’s teachings. Whether you participate in our programs, distribute books, or support us with your generous donations, your contribution will help spread spiritual light. Join us today!
          </p>
          <div className="transform perspective-1000 rotateX-5 hover:rotateX-0 transition-transform duration-500">
            <DonationForm />
          </div>
          <p className="mt-8 text-lg">
            For more details or to participate, contact us at: <br />
            <a href="mailto:info@hkmbhilai.org" className="underline hover:text-yellow-300">info@hkmbhilai.org</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-purple-950 text-center">
        <p className="text-lg">HKM Bhilai | Spreading Krishna Consciousness Worldwide</p>
        <p className="mt-2 text-sm">© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Ekadashiseva;
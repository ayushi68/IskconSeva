import React, { useState, useEffect } from 'react';
import DonationForm from './DonationForm'; // Replace with actual donation form component path

const Offlinedonation: React.FC = () => {
  // Carousel images (replace with actual temple-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=HKM+Bhilai+1',
    'https://via.placeholder.com/1200x500?text=HKM+Bhilai+2',
    'https://via.placeholder.com/1200x500?text=HKM+Bhilai+3',
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`HKM Bhilai Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Offline Donation: Serve Krishna with Devotion
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
        <h2 className="text-4xl font-bold text-teal-800 mb-6 text-center">
          Immerse in Krishna’s Divine Presence
        </h2>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-teal-500 pl-4 mb-4">
          “man-manā bhava mad-bhakto mad-yājī māṁ namaskuru<br />
          mām evaiṣyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ”<br />
          <span className="text-sm">— Bhagavad Gita 9.34</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          Engage your mind always in thinking of Me, become My devotee, offer
          obeisances to Me, and worship Me. Being completely absorbed in Me, surely
          you will come to Me. The serene atmosphere of HKM Bhilai helps devotees
          follow Lord Krishna’s divine instruction. Gazing upon the captivating
          tribhanga form of the Lord, associating with devotees, hearing Srimad
          Bhagavatam and Bhagavad Gita, chanting, participating in Sankirtan, and
          honoring prasadam—all these activities fill our hearts with complete
          absorption in Krishna.
        </p>
      </section>

      {/* Temple Experience Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-teal-50 to-green-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
          Experience the Serenity of HKM Bhilai
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Visit HKM Bhilai, where the peaceful and enlivening ambiance fosters a
          deep connection with Krishna. Witness the temple’s vibrant activities,
          from soulful kirtans to enlightening discourses, and partake in the
          sanctified prasadam that purifies the heart. These sacred practices are
          sustained by the generous donations of pious individuals like you.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-teal-500 pl-4 my-4">
          “patram pushpam phalam toyam yo me bhaktyā prayacchati,<br />
          tad aham bhakty-upahṛtam aśnāmi prayatātmanaḥ.”<br />
          <span className="text-sm">— Bhagavad Gita 9.26</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whatever little offering you can make with love and devotion, Krishna is
          pleased to accept it. Your contributions help maintain the temple’s
          divine atmosphere and its many spiritual activities.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
          Support HKM Bhilai with Your Donation
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          The temple’s many activities, from deity worship to community outreach,
          rely on the open-handed donations of devotees. By offering your
          contributions for Krishna, you become a vital part of this sacred
          mission, helping to spread His divine love and wisdom.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          To make an offline donation, please visit the temple office or contact
          us at{' '}
          <a
            href="mailto:contact@hkmbhilai.org"
            className="text-teal-600 hover:underline"
          >
            contact@hkmbhilai.org
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919755098615"
            className="text-teal-600 hover:underline"
          >
            +91 9755098615
          </a>.
        </p>
        <button className="mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transform transition-transform hover:scale-105">
          Contribute Now
        </button>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-green-50 to-teal-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
          Offer Your Donation
        </h2>
        <DonationForm preselectedCategoryId="Offline-Donation"/>
      </section>
    </div>
  );
};

export default Offlinedonation;
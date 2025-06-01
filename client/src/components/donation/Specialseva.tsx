import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Specialseva: React.FC = () => {
  // Carousel images (replace with actual temple/seva-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Special+Seva+1',
    'https://via.placeholder.com/1200x500?text=Special+Seva+2',
    'https://via.placeholder.com/1200x500?text=Special+Seva+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Seva data for sub-columns
  const sevaItems = [
    {
      title: 'Sadhu Seva',
      description: 'Support the noble sadhus...',
      contactLink: 'mailto:contact@hkmbhilai.org',
      link: '/Sadhuseva',
    },
    {
      title: 'Ekadashi Seva',
      description: 'Participate in the sacred...',
      contactLink: 'mailto:contact@hkmbhilai.org',
      link: '/Ekadashiseva',
    },
    {
      title: 'Gyaan Daan Seva',
      description: 'Contribute to spreading...',
      contactLink: 'mailto:contact@hkmbhilai.org',
      link: '/Gyaandaan',
    },
    {
      title: 'Gita Daan',
      description: 'Sponsor the distribution...',
      contactLink: 'mailto:contact@hkmbhilai.org',
      link: '/Gitadaan',
    },
    {
      title: 'Bhagavatam Daan',
      description: 'Support the dissemination...',
      contactLink: 'mailto:contact@hkmbhilai.org',
      link: '/Bhagavatam',
    },
    {
      title: 'Sri Narasimha Yajna Seva',
      description: 'Contribute to the sacred...',
      contactLink: 'mailto:contact@hkmbhilai.org',
      link: '/SriNarasimha',
    },
    {
      title: 'Maha Sudarshana Narasimha Yajna Seva',
      description: 'Support the grand...',
      contactLink: 'mailto:contact@hkmbhilai.org',
      link: '/Mahanarasimha',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-purple-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Special Seva Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Special Seva: Serve with Devotion
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
        <h2 className="text-4xl font-bold text-purple-800 mb-6 text-center">
          Special Seva: A Divine Opportunity
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At HKM Bhilai, our special seva opportunities allow devotees to engage in
          unique acts of devotion, each designed to deepen your connection with
          Lord Krishna and Srimati Radharani. From supporting sadhus to sponsoring
          sacred yajnas and sharing Vedic wisdom, these sevas offer a profound way
          to serve the Divine and receive boundless blessings.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Your generous contributions ensure these sacred activities continue,
          spreading spiritual light and divine mercy to all. Explore the special
          seva opportunities below and join us in this transcendental service.
        </p>
      </section>

      {/* Seva Sub-Columns Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-purple-50 to-rose-100">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          Our Special Seva Opportunities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sevaItems.map((seva, index) => (
            <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              {seva.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{seva.description}</p>
            <div className="flex flex-col gap-2">
              <Link
                to={seva.link}
                className="inline-block px-4 py-2 bg-purple-100 text-purple-800 font-semibold rounded-lg shadow-md hover:bg-purple-200 transform transition-transform hover:scale-105 text-center"
              >
                View Details
              </Link>
            </div>
          </div>          
          ))}
        </div>
      </section>

      {/* Call to Support Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Join Our Special Seva Mission
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your support for these special seva opportunities helps sustain the
          divine activities at HKM Bhilai, bringing spiritual upliftment to
          countless devotees. Every contribution, no matter how small, is an act
          of devotion that resonates with the Lord’s mercy.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          For more details or to contribute, please contact us at{' '}
          <a
            href="mailto:contact@hkmbhilai.org"
            className="text-purple-600 hover:underline"
          >
            contact@hkmbhilai.org
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919755098615"
            className="text-purple-600 hover:underline"
          >
            +91 9755098615
          </a>.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transform transition-transform hover:scale-105">
          Support Special Seva
        </button>
      </section>
    </div>
  );
};

export default Specialseva;
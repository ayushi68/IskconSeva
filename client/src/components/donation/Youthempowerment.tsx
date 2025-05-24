import React, { useState, useEffect } from 'react';
import DonationForm from './DonationForm'; // Replace with actual donation form component path

const Youthempowerment: React.FC = () => {
  // Carousel images (replace with actual youth program-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Youth+Empowerment+1',
    'https://via.placeholder.com/1200x500?text=Youth+Empowerment+2',
    'https://via.placeholder.com/1200x500?text=Youth+Empowerment+3',
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
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Youth Empowerment Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Empowering Youth for a Spiritual Tomorrow
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
        <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Nurturing Tomorrow’s Leaders
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Today’s youth are the leaders, teachers, and guides of tomorrow. It is a
          profound responsibility for parents, teachers, and spiritual institutions
          like HKM Bhilai to instill in them the strong roots of Vedic culture,
          knowledge, and practices. Overburdened by educational demands and peer
          pressures, many youth are drawn to fleeting distractions and unhealthy
          influences.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Our youth empowerment programs aim to disentangle them from these webs,
          guiding them toward the truth, eternity, and bliss of spiritual life.
          By tasting the higher joy of spirituality, young minds find inner peace
          and purpose, far surpassing illusory, momentary happiness.
        </p>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-blue-50 to-cyan-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Our Youth Empowerment Initiatives
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Weekly Character Development Programs
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              These programs introduce youth to the magnificent behavior of
              characters from timeless Vedic scriptures and divine pastimes.
              Through interactive sessions, they learn values like compassion,
              integrity, and devotion, shaping them into principled leaders.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Spiritual Library for Youth
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Young minds are naturally inquisitive. Our spiritual library offers a
              treasure trove of Vedic literature, guiding their curiosity toward
              wisdom and spiritual understanding, fostering a lifelong love for
              knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Monthly Youth Empowerment Camps
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              These camps spread spiritual awareness far and wide, enlightening and
              empowering youth through immersive experiences, kirtans, and
              discourses that inspire them to embrace a purposeful life.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Annual Educational Trips
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Exploring India’s historic pilgrimage sites, youth deepen their
              understanding of spiritual science while enjoying the blissful
              pastimes of the Lord and His devotees, creating lasting memories and
              insights.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Support Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Support the Future of India
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We invite you to extend your helping hands to brighten the future of
          tomorrow’s India. Your generous donations support our youth empowerment
          programs, helping young minds discover the joy of spiritual life and
          become torchbearers of Vedic culture.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          For more details or to contribute, please contact us at{' '}
          <a
            href="mailto:contact@hkmbhilai.org"
            className="text-blue-600 hover:underline"
          >
            contact@hkmbhilai.org
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919755098615"
            className="text-blue-600 hover:underline"
          >
            +91 9755098615
          </a>.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform transition-transform hover:scale-105">
          Support Youth Empowerment
        </button>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-cyan-50 to-blue-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Contribute to Youth Empowerment
        </h2>
        <DonationForm />
      </section>
    </div>
  );
};

export default Youthempowerment;
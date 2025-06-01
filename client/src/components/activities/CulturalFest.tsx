import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CulturalFest: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Kids at Cultural Fest',
      caption: 'Joyful moments with slokas and stories',
    },
    {
      src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Craft activities',
      caption: 'Creative crafts and fun games',
    },
    {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bhajans and songs',
      caption: 'Singing bhajans with devotion',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 font-poppins">
      <header className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-600 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598908315932-6a8c4e4f3786?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <h1 className="text-6xl font-bold relative z-10 animate-fade-in">Cultural Fest</h1>
        <p className="mt-4 text-2xl relative z-10 text-blue-100">Hare Krishna Movement, Bhilai</p>
      </header>
      <main className="max-w-6xl mx-auto p-8 space-y-16">
        <section className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <p className="absolute bottom-8 left-8 text-white text-xl font-semibold">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-blue-700 p-3 rounded-full hover:bg-white transition-all"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-blue-700 p-3 rounded-full hover:bg-white transition-all"
          >
            ❯
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </section>
        <section className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Cultural Fest</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            <strong>Cultural Camp (during summer vacation time)</strong>
            <br />
            Hare Krishna Movement (HKM) Bhilai is conducting a Summer Camp for children!
            The camp includes Slokas, Stories, Songs, Bhajans, Mantra Meditation, Craft,
            and Fun Games. So come along and enjoy some religious fun-filled activities.
          </p>
          <div className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            <strong className="text-blue-700">Contact:</strong>
            <p>
              For more information, please contact: 97550 42624, 9039215222
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:hkmbhilai@gmail.com" className="text-blue-600 hover:underline">
                hkmbhilai@gmail.com
              </a>
            </p>
          </div>
          <Link
            to="/CulturalForm"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md btn-hover text-lg font-semibold"
          >
            Register Now
          </Link>
        </section>
      </main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .btn-hover {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .btn-hover:hover {
          background-color: #2563eb;
          transform: scale(1.05);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CulturalFest;
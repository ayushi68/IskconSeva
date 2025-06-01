import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeritageFest: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1614028674026-a65e51bfd33c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Indian cultural dance',
      caption: 'Celebrating India’s rich traditions',
    },
    {
      src: 'https://images.unsplash.com/photo-1600174142587-4f5b1f1a9b7d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Traditional art contest',
      caption: 'Showcasing creativity and heritage',
    },
    {
      src: 'https://images.unsplash.com/photo-1569058242253-92d5a86a6f5b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cultural festival',
      caption: 'A carnival of contests for all ages',
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 font-inter">
      <header className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756fd443d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15"></div>
        <h1 className="text-7xl font-extrabold relative z-10 animate-slide-in">Heritage Fest</h1>
        <p className="mt-4 text-2xl relative z-10 text-amber-100">Hare Krishna Movement, Bhilai</p>
      </header>
      <main className="max-w-6xl mx-auto p-8 space-y-16">
        <section className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
                  index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/70"></div>
                <p className="absolute bottom-10 left-10 text-white text-2xl font-bold drop-shadow-lg">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-amber-500/90 text-white p-4 rounded-full hover:bg-amber-600 transition-all shadow-md"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-amber-500/90 text-white p-4 rounded-full hover:bg-amber-600 transition-all shadow-md"
          >
            ❯
          </button>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-white/50'
                } hover:bg-amber-400 transition-all`}
              ></button>
            ))}
          </div>
        </section>
        <section className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">About Heritage Fest</h2>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Heritage Fest is an entertaining and enlightening cultural carnival of contests
            for students between Pre Nursery to Class XII and above 18 years, celebrating
            India’s vibrant culture and traditions.
          </p>
          <div className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
            <strong className="text-orange-600">Contact:</strong>
            <p>
              For more information, please contact: 97550 42624, 9039215222
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:hkmbhilai@gmail.com" className="text-orange-600 hover:underline">
                hkmbhilai@gmail.com
              </a>
            </p>
          </div>
          <Link
            to="/HeritageForm"
            className="inline-block bg-orange-600 text-white py-3 px-8 rounded-full btn-hover text-xl font-semibold tracking-wide"
          >
            Register Now
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HeritageFest;
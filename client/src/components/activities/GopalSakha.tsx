import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GopalSakha: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&w=1200&q=80',
      alt: 'Children learning at Gopal Sakha Club',
      caption: 'Nurturing young minds with Krishna conscious education',
    },
    {
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Kids in spiritual activities',
      caption: 'Fostering devotion through joyful activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cultural event at Gopal Sakha',
      caption: 'Celebrating spiritual values together',
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
        <h1 className="text-6xl font-bold relative z-10 animate-fade-in">Gopal Sakha </h1>
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
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-blue-700 p-3 rounded-full hover:bg-white transition-all"
          >
            &#10095;
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
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Gopal Sakha Club</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            The quality of children’s lives and character is a major concern for parents.
            Children take their experiences into their hearts, and these experiences form
            their character. Without proper character, knowledge can be destructive to self
            and society. The aim of Gopal Sakha Club is to provide a loving environment
            where students are nourished with care and devotion. We look forward to serving
            your children, providing them with a Krishna conscious education, and most of
            all helping them along the path to Krishna Bhakti.
          </p>
          <div className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto space-y-4">
            <div>
              <strong className="text-blue-700">Fees:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Registration Fees: ₹300/- (one-time)</li>
                <li>Tuition Fees: ₹100/- per month</li>
                <li>Transportation Fees: ₹200/- per month</li>
              </ul>
            </div>
            <div>
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
          </div>
          <Link
            to="/GopalsakhaForm"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md btn-hover text-lg font-semibold"
          >
            Register Now
          </Link>
        </section>
      </main>
    </div>
  );
};

export default GopalSakha;
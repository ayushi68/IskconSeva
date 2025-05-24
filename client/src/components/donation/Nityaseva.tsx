import React, { useState, useEffect } from 'react';

const Nityaseva: React.FC = () => {
  // Carousel images (replace with actual temple-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Nitya+Seva+1',
    'https://via.placeholder.com/1200x500?text=Nitya+Seva+2',
    'https://via.placeholder.com/1200x500?text=Nitya+Seva+3',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Nitya Seva Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Nitya Seva of Sri Lordship
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
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Nitya Seva: A Path of Eternal Devotion</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          In the tradition of Sanatana Dharma, the practice of <span className="font-semibold">Nitya Seva</span> (daily service) to the Divine Lord holds immense spiritual significance. This sacred duty involves daily offerings and rituals performed with utmost reverence and love for the Lord, ensuring that the deities in our temples are honored and cared for at all times.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Nitya Seva is a wonderful opportunity to serve and reciprocate the love the Lord showers on us. Through your generous contributions, you can support the daily services to the Lord, fostering a deeper connection with the Divine.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Benefits of Offering Nitya Seva</h2>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4 mb-4">
          “One who offers the Deity gifts of land, markets, cities and villages so that the regular daily worship and special festivals of the Deity may go on continually will achieve opulence equal to My own.”<br />
          <span className="text-sm">— Śrīmad-Bhāgavatam 11.27.51</span>
        </blockquote>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4 mb-4">
          “sv-alpam apy asya dharmasya trāyate mahato bhayāt.”<br />
          “A little advancement on this path can protect one from the most dangerous type of fear.”<br />
          <span className="text-sm">— Lord Krishna</span>
        </blockquote>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
          <li>Your charity will purify you from karmic reactions.</li>
          <li>Your generosity helps uphold spiritual practices for the benefit of humanity.</li>
          <li>Becoming a Nitya Sevak ensures that our service to God and society continues smoothly every day.</li>
          <li>All Nitya Sevaks become regular patrons, receiving updates on various temple programs.</li>
        </ul>
      </section>

      {/* Importance Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Importance of Nitya Seva</h2>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4 mb-4">
          “If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I will accept it.”<br />
          <span className="text-sm">— Bhagavad Gita 9.26</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          This verse captures the essence of Nitya Seva, reminding us that it is not the grandeur of offerings that matter, but the love and devotion with which they are given. The continuous performance of rituals ensures that the divine presence remains vibrant in the temple and within our hearts.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4 my-4">
          “The occupational activities a man performs according to his position are only so much useless labor if they do not provoke attraction for the message of the Supreme Lord.”<br />
          <span className="text-sm">— Srimad Bhagavatam 1.2.8</span>
        </blockquote>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4 my-4">
          “There are innumerable eternal living entities who are eternally and totally dependent upon the supreme singular living entity, the Supreme Lord.”<br />
          <span className="text-sm">— Katha Upanisad 2.2.13</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lord Krishna, out of His causeless mercy, takes care of all beings. Nitya Seva offers us the chance to purify our hearts, develop divine qualities, and deepen our connection with the Lord.
        </p>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-indigo-50 to-blue-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Supporting Nitya Seva through Donations</h2>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4 mb-4">
          “Through charity and renunciation, immortality is attained.”<br />
          <span className="text-sm">— Brihadaranyaka Upanishad 5.2.1</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          For centuries, temples have been centers of spiritual practice, sustained by devotees' offerings. Your generous donations will directly contribute to the daily worship and care of Sri Lordship, ensuring that the spiritual energy of the temple remains vibrant.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          To make a donation, please contact us at <a href="mailto:contact@hkmbhilai.org" className="text-indigo-600 hover:underline">contact@hkmbhilai.org</a> or visit our temple office. You can also contribute online through <a href="https://hkmbhilai.org/donate" className="text-indigo-600 hover:underline">our website</a>.
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform transition-transform hover:scale-105">
          Donate Now
        </button>
      </section>

      {/* Usage Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">How Your Nitya Seva Contribution is Used</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At HKM Bhilai, your Nitya Seva donations are utilized for:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 mt-4">
          <li>Alankara (deity decoration)</li>
          <li>Daily deity worship</li>
          <li>Temple maintenance</li>
          <li>Congregational spiritual education</li>
        </ul>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          For details and donations, please contact: <a href="mailto:contact@hkmbhilai.org" className="text-indigo-600 hover:underline">contact@hkmbhilai.org</a>
        </p>
      </section>

      {/* Closing Quote */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-100 to-indigo-200 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <blockquote className="text-lg text-gray-600 italic">
          “Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that as an offering unto Me.”<br />
          <span className="text-sm">— Bhagavad Gita 9.27</span>
        </blockquote>
        <p className="text-lg text-gray-600 mt-4">
          Let our acts of devotion in the form of Nitya Seva bring us closer to the Supreme Lord, transforming our lives into an offering of love, purity, and divine joy.
        </p>
      </section>
    </div>
  );
};

export default Nityaseva;
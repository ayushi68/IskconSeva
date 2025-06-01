import React from 'react';

const Youthcorner: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 font-sans">
      {/* Hero Section */}
      <header
          className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 text-center overflow-hidden bg-cover bg-center"
          style={{
              backgroundImage: `url('/cp1.jpg')`,
          }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <h1 className="relative text-5xl md:text-6xl font-extrabold tracking-tight animate-fadeIn">
          Welcome to <span className="text-yellow-300">Youth Corner</span>
        </h1>
        <p className="relative mt-4 text-lg md:text-xl text-blue-100 animate-fadeIn delay-200">
          Empowering Young Minds with Spirituality, Wisdom, and Happiness
        </p>
        {/* <button
          onClick={scrollToForm}
          className="relative mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transform transition-all duration-300"
        >
          Join Us Now!
        </button> */}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 space-y-16">
        {/* Vedic Science Course */}
        <section className="relative bg-white p-8 rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="absolute top-0 left-0 w-16 h-16 bg-blue-600 rounded-br-full opacity-10"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Vedic Science Course</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Explore life's deepest questions with the <span className="font-semibold text-blue-500">Vedic Science Course</span>. Are you your body, or beyond it? Who decides your destiny? What is the nature of God, and why do challenges come to good people? Learn the essence of meditation and yoga through the timeless wisdom of Vedic scriptures.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This course takes you on a step-by-step journey through spirituality, answering profound philosophical questions about existence, creation, and true happiness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-4">
                <div>
                  <p><strong className="text-blue-600">Timings:</strong></p>
                  <p>Saturday: 5:00 PM - 7:00 PM</p>
                  <p>Sunday: 10:30 AM - 12:30 PM</p>
                </div>
                <div>
                  <p><strong className="text-blue-600">Venue:</strong></p>
                  <p>Sri Sri Radhakrishna Mandir, Akshaya Patra Campus, Sector-6, Bhilai</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong className="text-blue-600">Contact:</strong> 97550 98615 | <a href="mailto:hkmbhilai@gmail.com" className="text-blue-500 hover:underline">hkmbhilai@gmail.com</a>
              </p>
              <a href="./Folkform" className="inline-block">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
                  Register Now
                </button>
              </a>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Vedic Science Course"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Yoga for Happiness */}
        <section className="relative bg-gradient-to-r from-green-50 to-white p-8 rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-500 rounded-bl-full opacity-10"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-green-600 mb-4">Yoga for Happiness</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover lasting happiness with the <span className="font-semibold text-green-500">Yoga for Happiness</span> course. Improve your focus, maintain a positive attitude, and find eternal joy through Vedic teachings.
              </p>
              <p className="text-gray-600 mb-4 italic">
                "We are trying to give Human society the opportunity for a life of happiness, good health, peace of mind, and all good qualities through God Consciousness." — Srila Prabhupada
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-4">
                <div>
                  <p><strong className="text-green-600">Timings:</strong></p>
                  <p>Saturday: 5:00 PM - 7:00 PM</p>
                  <p>Sunday: 10:30 AM - 12:30 PM</p>
                </div>
                <div>
                  <p><strong className="text-green-600">Venue:</strong></p>
                  <p>Sri Sri Radhakrishna Mandir, Akshaya Patra Campus, Sector-6, Bhilai</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong className="text-green-600">Contact:</strong> 97550 98615 | <a href="mailto:hkmbhilai@gmail.com" className="text-green-500 hover:underline">hkmbhilai@gmail.com</a>
              </p>
              <a href="./Folkform" className="inline-block">
                <button
                  onClick={scrollToForm}
                  className="inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
                >
                  Register Now
                </button>
              </a>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1506126279646-a697353d316e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Yoga for Happiness"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Friend of Lord Krishna (FOLK) */}
        <section className="relative bg-white p-8 rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="absolute top-0 left-0 w-16 h-16 bg-purple-600 rounded-br-full opacity-10"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">Friend of Lord Krishna (FOLK)</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Join the <span className="font-semibold text-purple-500">Friends of Lord Krishna (FOLK)</span> program by Hare Krishna Movement (HKM) Bhilai. Based on the teachings of A.C. Bhaktivedanta Swami Prabhupada, FOLK empowers youth with spiritual knowledge, values, and devotion.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every Sunday, hundreds of students gather for spiritual classes, music, dance, and delicious Prasadam. Dive into the wisdom of the Bhagavad Gita and learn to differentiate truth from illusion through logic and self-realization.
              </p>
              <p className="text-gray-700 mb-4">
                <strong className="text-purple-600">Contact:</strong> 97550 98615 | <a href="mailto:hkmbhilai@gmail.com" className="text-purple-500 hover:underline">hkmbhilai@gmail.com</a>
              </p>
              <a href="./Folkform" className="inline-block">
                <button
                  onClick={scrollToForm}
                  className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 shadow-md"
                >
                  Register Now
                </button>
              </a>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1518614368197-0b9967d7e4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Friend of Lord Krishna"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* FOLK Residency */}
        <section className="relative bg-gradient-to-r from-yellow-50 to-white p-8 rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500 rounded-bl-full opacity-10"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-yellow-600 mb-4">FOLK Residency</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Experience peaceful living with <span className="font-semibold text-yellow-500">FOL5FOLK Residency</span>. We offer stress management, anxiety relief, and a supportive community with hygienic, vegetarian meals served thrice daily.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Enjoy morning programs, meditation, group discussions, and feasts in a clean, spacious environment with professional staff ensuring your safety and well-being.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Facilities:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Spacious apartments/houses (3 BHK or more)</li>
                <li>Attached bathing and toilet facilities</li>
                <li>Geyser, inbuilt wardrobes, and water purifiers</li>
                <li>24-hour water supply and multi-utility spaces</li>
              </ul>
              <p className="text-gray-600 mb-4 italic">
                <strong>Note:</strong> No smoking, drinking, drugs, or meat allowed. Residents are expected to maintain cleanliness and harmony.
              </p>
              <p className="text-gray-700 mb-4">
                <strong className="text-yellow-600">Contact:</strong> 97550 98615
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1600585154343-9905e94502b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="FOLK Residency"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* FOLK Yatra */}
        <section className="relative bg-white p-8 rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="absolute top-0 left-0 w-16 h-16 bg-indigo-600 rounded-br-full opacity-10"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">FOLK Yatra</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Embark on a spiritual journey with <span className="font-semibold text-indigo-500">FOLK Yatra</span>. Visit holy places like Rajim, Jagannath Puri, Mayapur, Vrindavan, and more, guided by senior devotees.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                These pilgrimages offer a chance to purify your consciousness, learn about the Lord’s pastimes, and advance your spiritual life in the company of pure devotees.
              </p>
              <p className="text-gray-700 mb-4">
                <strong className="text-indigo-600">Contact:</strong> 97550 98615 | <a href="mailto:hkmbhilai@gmail.com" className="text-indigo-500 hover:underline">hkmbhilai@gmail.com</a>
              </p>
              <button
                onClick={scrollToForm}
                className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-md"
              >
                Register Now
              </button>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1519996409141-4d0c4d2e71b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="FOLK Yatra"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Youthcorner;
import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const GitaJayanti = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-white to-orange-100 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section with Slogan */}
        <div className="text-center py-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Celebrate Gita Jayanti
          </h1>
          <p className="text-lg md:text-xl text-yellow-100 mt-4 font-semibold animate-pulse">
            Rejoice in the Divine Appearance of Lord Krishna!
          </p>
        </div>

        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image with Enhanced 3D Tilt Effect */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-2 group">
            <img
            src="/images/gaurapurnima.jpg"
            alt="Gita Jayanti Celebration"
            className="w-full h-80 md:h-96 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Gita+Jayanti')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <p className="text-white font-semibold text-lg p-4">Divine Celebration Awaits!</p>
            </div>
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-200/80 border-4 border-yellow-400 backdrop-blur-lg rounded-2xl p-6 shadow-xl transform hover:-rotate-1 transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-green-900 mb-6 underline underline-offset-8 decoration-green-500">
              Gita Jayanti Festival Schedule
            </h2>
            <div className="space-y-6 text-gray-800 text-base leading-relaxed">
              <div className="bg-white/50 p-4 rounded-lg shadow-md">
                <p className="font-bold text-green-700 text-lg">AT RAIPUR</p>
                <p className="mt-1">6th September 2023</p>
                <p className="font-semibold mt-2">Venue:</p>
                <p>
                  Hukam’s Lalit Mahal, Naya Raipur Interchange, Serikhedi, Raipur.<br />
                  Celebrations start at 7:30 PM, culminating with Sri Sri RadhaKrishna Maha Abhishek & Maha Arati.
                </p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg shadow-md">
                <p className="font-bold text-green-700 text-lg">AT BHILAI</p>
                <p className="mt-1">6th September 2023</p>
                <p className="font-semibold mt-2">Venue:</p>
                <p>
                  Hukam’s Lalit Mahal, Naya Raipur Interchange, Serikhedi, Raipur.<br />
                  Celebrations start at 7:30 PM, culminating with Sri Sri RadhaKrishna Maha Abhishek & Maha Arati.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-green-600 to-green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>

        {/* About Section with Separated Slogans */}
        <div className="bg-white/90 p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">About Gita Jayanti</h2>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p className="italic text-lg text-center text-green-600 font-semibold">
              "Krishna, the Supreme Personality of Godhead, appeared to deliver the pious and annihilate the miscreants."
            </p>
            <p>
              Sri Krsna Janmashtami celebrates the divine appearance of Lord Krishna, born on the eighth day of the waning moon in the month of Shravana, as the eighth son of Vasudeva and Devaki. Though eternal, Krishna incarnates to protect the righteous and reestablish dharma. His childhood pastimes in Gokula, Vrindavan, are celebrated with grandeur.
            </p>
            <p className="bg-yellow-100 p-4 rounded-lg font-semibold text-center text-green-700">
              īśvaraḥ paramaḥ kṛṣṇaḥ sac-cid-ānanda-vigrahaḥ<br />
              anādir ādir govindaḥ sarva-kāraṇa-kāraṇam<br />
              <span className="text-sm text-gray-600">
                Krishna, known as Govinda, is the Supreme Godhead with an eternal, blissful spiritual body, the prime cause of all causes.
              </span>
            </p>
            <p>
              Krishna is the embodiment of six opulences: beauty, knowledge, fame, wealth, strength, and humility. No other incarnation displays these qualities to such a degree, making Him the Supreme Personality worshipped across India. His appearance brought prosperity, with nature celebrating through blooming flowers, singing birds, and gentle winds.
            </p>
            <p className="bg-yellow-100 p-4 rounded-lg font-semibold text-center text-green-700">
              paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām<br />
              dharma-saṁsthāpanārthāya sambhavāmi yuge yuge<br />
              <span className="text-sm text-gray-600">
                To deliver the pious, annihilate the miscreants, and reestablish dharma, I appear millennium after millennium. – Bhagavad Gita 4.8
              </span>
            </p>
            <p>
              Celebrating Janmashtami helps devotees understand Krishna’s transcendental nature, freeing them from the cycle of birth and death. The festival includes vibrant decorations, abhisheka ceremonies, and bhoga offerings, filling hearts with bliss. At Bhilai, the festivities feature cultural programs, a grand midnight aarti, and a sumptuous feast, drawing thousands of devotees.
            </p>
          </div>
        </div>

        {/* Donation Form Section */}
        <div className="bg-gradient-to-r from-yellow-200 to-orange-200 p-8 rounded-2xl shadow-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
            Support Gita Jayanti – Your Donation Matters
          </h2>
          <p className="text-gray-700 mb-6">
            Contribute to the divine celebrations and receive blessings manifold!
          </p>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default GitaJayanti;
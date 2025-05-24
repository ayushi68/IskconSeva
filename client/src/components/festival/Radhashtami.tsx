import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const Radhashtami = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-pink-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/radhashtami.jpg"
              alt="Radhashtami Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Radhashtami')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-pink-300/60 border-2 border-pink-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-purple-800 mb-4 underline underline-offset-4">
              Radhashtami Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-purple-700">AT RAIPUR:</p>
                <p>Eighth Day of Bright Moon, Bhadra Month (August–September 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Devotees fast until noon, followed by a maha-abhisheka at sunset and a transcendental feast in the afternoon.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-purple-700">AT BHILAI:</p>
                <p>Eighth Day of Bright Moon, Bhadra Month (August–September 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations include a grand shayana arati, Radhikastaka singing, and pallakki utsava after maha-arati.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
            <p>
              Radhashtami is the divine appearance day of Srimati Radharani, the eternal consort of Lord Krishna, the Supreme Personality of Godhead. Five thousand years ago, when Lord Krishna descended to this planet to perform His pastimes, Srimati Radharani also appeared, bringing boundless joy to the residents of Vrindavana.
            </p>
            <p>
              This sacred day holds immense significance for Gaudiya Vaishnavas, as Srimati Radharani’s mercy is the key to attaining Krishna-prema (divine love for Krishna). As Krishna’s dearest servant and His pleasure potency, Srimati Radharani is the queen of Vrindavana and the greatest among all of Krishna’s consorts. Her glorious birth occurred on the eighth day of the bright moon in the month of Bhadra, when the moon, though not typically full, appeared full to celebrate her divine appearance.
            </p>
            <p className="italic font-semibold bg-pink-100 p-4 rounded-lg text-center">
              “Radha is parama-devata, the supreme goddess, and She is worshipable for everyone. She is the protectress of all, and She is the mother of the entire universe.” – Caitanya Caritamrita, Adi 4.89
            </p>
            <p>
              In the Krishna consciousness movement, devotees worship Srimati Radharani as the bestower of devotional service to Krishna. They attentively chant her name in the Hare Krishna maha-mantra, worship her deity form, and follow the instructions of Sri Chaitanya Mahaprabhu, the combined form of Radha and Krishna, to cultivate pure devotion.
            </p>
            <p>
              On Radhashtami, temples are lavishly decorated with flowers and garlands, and a new outfit is offered to Srimati Radharani. A maha-abhisheka is performed at sunset, bathing her deity with a variety of ingredients and colorful flowers. Devotees prepare an elaborate bhoga offering with over 100 varieties, including sweet dishes, pastries, and cakes. After the abhisheka, the bhoga is offered, followed by a maha-arati. Devotees fast until noon and enjoy a transcendental feast in the afternoon.
            </p>
            <p>
              The celebrations conclude with a grand shayana arati, where devotees sing Radhikastaka, a special song composed by Srila Rupa Gosvami. This is followed by a grand pallakki utsava, a festive procession that fills the hearts of devotees with divine bliss.
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-pink-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-bold text-center text-purple-700 mb-6">
            Support the Festival – Make a Donation
          </h2>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Radhashtami;
import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const Vyasapuja = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/vyasapuja.jpg"
              alt="Vyasa-puja Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Vyasa-puja')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-orange-300/60 border-2 border-orange-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-orange-800 mb-4 underline underline-offset-4">
              Vyasa-puja Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-orange-700">AT RAIPUR:</p>
                <p>Nandotsava, Day After Krishna Janmashtami (August–September 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Devotees offer homage to Srila Prabhupada through bhajans, readings from his books, and chanting the Hare Krishna Maha-mantra.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-orange-700">AT BHILAI:</p>
                <p>Nandotsava, Day After Krishna Janmashtami (August–September 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Join celebrations honoring Srila Prabhupada’s legacy with kirtans, offerings, and spiritual discourses.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
            <p>
              Vyasa-puja is an annual celebration where devotees of Krishna offer homage to their guru, the spiritual teacher who guides them to the Supreme Lord. Srila Prabhupada, the founder-acharya of ISKCON, was sent by Lord Krishna to fulfill Sri Caitanya Mahaprabhu’s prophecy:
            </p>
            <p className="italic font-semibold bg-orange-100 p-4 rounded-lg text-center">
              pṛthivīte āche yata nagarādi grāma<br />
              sarvatra pracāra haibe mora nāma<br />
              <span className="text-xs text-gray-600">
                “In every town and village, the chanting of My name will be heard.”
              </span>
            </p>
            <p>
              One hundred years ago, Srila Prabhupada appeared on Nandotsava, the joyous festival celebrating Lord Krishna’s birth, when Nanda Maharaja distributed opulent gifts and Vraja resonated with Vedic hymns and blissful festivities. Growing up as a pure devotee, Srila Prabhupada spread Krishna Consciousness worldwide, establishing temples and sharing transcendental knowledge through his books.
            </p>
            <p>
              Krishna declares, “One who claims to be My devotee is not so. Only a person who claims to be the devotee of My devotee is actually My devotee.” In bhakti-yoga, accepting a spiritual master and serving him is the first duty. Srila Prabhupada’s causeless mercy has enabled countless devotees to practice Krishna bhakti globally, offering them the opportunity to return to Godhead by following his teachings.
            </p>
            <p className="italic font-semibold bg-orange-100 p-4 rounded-lg text-center">
              samsāra-dāvānala-līḍha-loka-<br />
              trāṇāya kāruṇya-ghanāghanatvam<br />
              prāptasya kalyāṇa-guṇārṇavasya<br />
              vande guroḥ śrī-caraṇāravindam<br />
              <span className="text-xs text-gray-600">
                The spiritual master, an ocean of auspicious qualities, extinguishes the fire of material existence with his mercy, like a cloud pouring water on a forest fire. I offer my obeisances to his lotus feet.
              </span>
            </p>
            <p>
              Srila Prabhupada made a perfect appearance, led a perfect life, and had a perfect departure, living forever through his books, which continue to spread Lord Caitanya’s teachings and the Hare Krishna Maha-mantra. On Vyasa-puja, devotees pray for service to his lotus feet, seeking rapid spiritual progress. As a devotee who spread Krishna’s glories worldwide, Srila Prabhupada is especially dear to the Lord, and holding fast to his guidance is the surest path to the spiritual realm.
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-orange-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-bold text-center text-orange-700 mb-6">
            Support the Festival – Make a Donation
          </h2>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Vyasapuja;
import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const Vaikuntha = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/ramnavami.jpg"
              alt="Rama Navami Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Rama+Navami')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-blue-300/60 border-2 border-blue-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-blue-800 mb-4 underline underline-offset-4">
              Rama Navami Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-blue-700">AT RAIPUR:</p>
                <p>Ninth Day of Growing Moon, Chaitra Month (March–April 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Devotees fast until sunset, followed by Rama Taraka Homa and a special shayana arati in the evening.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-blue-700">AT BHILAI:</p>
                <p>Ninth Day of Growing Moon, Chaitra Month (March–April 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Join bhajan sessions, Nama Ramayana singing, and celebrations of Lord Rama’s divine pastimes.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
            <p>
              Sri Rama Navami is the auspicious appearance day of Lord Sri Ramachandra, the Supreme Personality of Godhead, who incarnated in Treta-yuga as the ideal king. Born in Ayodhya to King Dasharatha and Queen Kausalya on the ninth day of the growing moon in Chaitra (March–April), Lord Rama appeared alongside His three younger brothers, Lakshmana, Bharata, and Shatrughna. Remarkably, His divine wedding with Sita Devi also occurred on this sacred date.
            </p>
            <p>
              The name "Rama" means ‘bliss,’ and Lord Rama bestows happiness upon all who remember and pray to Him. His pastimes, chronicled in Valmiki’s epic Ramayana, are filled with heart-touching emotions, life-molding lessons, and qualities of truthfulness, honesty, heroism, and righteousness. Celebrated as the ideal king, brother, husband, and warrior, Lord Rama’s reign, known as Rama-rajya, remains the epitome of a perfect kingdom.
            </p>
            <p>
              Lord Rama’s divine mission was to establish the principles of religion and vanquish miscreants. Exiled to the Dandakaranya forest for fourteen years by His father’s order, He lived with His wife, Sita Devi, and brother Lakshmana. When the demon Ravana kidnapped Sita, Lord Rama, aided by His devoted servant Hanuman and Lakshmana, rescued her and defeated Ravana’s armies, as detailed in the Ramayana and Bhagavata Purana.
            </p>
            <p className="italic font-semibold bg-blue-100 p-4 rounded-lg text-center">
              “By chanting His name, we invoke His presence. Think of Rama, read about Rama, hear about Rama, and chant Rama’s name.” – Great Saints
            </p>
            <p>
              On Rama Navami, devotees celebrate Lord Rama’s birth with great reverence, fasting until sunset and immersing themselves in hearing and chanting His pastimes. Temples are adorned with flowers and leaves, hosting special bhajan sessions and worship services. Devotees chant the Hare Krishna Maha-mantra, meditating on the holy name of Rama, which is non-different from the Lord Himself:
            </p>
            <p className="italic font-semibold bg-blue-100 p-4 rounded-lg text-center">
              Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare<br />
              Hare Rama, Hare Rama, Rama Rama, Hare Hare
            </p>
            <p>
              In the evening, devotees perform the Rama Taraka Homa, chanting the Sri Rama Ashtottara Shata Nama. A special shayana arati follows, accompanied by the singing of Nama Ramayana, a song narrating the entire Ramayana. These celebrations inspire devotees to follow Lord Rama’s instructions and achieve spiritual and material happiness.
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
            Support the Festival – Make a Donation
          </h2>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Vaikuntha;
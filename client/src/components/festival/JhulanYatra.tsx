import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const JhulanYatra = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/jhulanyatra.jpg"
              alt="Jhulan Yatra Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Jhulan+Yatra')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-300/60 border-2 border-yellow-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-green-800 mb-4 underline underline-offset-4">
              Jhulan Yatra Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-green-700">AT RAIPUR:</p>
                <p>6TH SEPTEMBER 2023</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations would start from 7.30 PM onwards and will culminate with Sri Sri RadhaKrishna Maha Abhishek & Maha Arati.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-green-700">AT BHILAI:</p>
                <p>6TH SEPTEMBER 2023</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations would start from 7.30 PM onwards and will culminate with Sri Sri Radha
                  Krishna Maha Abhishek & Maha Arati.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
            <p>
              Jhulan Yatra is a festival to celebrate Radha Krishna’s pastime of swinging on a golden swing every day until Balarama Purnima. Lord Krishna and his consort Sri Radha, along with the gopis (cowherd girls) and gopas (cowherd boys), swing in the monsoon season in Vrindavan with music and dance.
            </p>
            <p>
              Starting on the ekadasi of the waxing moon of Sridhara month, many temples in Vrindavan celebrate Krishna’s swing festival, some for one day, others for more days. Traditionally, many of the Deities of the Lord wear various clothing with green in it over this period until Balarama Purnima. It is a practical festive service that the devotees provide for the Lord. Monsoon is so humid, and the temperature is still so hot despite the cooling rains. With so much water coming from the sky, on the ground, and just about everywhere, the last thing that anyone wants is more water to cool off. The opulence at this time is to find a breeze, as the air is heavy with the humidity of the rains.
            </p>
            <p>
              So the devotees arrange for the pleasure and satisfaction of Krishna, Balaram, and Srimati Radhika by placing them on a swing (Jhulan) and creating their own breeze from the motion. It is a most pleasing and satisfying festival, with the swings often highly adorned with forest creepers, Jasmine (Malati) that has newly blossomed in the season, and streamers of garlands. Sometimes they use a fine spray of rose water and direct it toward the Divine couple of Radha and Krishna on Their swing.
            </p>
            <p>
              Lordships, Radha Krishnachandra, are decorated nicely and seated on a swing. All devotees wait patiently in a queue to swing Their Lordships. The swing (jhulana), beautified with splendid flower decorations, colorful beads, etc., is a sight to behold. A special flower rope is used to pull the swing. An arotik is performed after Sri Sri Radha Madhava are seated on the swing, and devotees bring a variety of bhoga to please Their Lordships. Kirtana and bhajans go on for almost two hours, and many visitors join in to pull Their Lordship’s swing.
            </p>
            <p>
              In this regard, Sri Hari-bhakti-vilasa states, <br />
              <span className="italic font-semibold">
                “To please Sri Hari, devotees hold numerous festivals on every occasion and continuously perform sankirtana. According to their ability, the devotees serve the Lord during the summer by placing Him on the boat, taking Him out on a procession, applying sandalwood on His body, fanning Him with chamara, decorating Him with jeweled necklaces, offering Him palatable foodstuffs, and bringing Him out to swing Him in the pleasant moonlight.”
              </span>
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-bold text-center text-green-700 mb-6">
            Support the Festival – Make a Donation
          </h2>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default JhulanYatra;
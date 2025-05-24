import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const NarasimhaChaturdashi = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/narasimhachaturdashi.jpg"
              alt="Narasimha Caturdashi Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Narasimha+Caturdashi')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-300/60 border-2 border-yellow-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-green-800 mb-4 underline underline-offset-4">
              Narasimha Caturdashi Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-green-700">AT RAIPUR:</p>
                <p>Shukla Chaturdashi, Vaishakha (May 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Devotees fast till dusk, followed by a maha-abhisheka with sandalwood oil and a grand arati at dusk.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-green-700">AT BHILAI:</p>
                <p>Shukla Chaturdashi, Vaishakha (May 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations include a maha-abhisheka for Laxmi-Nrisimha, new dress offerings, and sumptuous prasada distribution.
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
              Nrisimha-chaturdasi is the divine appearance day of Nrisimhadeva, Lord Krishna’s man-lion incarnation, who removes all obstacles on the path of devotional service out of His great compassion.
            </p>
            <p>
              The appearance anniversary of Lord Narasimhadeva, Lord Krishna’s incarnation as half-man, half-lion, celebrates His descent to protect His young devotee Sri Prahlada Maharaja from his torturous father, King Hiranyakashipu. Lord Narasimha Deva appears to protect His devotees. Hiranyakashipu, a demon controlling the three worlds, was extremely proud and hated Lord Vishnu. But little Prahlada, his five-year-old son, was a great devotee of Lord Vishnu. Therefore, Hiranyakashipu tried to kill Prahlada in several ways but failed in all his attempts because of the protection given by the Lord to His dear devotee. Finally, when Hiranyakashipu asked his son where the Lord resides, Prahlada replied that the Lord resides everywhere. Mocking this response, Hiranyakashipu broke a pillar in his palace, and the Lord appeared from that pillar in His half-man, half-lion incarnation – Narasimha. He then killed the demon and thus protected His devotee. Lord Narasimha Deva removes the obstacles in the path of devotional service. Devotees who pray to Him are always protected from all kinds of calamities.
            </p>
            <p>
              After Krishna’s incarnation as a boar, Varahadeva, killed the demon Hiranyaksha, the demon’s younger brother, Hiranyakashipu, was determined to get revenge and conquer the universe. He performed severe austerities to get the attention of Brahma and asked to be granted immortality. Brahma, the engineer of the universe, was himself a mortal being and so could not grant him immortality. But he did give Hiranyakashipu the boons that he could not be killed by any man or animal, by anything living or dead, during the day or night, inside or outside, on the land or in the sea or sky. Although seemingly invincible, when Hiranyakashipu tormented his youngest son Prahlada, a pure devotee of the Lord, Krishna burst out of a palace column as Nrisimhadeva. By killing Hiranyakashipu in the form of a half-man and half-lion, with his fingernails, at dusk, in the threshold of the palace and on his lap, Nrisimhadeva simultaneously respected the boons given by Brahma and saved His dear devotee Prahlada Maharaja.
            </p>
            <p className="italic font-semibold bg-yellow-100 p-4 rounded-lg text-center">
              tava kara-kamala-vare nakham adbhuta-srngam<br />
              dalita-hiranyakasipu-tanu-bhrngam<br />
              keshava dhrta-narahari-rupa jaya jagadisa hare<br />
              <span className="text-xs text-gray-600">
                “O Keshava! O Lord of the universe! O Lord Hari, who have assumed the form of half-man, half-lion! All glories to You! Just as one can easily crush a wasp between one’s fingernails, so in the same way the body of the wasp-like demon Hiranyakashipu has been ripped apart by the wonderful pointed nails on Your beautiful lotus hands.”
              </span>
            </p>
            <p>
              There are many prayers to Lord Narasimha that invoke powerful mantras for protection, appealing to the Lord’s half-lion incarnation and His weapons. These are for protection from such things as malevolent spirits and material desires, as well as increased devotion and a peaceful world. Srila Bhaktivinoda Thakura, in his Navadvipa-bhava-taranga, writes of the significance that worship of Lord Nrisimhadeva has for a Gaudiya Vaishnava: <br />
              <span className="italic font-semibold">
                “Therefore, I pray to the feet of Lord Nrisimhadeva to purify my heart and give me the desire to serve Krishna. Weeping, I beg at the lotus feet of Nrisimha that I may worship Sri Sri Radha and Krishna at Navadvipa-dhama, free from all obstacles.”
              </span>
            </p>
            <p>
              Narasimhadeva appeared at dusk on the Shukla Chaturdashi (fourteenth day of the bright fortnight) in the month of Vaishakha (May). Devotees fast till dusk on this day. At dusk, a maha-abhisheka is performed to the Deity, Laxmi-Nrisimha, with sandalwood oil and other precious oils. Since the Deity has performed unbelievable miracles in the lives of several devotees, there is naturally great enthusiasm amongst the devotees. Nrisimhadeva is offered a new dress too. After the arati, sumptuous prasada is honored by the devotees.
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

export default NarasimhaChaturdashi;
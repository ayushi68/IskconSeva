import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const Nityananda = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/nityanandatrayodashi.jpg"
              alt="Nityananda Trayodashi Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Nityananda+Trayodashi')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-300/60 border-2 border-yellow-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-green-800 mb-4 underline underline-offset-4">
              Nityananda Trayodashi Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-green-700">AT RAIPUR:</p>
                <p>Trayodashi Tithi, Magha Month (February-March 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Devotees fast until noon, followed by a grand abhisheka for Sri Sri Nitai Gauranga at 7:30 PM, concluding with Shayana Arati and Shayana Pallakki Utsava.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-green-700">AT BHILAI:</p>
                <p>Trayodashi Tithi, Magha Month (February-March 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations include a maha-abhisheka with panchamrita and 108 kalasha snana, followed by a feast of 56 items (chappan bhog).
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
              Sri Nityananda Trayodashi is the auspicious appearance day of Sri Nityananda Prabhu. The Supreme Lord Sri Krishna appeared in Navadvipa as Sri Chaitanya Mahaprabhu to establish the Sankirtana Movement (the Yuga Dharma for this age of quarrel and hypocrisy). To help the Supreme Lord in His mission, Lord Balarama appeared as Nityananda Prabhu. He assisted Sri Chaitanya Mahaprabhu by spreading the holy name of the Lord throughout Bengal.
            </p>
            <p className="italic font-semibold bg-yellow-100 p-4 rounded-lg text-center">
              Nitai-pada-kamala, koti-chandra susitala – <br />
              “The lotus feet of Lord Nityananda are cooling like a million moons.”
            </p>
            <p>
              One should take the shelter of the lotus feet of Lord Nityananda Prabhu, for He is the original spiritual master. It is by the mercy of Nitai that we can obtain love of Krishna. On Trayodashi tithi of the auspicious Magha maas (February-March), just after Vasant Panchami, when the earth is covered in beautiful and fragrant flowers blooming everywhere, the moon of Nityananda ray arose from the womb of Devi Padmavati in the most sanctified village of Ekachakra, giving unlimited bliss to Hadai Pandit, Lord Nityananda’s father, and all the other Vaishnavas. Lord Nityananda appeared about twenty years before the appearance of Chaitanya Mahaprabhu. Nityananda-trayodasi is an important celebration for Gaudiya Vaishnavas, as without the mercy of Nitai, one cannot get the mercy of Nimai.
            </p>
            <p>
              Lord Nityananda performed his inconceivably enchanting and amazing pastimes first in Ekachakra, after which he travelled to various places of pilgrimage and then joined Sri Chaitanya Mahaprabhu in Shridham Mayapur. Together, the two brothers drowned the entire universe in the loud and ecstatic chanting of the Hare Krishna Mahamantra.
            </p>
            <p>
              Lord Nityananda is the eternal associate of Chaitanya Mahaprabhu, the Supreme Personality of Godhead. Chaitanya Mahaprabhu cannot be approached or understood without the mercy of Nityananda Prabhu, who is the cardinal guru of all the universes and serves as an intermediary between Mahaprabhu and His Devotees. He is the Lord’s active principle in both creation and lila. He is the second body of the Lord, manifesting as Balaram to Shri Krishna, Lakshman to Shri Ram, and Nityananda Prabhu to Chaitanya Mahaprabhu. All other forms and expansions of the Lord emanate from this second body. Nityananda Prabhu is thus the source of Sankarshan, all the Vishu’s, and Ananta Shesha.
            </p>
            <p className="italic font-semibold bg-yellow-100 p-4 rounded-lg text-center">
              “Lord Nityananda is even more merciful than the munificent Lord Gaurahari, and the two lotus feet of his, which are as cooling as millions of moons, are the only shelter for the aspiring devotees of Lord Gaurahari in this age of Kali.”
            </p>
            <p>
              Lord Nityananda, who was Balarama in Krishna’s pastimes, accompanied Lord Chaitanya in spreading the holy names to save the most fallen souls. Having the whitish complexion like Lord Balarama, His garments resemble a cluster of blue lotus flowers, and His effulgence surpasses the grandeur of a rising moon at sunset. He has a deep melodious voice, constantly singing the glories of Sri Krishna, and carries a red stick with benedictions for the devotees, but feared by the demoniac. He has the carefree mood of a wild avadhuta, so absorbed is He in the love of Godhead, and no one knows what He will do next.
            </p>
            <p>
              The Supreme Personality of Godhead, Krishna, is the fountainhead of all incarnations. Lord Nityananda Prabhu is His second body. They are both one and the same identity, differing only in form. Nityananda Prabhu is the first bodily expansion of Krishna and assists in Lord Krishna’s transcendental pastimes. He assumes five other forms to serve Lord Krishna, executing the orders of Lord Krishna in the work of creation, and in the form of Lord Sesa, He serves Sri Krishna in various ways. No one can approach Krishna without first getting the mercy of Nityananda Prabhu.
            </p>
            <p>
              On this day, devotees fast until noon, being immersed in the pastimes of Nityananda and pray to Lord Nityananda for spiritual strength. A grand abhisheka is performed to Sri Sri Nitai Gauranga. The Deities are bathed with scented water and given a sandal oil massage. After the massage, the Deities are bathed with panchamrita (milk, curd, sweetened water, ghee, and honey) and panchagavya. The Deities are then bathed with exotic fruit juices and water mixed with herbal extracts. The sarvaushadhi snana is followed by 108 kalasha snana and concludes with pushpa-vrishti (showering of fragrant flowers on the Deities). The Deities are offered a feast of 56 items (chappan bhog). After performing abhishek for the Gaura Nitai Deities, Shayana Arati and Shayana Pallakki Utsava conclude the festival. A lively kirtan and sumptuous feast are offered in Nityananda’s honor, for the Lord’s pleasure.
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

export default Nityananda;
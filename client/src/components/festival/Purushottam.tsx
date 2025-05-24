import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const Purushottam = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/purushottam.jpg"
              alt="Purushottam Month Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Purushottam+Month')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-300/60 border-2 border-yellow-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-green-800 mb-4 underline underline-offset-4">
              Purushottam Month Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-green-700">AT RAIPUR:</p>
                <p>Purushottam Adhik Maas (Occurs every 2-3 years, TBD 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Devotees engage in devotional practices like chanting, fasting on Ekadashi, and offering ghee lamps to Sri Sri Radha Krishna throughout the month.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-green-700">AT BHILAI:</p>
                <p>Purushottam Adhik Maas (Occurs every 2-3 years, TBD 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Join daily kirtans, Bhagavad-Gita recitations, and a grand feast during this auspicious month to please Lord Krishna.
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
              Purushottam Adhik Maas, also known as Adika Maas, is an auspicious leap month in the Hindu calendar that occurs every two to three years when the full moon appears twice in less than 29 solar days. This sacred month, very dear to Lord Krishna, is equivalent to performing 16 Kartik Vratas and offers a unique opportunity for spiritual advancement through devotional service.
            </p>
            <p>
              According to the Padma Purana, Lord Krishna proclaimed, “An unfortunate ignorant man who does not perform any japa, give charity, or worship Me in Purushottam month becomes the best candidate for hell.” Engaging in devotional activities such as bathing in a holy river, worshipping Lord Sri Krishna, chanting His Holy Name, and giving in charity during this month purifies the soul and leads to a fulfilling life.
            </p>
            <p className="italic font-semibold bg-yellow-100 p-4 rounded-lg text-center">
              “Purushottam month has all the power I have to bless its observer. One who follows Purushottam Vrata will destroy all past sinful reactions and return to my abode, Goloka, at the end of his life.” – Lord Sri Krishna (Padma Purana)
            </p>
            <p>
              <strong>Story of Purushottam Month: The Gathering at Naimisaranya</strong><br />
              Thousands of sages once gathered at Naimisaranya, where Suta Goswami shared the glories of Lord Krishna’s activities. Narada Muni, seeking guidance for humanity, approached Lord Narayana at Badrika Ashram. Lord Narayana revealed the significance of Purushottam Month. The extra month, called Malamasa, felt rejected and approached Lord Vishnu in Vaikuntha. Moved by her plight, Lord Vishnu took her to Lord Krishna in Goloka, who declared, “This month will be known as Purushottam, equal to Me in potency.” Thus, Purushottam Month became the most worshipable, capable of fulfilling desires and granting liberation.
            </p>
            <p>
              <strong>The Story of Draupadi’s Past Life</strong><br />
              In her previous life, Draupadi, as a brahmani girl, offended Purushottam Month by dismissing Sage Durvasa’s advice to worship during it. As a consequence, she lost her opulence and faced hardships. Performing severe austerities for Lord Shiva, she inadvertently asked for a husband five times, resulting in her rebirth as Draupadi with five husbands. Lord Krishna advised the Pandavas to observe Purushottam Vrata sincerely, which restored their kingdom and led them to Goloka.
            </p>
            <p className="italic font-semibold bg-yellow-100 p-4 rounded-lg text-center">
              “By charity, one can achieve everything, even the impossible.” – Bhagavad-Gita 17.20
            </p>
            <p>
              <strong>Glories of Purushottam Month</strong><br />
              Purushottam Month is a thousand times more powerful than Kartik Month, as per the Padma Purana. Srila Bhaktivinoda Thakur writes, “This month is superior to Karttik, Maag, and Vaishakha. Worshipping Sri Sri Radha and Krishna in this month grants all perfection.” Observers of Purushottam Vrata burn all past sinful reactions, attain worldly happiness, and ultimately reach Goloka Vrindavana. Narada Muni states, “Just by hearing the glories of Purushottam Month, one attains Krishna-bhakti and nullifies sinful reactions.”
            </p>
            <p>
              Donating to charity during Purushottam Maas is a highly pious act. The Vishnu Purana states, “One who donates to charity during Purushottam Maas will be freed from all sins and attain Vishnu’s supreme abode.” Contributions to temples, Gau Seva, Sadhu Bhojan, or non-profits helping those in need accumulate immense spiritual merit.
            </p>
            <p className="italic font-semibold bg-yellow-100 p-4 rounded-lg text-center">
              govardhana-dharam vande, gopalam gopa-rupinam<br />
              gokulotsavam-ishanam, govindam gopika-priyam<br />
              <span className="text-xs text-gray-600">
                “I worship Gopal, the lifter of Govardhan, who is the festival of Gokul and the beloved of the gopis.” – Kaundilya Muni
              </span>
            </p>
            <p>
              <strong>Guidelines to Please Krishna During Purushottam Month</strong><br />
              Lord Krishna emphasizes that devotional services like worshipping Him, chanting the Hare Krishna Maha-mantra, studying Bhagavad-Gita (especially Chapter 15, Purushottam Yoga), and offering ghee lamps please Him the most. Key practices include:<br />
              1. Waking up during Brahma Muhurta or by 6 AM.<br />
              2. Bathing in a holy river or chanting “Ganga, Ganga, Ganga” three times.<br />
              3. Eating food without onion and garlic, offered to Lord Krishna.<br />
              4. Daily offering a ghee lamp to Sri Sri Radha Krishna.<br />
              5. Chanting at least two rounds of the Hare Krishna Maha-mantra, ideally sixteen rounds.<br />
              6. Hearing or reading Krishna’s pastimes for at least 20 minutes.<br />
              7. Singing songs glorifying Lord Krishna.<br />
              8. Taking a vow not to criticize devotees or scriptures.<br />
              9. Performing Tulsi arati and circumambulating her four times.<br />
              10. Sharing information about Purushottam Month to inspire others.<br />
              11. Reciting Chapter 15 of Bhagavad-Gita, The Purushottam Yoga.<br />
              Fasting on Ekadashi, Amavasya, and Poornima tithis and listening to the story of Purushottam Month yield auspicious results.
            </p>
            <p>
              Purushottam Month is Krishna’s favorite, as He states in the Bhagavad-Gita (15.18), “I am celebrated as Purushottam.” Devotees, sages, demigods, and even Lakshmi Devi worship this month. By sincerely observing Purushottam Vrata, one burns all bad karma, attains the service of Radha and Krishna, and secures a place in Goloka, as Krishna overlooks all offenses during this holiest of months.
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

export default Purushottam;
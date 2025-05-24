import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust path as needed

const Janmashtami = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section with Slogan */}
        <div className="relative text-center py-12 bg-gradient-to-r from-green-700 to-yellow-600 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Sri Krishna Janmashtami
          </h1>
          <p className="text-lg md:text-2xl text-yellow-100 mt-4 font-semibold animate-fade-in">
            Rejoice in the Divine Appearance of Lord Krishna, the Supreme Personality of Godhead!
          </p>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
        </div>

        {/* Image and Festival Details Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image with Fixed onError Handler */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-2 group">
            <img
              src="/images/gaurapurnima.jpg"
              alt="Gita Jayanti Celebration"
              className="w-full h-80 md:h-96 object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Gita+Jayanti')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <p className="text-white font-semibold text-lg p-6">Join the Divine Festivities!</p>
            </div>
          </div>

          {/* Festival Details */}
          <div className="bg-yellow-100/80 border-4 border-yellow-500 backdrop-blur-lg rounded-3xl p-6 shadow-xl transform hover:-rotate-1 transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-green-900 mb-6 underline underline-offset-8 decoration-green-600">
              Festival Highlights
            </h2>
            <div className="space-y-6 text-gray-800 text-base leading-relaxed">
              <div className="bg-white/50 p-4 rounded-lg shadow-md">
                <p className="font-bold text-green-700 text-lg">Celebration Details</p>
                <p className="mt-1">Date: 6th September 2023</p>
                <p className="font-semibold mt-2">Venues:</p>
                <p>
                  <strong>Raipur:</strong> Hukam’s Lalit Mahal, Naya Raipur Interchange, Serikhedi.<br />
                  <strong>Bhilai:</strong> Hukam’s Lalit Mahal, Naya Raipur Interchange, Serikhedi.<br />
                  Celebrations start at 7:30 PM, culminating with Sri Sri RadhaKrishna Maha Abhishek & Maha Arati.
                </p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg shadow-md">
                <p className="font-bold text-green-700 text-lg">Festivities</p>
                <p>
                  Devotees fast until midnight, engage in singing Krishna’s glories, and participate in a grand abhisheka ceremony. Over 500 bhoga items are offered, followed by a maha-arati and a sumptuous feast. The next day, Nandotsav continues with cultural programs and a grand feast.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-green-600 to-green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                JOIN THE CELEBRATION
              </button>
            </div>
          </div>
        </div>

        {/* About Section with Separated Slogans */}
        <div className="bg-white/90 p-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">The Glory of Sri Krishna Janmashtami</h2>
          <div className="space-y-8 text-gray-700 text-base leading-relaxed">
            <p className="italic text-lg text-center text-green-600 font-semibold bg-yellow-50 p-4 rounded-lg">
            Do you know? Who is most beautiful, most intelligent, most famous, the wealthiest, the strongest and the most renounced? Famous people like film stars, sport stars, industrialists, scientists and politicians can attract millions of fans for few years but they all appear, disappear and forgotten with the passing time like shooting stars. God is one, who is the oldest and yet possesses all six opulences in full FOREVER. The Supreme Lord is called by many names like ‘Krishna’, ‘Christ’ and ‘Allah’. The Greek word ‘krstos’ comes from Sanksrit word ‘Krsta’ or ‘Krsna’ meaning ‘all attractive’. So when we address God as “Christ”, “Krsta” or “Krishna” we indicate the same all-attractive Supreme God.
            Krishna, in his manifest pastimes, exhibited six opulences or “attractive qualities” in full: beauty, knowledge, fame, wealth, strength, and humility. No other incarnation of Godhead exhibited these qualities to the same degree, and therefore Krishna is worshipped throughout India as “The Supreme Personality of Godhead.
            </p>
            <p className="bg-yellow-100 p-6 rounded-lg font-semibold text-center text-green-700">
              īśvaraḥ paramaḥ kṛṣṇaḥ sac-cid-ānanda-vigrahaḥ<br />
              anādir ādir govindaḥ sarva-kāraṇa-kāraṇam<br />
              <span className="text-sm text-gray-600">
              Krishna, who is known as Govinda, is the Supreme Godhead. He has an eternal blissful spiritual body. He is the origin of all. He has no other origin and He is the prime cause of all causes.
              </span>
            </p>
            <p>
            Lord Krishna who is the most beautiful, strong, wealthiest, famous, intelligent and renounced person wanted to protect his pure devotees. During the birth of Lord Krishna, the whole atmosphere became filled with prosperity and joy. The trees were laden with fruits and flowers. The rivers were overflowing with water, and the lakes were beautifully decorated with lotus flowers. The birds in the forest began to sing with sweet voices, and the peacocks began to dance. The wind blew very pleasantly, carrying the aroma of different flowers. All the people’s minds became filled with peace and joy. The denizens of the heavenly planets began to sing, offer prayers and dance on the auspicious occasion. The heavenly residents being pleased also began to shower flowers. At the seashore there was the sound of mild waves, and above the sea there were clouds in the sky which began to thunder very pleasingly. Amidst such a wonderful atmosphere, Lord Krishna in order to protect his devotees took birth as the eighth child of Devaki and Vasudeva, bringing boundless joy to both of them.
            The Lord’s appearance is different from the birth of common man. He descends by His causeless mercy to protect the pious and vanquish the unrighteous. Sri Krsna is not conditioned by the laws of nature, as we are, because physical nature is one of His multifarious energies.
            The significance of celebrating Sri Krsna Janmashtami every year is to try to know Him as He is and thus to be released from the conditioned state of life. To know Him means to get complete freedom from the chain of birth and death.
            To this end, although he is unborn and eternal, the supreme lord appears in this world on the auspicious eighth day of the dark fortnight in the month of Bhadrapada, during the auspicious Rohini nakshatra, when all the stars were in auspicious constellations, a sweet scent permeated the atmosphere and the entire universe sanctified in the welcome of the Shyamsundar.
            However, due to his compassionate nature the Supreme Lord in his original form with all of his potencies and partial manifestations descends to this material world once in a day of Brahma to annihilate the miscreants, deliver the devotees and reestablish the principles of religion.
            </p>
            <p className="bg-yellow-100 p-6 rounded-lg font-semibold text-center text-green-700">
              paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām<br />
              dharma-saṁsthāpanārthāya sambhavāmi yuge yuge<br />
              <span className="text-sm text-gray-600">
                To deliver the pious, annihilate the miscreants, and reestablish dharma, I appear millennium after millennium. – Bhagavad Gita 4.8
              </span>
            </p>
            <p className="bg-yellow-100 p-6 rounded-lg font-semibold text-center text-green-700">
            janma karma ca me divyam
            evaṁ yo vetti tattvataḥ<br />
            tyaktvā dehaṁ punar janma
            naiti mām eti so ’rjuna<br />
              <span className="text-sm text-gray-600">
              One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take birth again in this material world, but attains My eternal abode, O Arjuna. –
              Bhagavad-gita 4.9
              </span>
              What the devotee actually offers the Lord is not needed by the Lord, for He is self-sufficient.
              If the devotee offers something to the Lord, it acts for his own interest.
              Because whatever a devotee offers the Lord comes back in a quantity a million times greater than what was offered.
            </p>
            <p>
            One does not become a loser by giving to the Lord; one becomes a gainer by millions of times.
            “By observing Sri Krishna Janmashtami one becomes free from the sinful reactions committed in seven lives. One gets good children, good health, and great wealth…. One will not have to fear enemies and will get sufficient rainfall and never have to suffer from drought. One will not have to fear natural calamities, hellish conditions, snakes, disease, or the attacks of rogues and thieves”.
            </p>
            <strong>
            Hari-bhakti-vilasa
            (Texts 283-284, 289-292)
            </strong>
            <p className="bg-yellow-100 p-6 rounded-lg font-semibold text-center text-green-700">
            True observance of Sri Krsna Janmashtami will solve the problems and crises in our civilization. Because of human shortcomings, we cannot solve our problems by ordinary plans. Human frailties always accompany the best endeavor of a conditioned soul. However the solutions are given by the Lord when He descends, as He did when He spoke Bhagavad-Gita and Shrimad-Bhagavatam, and for chanting the holy names of God. Participation in this programme will help one revive the lost consciousness of one’s eternal relationship with the supreme lord. When this takes place, one becomes pure in heart and thus experiences peace and happiness.
            This glorious day is therefore celebrated by all the Vaishnavas with great enthusiasm as it is the day when the lord of their lives purified this earth by his appearance, in a most attractive form of a bluish baby as soft as butter tinged with musk. Keeping the same spirit, this festival is celebrated in HKM, Bhilai with great pomp and show.
            </p>
          </div>
        </div>

        {/* Donation Form Section */}
        <div className="bg-gradient-to-r from-yellow-200 to-orange-200 p-8 rounded-3xl shadow-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
            Support the Divine Celebration
          </h2>
          <p className="text-gray-700 mb-6 italic">
            “Whatever a devotee offers the Lord comes back in a quantity a million times greater.” – Join us in this sacred festival!
          </p>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Janmashtami;
import React from 'react';

const Pilgrimage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Header Section with Kusum Sarovar Image */}
      <header
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            A Rendezvous with The Supreme Lord
          </h1>
          <p className="text-2xl md:text-3xl text-white font-serif">
            A Rendezvous with Dust of Holy Lands
          </p>
        </div>
      </header>

      {/* Kshetras Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 font-serif">Kshetras We Often Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/vrindavan" className="group">
            <div
              className="relative bg-cover bg-center h-64 rounded-lg shadow-lg overflow-hidden"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593950338333-7a7907f1e47e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')` }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Vrindavan</h3>
            </div>
          </a>
          <a href="/puri" className="group">
            <div
              className="relative bg-cover bg-center h-64 rounded-lg shadow-lg overflow-hidden"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593950338333-7a7907f1e47e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')` }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Jagannath Puri</h3>
            </div>
          </a>
          <a href="/mayapur" className="group">
            <div
              className="relative bg-cover bg-center h-64 rounded-lg shadow-lg overflow-hidden"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593950338333-7a7907f1e47e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')` }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Mayapur</h3>
            </div>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">The Essence of Pilgrimage</h2>
          <p className="text-lg leading-relaxed mb-4">
            Once a poverty-stricken descendant of a once-prosperous clan went to a foreign land in search of better prospects in life. He struggled hard to succeed there. Meanwhile, a resident of that foreign land heard about this person’s ancestral wealth, came to his family estate, found a vast treasure buried there, and became a millionaire. This allegory illustrates the state of modern Indians vis-à-vis Westerners. Indians are going to the West in search of greener pastures and are struggling to make it big amidst cut-throat competition in the corporate jungles there. But Westerners are coming to India to understand the Vedic philosophy and culture. And by studying, assimilating, and adopting the Vedic principles, they are finding deep fulfillment in their lives.
          </p>
        </section>

        {/* Blessings of a Pilgrimage */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Blessings of a Pilgrimage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Tune In</h3>
              <p className="text-lg">
                Pilgrimages help you break free from your daily routine and mundane problems, and perform devotional service to God. For householders, it is an opportunity to practice temporary renunciation, leaving everything behind to embark on a spiritual journey to the abode of God.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Happiness</h3>
              <p className="text-lg">
                Pilgrim places are powerful energy centers filled with the sacred presence and aura of deities, as well as the vibrations of prayers from devotees, priests, and saints. Visiting these places soaks you in positive energy, refreshing and uplifting your spirit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Abundance</h3>
              <p className="text-lg">
                As a pilgrim, you engage in purification practices like charity and selfless service, cultivating virtue. Many Hindu rituals and sacraments are performed at religious places to maximize the spiritual benefits of the visit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Nexus</h3>
              <p className="text-lg">
                Holy places attract spiritual people, sadhus, and holy men. On a pilgrimage, you can interact with yogis and babas, benefiting from their satsang, seeking their advice, knowledge, or blessings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Knowledge</h3>
              <p className="text-lg">
                Lord Krishna lives everywhere, but it is easier to approach Him in holy places inhabited by great sages. Visiting these sites neutralizes sinful reactions, purifying human consciousness through the presence of the Lord’s pure devotees.[](https://hkmguwahati.org/service/spiritual-tours/)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Stimulus Therapy</h3>
              <p className="text-lg">
                Traveling to pilgrimage sites leads to emancipation from material bondage. Beyond liberation, engaging in devotional service to the Lord is the ultimate goal of life, fostering transcendental loving devotion.
              </p>
            </div>
          </div>
        </section>

        {/* Yatra Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Yatra Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Lectures</h3>
              <p className="text-lg">Understand the glories of the Holy Dham through insightful lectures by senior devotees.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Holy Places</h3>
              <p className="text-lg">Visit sacred sites associated with the Lord’s pastimes, deepening your spiritual connection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Prasadam</h3>
              <p className="text-lg">Enjoy divine meals that nourish both body and soul.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Kirtan</h3>
              <p className="text-lg">Dance in ecstasy, chanting the holy names of the Lord.</p>
            </div>
          </div>
        </section>

        {/* Vrindavan Page */}
        <section
          className="mb-12 bg-cover bg-center rounded-lg shadow-lg p-8"
          style={{ backgroundImage: `url('/dc2.jpg')` }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4 font-serif">Immerse Yourself in the Dust of Gopis</h2>
          <p className="text-lg text-white leading-relaxed mb-4">
            Vrindavan is the final abode for any sadhaka trying to love God. It's that “Divya Chintamani Dham” in which the dust of Lord’s and his devotees (the gopis) enthuses us with endless devotion unto him. Surcharged with ecstasy of Kirtan and the touch of waters of Radha Kund and Shyama Kund, a devotee never desires to leave the abode of nectarean love of Radha Krishna.
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            A 5-day yatra to the “Land of Gopis” is never enough for quenching the thirst of devotion. Yet, to get a break from this dark well of material existence and to magnify the result of dham yatra, we plan this Vrindavan Dham Yatra in the month of Kartik. Come, join us in this endearing trip for an unforgettable divine experience.[](https://www.tirthayatra.org/the-greatest-experience-of-a-spiritual-journey/)
          </p>
          <div className="bg-white p-4 rounded-lg inline-block">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Packages</h3>
            <p className="text-lg">Adult: [Contact for details] (includes travel, accommodation, Prasadam)</p>
            <p className="text-lg">Child: [Contact for details]</p>
            <p className="text-lg">Extra charges for: [Contact for details]</p>
          </div>
        </section>

        {/* Jagannath Puri Page */}
        <section
          className="mb-12 bg-cover bg-center rounded-lg shadow-lg p-8"
          style={{ backgroundImage: `url('/dc2.jpg')` }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4 font-serif">Lord of The Universe, Awaits to Bless YOU</h2>
          <p className="text-lg text-white leading-relaxed mb-4">
            The “Daru Brahman” Lord, whose big eyes never miss to shower blessings on a devotee, comes out, once in a year, along with Baladev & Subhadra to give darshan to all. This festival is famous as Jagannath Ratha Yatra Festival. This is one of the biggest religious gatherings on earth.
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            “rathe ca vamanam drstva, punar janma na vidyate” – one who sees Lord Jagannath on His ratha will be freed from the cycle of birth & death. So what to speak of that great fortunate bhakta who pulls the cart of “the Lord of the Universe”. This Sri Kshetra is dotted with many pastimes of Lord, his various forms, and sites of his greatest devotees.[](https://www.hkmlife.com/jagannath-puri-mayapur-yatra/)
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            Why would anyone miss this treasured opportunity to take darshan of Lord Jagannath? Plan out to visit this holy place with the association of devotees.
          </p>
          <div className="bg-white p-4 rounded-lg inline-block">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Packages</h3>
            <p className="text-lg">Adult: [Contact for details] (includes travel, accommodation, Prasadam)</p>
            <p className="text-lg">Child: [Contact for details]</p>
            <p className="text-lg">Extra charges for: [Contact for details]</p>
          </div>
        </section>

        {/* Jagannath Puri & Mayapur Yatra */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Jagannath Puri & Mayapur Yatra</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Padma Purana states:</strong> “At Sri Purusottama [Jagannatha Puri], on the northern shore of the ocean, resides the Supreme Absolute Truth. Full of ecstatic bliss, He has assumed a transcendental body that appears wooden.”
          </p>
          <p className="text-lg leading-relaxed mb-4">
            The waves pounding on the beach, the refreshing sea breezes, the colossal hand-carved 12th century stone temple, the relaxed and happy ambience of the local folk, the bright red, yellow, and blue cloth appliqué, and that bewitching pair of big smiling eyes looking out from every wall, every billboard, every poster – “This is Jagannatha Puri Dhama”, one of India’s most popular pilgrimage sites located in Orissa, 300 miles south of Kolkata and 60km from Bhubaneswar.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Located in the sacred town of Puri, the Jagannath Temple was built in the 11th century by King Indradyumna. This glorious temple is the abode of Lord Jagannath, Baladev, and Subhadra maiyya. Jagannatha means “Lord of the Universe”. Jagannatha Swami is a unique Deity form of Lord Sri Krishna, who has especially appeared in Kali-yuga to deliver the most fallen souls. Merciful Lord Jagannatha accepts worship from one and all.[](https://www.hkmlife.com/jagannath-puri-mayapur-yatra/)
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Sridhama Mayapur is the home of the Supreme Personality of Godhead. In this abode, apparently located in the district of Nadia, West Bengal, the Supreme Personality of Godhead wonderfully appeared almost five hundred years ago. He appeared in the form of Sri Caitanya Mahaprabhu, the most merciful incarnation of the Supreme Lord, Sri Krishna. The whole of Gaura-mandala (Navadwip) is cintamani, or touchstone, yielding all desires. The dhama is full of knowledge and bliss and is completely spiritual.[](https://www.mayapur.com/2015/navadwip-mandal-parikrama-2015/)
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Jagannatha Puri and Navadvipa-Mayapur are two bhajana-sthalis for sadhaka cultivating Krishna-prema because they contribute two important ingredients. Navadvipa-Mayapur Dhama gives the mercy of Sri Krishna’s Holy Names and Gaura-Nitai kindly remove anarthas and aparadhas from the heart. Puri embodies the mood of separation – awakening deep longing and yearning to be with Sri Krishna – which forcefully carries one into Krishna’s association.[](https://www.mayapur.com/2015/navadwip-mandal-parikrama-2015/)
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Sri Navadvipa-Mayapur Dhama represents Audarya (compassion). Sri Vrindavan Dhama represents Madhurya (sweetness).
          </p>
          <div className="bg-white p-4 rounded-lg inline-block">
            <p className="text-lg font-semibold">Please register at the earliest as the number of seats is limited!</p>
            <p className="text-lg">For more queries or help in booking the tickets, please call us: <a href="tel:+919755098618" className="text-blue-600 hover:underline">+91-97550 98618</a></p>
            <p className="text-lg">Payment Modes: CASH or Cheque/DD drawn in favor of HARE KRISHNA MOVEMENT, BHILAI. Online transfer details available upon registration.</p>
            <p className="text-lg">We look forward to having you with us for this pilgrimage!</p>
          </div>
        </section>

        {/* Kartik Vrindavan Dham Yatra */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Kartik Vrindavan Dham Yatra</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Bhakti-rasamrita-sindhu — Srila Rupa Goswami:</strong> “The result of travelling to all the pilgrimages in the three worlds is achieved simply by touching the holy land of Vrindavana.”
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This human life is very rare, every moment is so precious. And the rarest of all things is the association of the Lord’s devotees. Caitanya Mahaprabhu taught through Rupa Goswami five very important principles to make spiritual progress: to associate with devotees, chant the holy names, hear Srimad Bhagavatam, worship the deities, and be in the holy dham. All of these are fully present in Vrindavan.[](https://rgyatra.com/)
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Sri Vrindavan Dhama on this planet Earth is non-different from Sri Goloka Vrindavan and was manifested by the internal potency of the Lord when He descended to perform His sweet pastimes. Sri Vrindavan-dhama is still present on this Earth to bestow causeless mercy upon sincere devotees.[](https://www.iskconvrindavan.com/)
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Are you planning to make a pilgrimage and looking for good arrangements for travel, accommodation, and guidance? Our pilgrimages, conducted by senior devotees, provide a wonderful opportunity to visit various holy places across the country, ensuring a memorable and devotionally inspiring experience. In addition to comfortable accommodation, transportation, and prasadam, you will learn about the significance of holy places and the pastimes of the Lord and His devotees.[](https://hkmguwahati.org/service/spiritual-tours/)
          </p>
          <div className="bg-white p-4 rounded-lg inline-block">
            <p className="text-lg font-semibold">Hurry up! Please register at the earliest as the number of seats is limited!</p>
            <p className="text-lg">For more queries or help in booking the tickets, please call us: <a href="tel:+919755098618" className="text-blue-600 hover:underline">+91-97550 98618</a></p>
            <p className="text-lg">Payment Modes: CASH or Cheque/DD drawn in favor of HARE KRISHNA MOVEMENT, BHILAI. Online transfer details available upon registration.</p>
            <p className="text-lg">We look forward to having you with us for this pilgrimage!</p>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="mb-12 bg-cover bg-center rounded-lg shadow-lg p-8"
          style={{ backgroundImage: `url('/dc1.jpg')` }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Testimonials</h2>
          <p className="text-lg text-white leading-relaxed mb-4">
            “An excellent yatra not to be missed. Words cannot describe the absolute divine fervor of this yatra. Extremely satisfied with the organizers, especially for taking care of my elderly mother.” – Anonymous Yatri[](https://www.tirthayatra.org/tours/vrajabhumi-yatra/comment-page-2/)
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            “The Vrajabhumi Yatra was a lifetime experience. The sthala purana narrations by the yatra director were amazing, and the satvik food was divine.” – Mukesh, Bangalore[](https://www.tirthayatra.org/tours/vrajabhumi-yatra/)
          </p>
          <p className="text-lg text-white leading-relaxed">
            “This was my first time in Vrindavan, and it brought me 100 steps closer to God. The devotees’ association and maha-prasadam were the luckiest things.” – Anjana, IBM[](https://www.tirthayatra.org/the-greatest-experience-of-a-spiritual-journey/)
          </p>
        </section>

        {/* Contact Form */}
        {/* <section className="mb-12 text-center bg-blue-200 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Contact Number</label>
                <input type="tel" id="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Please provide any additional information or special requests"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Send Message</button>
          </form>
          <p className="text-lg mt-4">
            For more queries or help in booking the tickets, please call us: <a href="tel:+919755098618" className="text-blue-600 hover:underline">+91-97550 98618</a>
          </p>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>Hare Krishna Movement Bhilai - Join Us in the Journey to Divine Abodes</p>
      </footer>
    </div>
  );
};

export default Pilgrimage;
import React from 'react';

const TempleScheduleB: React.FC = () => {
  const morningProgramme = [
    {
      time: '4:30 AM – 4:50 AM',
      event: 'Mangala Arati',
      description: [
        'Srila Prabhupada has given a mandate that there must be regular mangala-arati in the temple, an hour and a half before sunrise. (Ref: CC. Madhya 24.334, purport)',
        'Mangala-arati is the first temple ceremony of the day. It begins at 4:30 AM and is considered mangala, or “auspicious” for all who participate. A grand arati is performed by offering incense, ghee lamp, water, cloth, flowers, chamara (fan made of yak tail) & vyajana (fan made of peacock feathers) to Their Lordships. Devotees sing Guru-ashtaka, a song composed by Srila Vishwanatha Chakravarthi Thakura glorifying the spiritual master and the Hare Krishna maha-mantra.',
      ],
    },
    {
      time: '4:50 AM – 4:55 AM',
      event: 'Narasimha Kirtan',
      description: [
        'This ceremony follows mangala-arati. Narasimha is all powerful, and The Supreme Lord appeared in the form of Narasimha, half-lion and half-man, to protect His devotee Prahlada from the wrath of his father Hiranyakashipu, the greatest demon who defied the Supreme Lord. Lord Narasimha always protects His devotees and takes away the obstacles in their devotional service. Devotees offer Him prayers before they begin their services as they sing Narasimha Kirtan.',
      ],
    },
    {
      time: '4:55 AM – 5:15 AM',
      event: 'Tulasi Arati & Prayer',
      description: [
        'Tulasi is the eternal consort of Lord Krishna, and the most pure devotee, therefore, the Tulasi plant is worshiped by Vaishnavas and it is most beneficial. Simply by worshiping her faithfully, a devotee can free himself from all material miseries.',
        'Tulasi-arati is performed like this: The devotees sing prayers to Tulasi-devi while one devotee offers her arati with incense, ghee lamp, and flowers. When the song is finished, the devotees circumambulate Tulasi-devi minimum four times and offer her water by pouring minimum three drops at her root. It is said that when a person circumambulates Tulasi Devi, all the sins devotee may have committed are destroyed at every step. Devotees again offer obeisances chanting the Tulasi Pranama Mantra.',
      ],
    },
    {
      time: '5:15 AM – 7:30 AM',
      event: 'Nitya Shodasha Upachara Puja & Japa Meditation',
      description: [
        'Devotees assemble in the temple hall and chant Hare Krishna Maha Mantra. The powerful holy name of the Lord can certainly deliver one from sinful effects. Srila Prabhupada recommended that we chant at least 16 rounds (1 round = 108 times) of Hare Krishna Maha Mantra every day.',
        'Behind the closed altar doors, the kautuka murtis of Sri Radha Krishnachandra and Sri Sri Nitai Gauranga are offered shodashopachara seva (worship of the Deities with sixteen upacharas). As part of the shodashopachara seva, the Deities are also offered abhisheka and are adorned in gorgeous outfits and garlands.',
      ],
    },
    {
      time: '7:30 AM – 7:45 AM',
      event: 'Sringar Darshan Arati',
      description: [
        'At 7:15 AM, the conch shells blow, announcing that the Deities are ready to give darshan—a special moment when the Lord reveals Himself to His devotees. After being worshiped in private, Sri Sri Radha Krishnachandra and Sri Sri Nitai Gauranga appear beautifully dressed and decorated for the Sringar Darshan, or “ornamental viewing.” A short arati is performed with incense, flowers, a yak-tail fan (chamara), and a peacock feather fan, while the soulful Govindam prayers from the Brahma-samhita are played in the background.',
      ],
    },
    {
      time: '7:45 AM – 8:10 AM',
      event: 'Guru Puja & Kirtan',
      description: [
        'After the Darshan Arati, devotees lovingly carry a Deity of Srila Prabhupada in a decorated pallakki (palanquin) and walk around the temple in a joyful pradakshina (circumambulation). Srila Prabhupada is then honored with charanamrita (sacred water) and shatari (a ceremonial blessing), followed by Guru Puja—a special arati offered by the devotees to show their deep gratitude and respect.',
        'During the puja, devotees sing beautiful prayers glorifying the spiritual master, offer flower petals and obeisances at Srila Prabhupada’s lotus feet, followed by vibrant Hare Krishna kirtan with singing and dancing.',
      ],
    },
    {
      time: '8:10 AM – 9:00 AM',
      event: 'Vaishnava Bhajans & Srimad-Bhagavatam Lecture',
      description: [
        'After Guru Puja, devotees receive the charanamrita (sacred water) of the Lord and sing soulful bhajans composed by great Vaishnava Acharyas. This is followed by the daily Srimad-Bhagavatam class, where a verse is read, Srila Prabhupada’s commentary is shared, and devotees engage in meaningful discussion. “By regularly hearing the Bhagavatam and serving pure devotees, everything troubling the heart is nearly destroyed, and love for the Lord awakens.” – Srimad-Bhagavatam 1.2.18',
      ],
    },
    {
      time: '12:30 PM – 12:50 PM',
      event: 'Rajbhog Arati',
      description: [
        'A beautiful Rajbhog Arati is offered to the Deities after Their grand midday meal at 12:00 PM, including sweets, savories, rice, roti, vegetables, dal, salads, juices, and more. The arati includes offerings of incense, ghee lamp, water, cloth, flowers, and fans made of yak tail (chamara) and peacock feathers.',
      ],
    },
  ];

  const eveningProgramme = [
    {
      time: '4:30 PM – 4:40 PM',
      event: 'Dhupa Arati',
      description: [
        'The evening begins with Dhupa Arati, a short but beautiful offering of incense, flowers, camara (yak-tail fan), and a peacock fan, following the 4:00 PM fruit offering to Their Lordships. This gentle worship lasts for about 10 minutes.',
      ],
    },
    {
      time: '6:45 PM – 6:55 PM',
      event: 'Tulasi Arati',
      description: [
        'Devotees honor Tulasi Devi, the sacred plant and pure devotee of Lord Krishna, with offerings of incense, ghee lamp, and flowers while singing the Tulasi Kirtan. Devotees perform Tulasi Pradakshina (circumambulation) and chant the Tulasi Pranama Mantra.',
      ],
    },
    {
      time: '7:00 PM – 7:25 PM',
      event: 'Sandhya Arati & Narasimha Kirtan',
      description: [
        'Also known as Sri Gaura Arati, this joyful worship glorifies Lord Chaitanya Mahaprabhu and His associates. Offerings include incense, ghee lamps, water, cloth, flowers, camara, and a peacock fan, accompanied by melodious kirtan. The ceremony concludes with the powerful Narasimha Kirtan.',
      ],
    },
    {
      time: '7:30 PM – 8:00 PM',
      event: 'Bhagavad-gita Class',
      description: [
        'A Bhagavad-gita class is held for resident devotees and the congregation, including reading a verse, studying Srila Prabhupada’s commentary, and engaging in meaningful discussion to deepen understanding of spiritual life.',
      ],
    },
    {
      time: '8:15 PM – 8:30 PM',
      event: 'Shayana Arati',
      description: [
        'The final worship of the evening, where devotees take one last darshan of Sri Sri Radha Krishnachandra before They rest. Offerings include incense, flowers, a chamara, and a peacock fan, with a soothing song in praise of Their lotus feet.',
        'Special Sunday Event: Shayana Pallakki Utsava – The kautuka murtis of Sri Sri Nitai-Gauranga are carried in a decorated palanquin around the altar with Harinama Sankirtan, a visually delightful and spiritually uplifting experience.',
      ],
    },
  ];

  const darshanTimes = [
    { time: '4:30 AM – 5:00 AM', event: 'Mangala Arati' },
    { time: '7:15 AM – 11:30 AM', event: 'Sringara Arati' },
    { time: '12:00 PM – 12:30 PM', event: 'Raja Bhoga Arati' },
    { time: '4:30 PM – 5:30 PM', event: 'Vaikalika Bhoga Arati' },
    { time: '6:00 PM – 7:00 PM', event: 'Sandhya Arati (*6:30 PM Saturday / 5:30 PM Sunday)' },
    { time: '8:15 PM – 8:30 PM', event: 'Sayana Arati (except Sunday)' },
  ];

  const servicesAndClasses = [
    { time: '4:30 AM', event: 'Mangala Arati' },
    { time: '5:00 AM', event: 'Tulasi Arati' },
    { time: '5:15 AM', event: 'Japa Meditation' },
    { time: '7:15 AM', event: 'Deity Greeting' },
    { time: '7:20 AM', event: 'Guru Puja' },
    { time: '7:45 AM', event: 'Srimad Bhagavatam Class' },
    { time: 'Weekdays 12:00 PM – 3:00 PM', event: 'Restaurant & Gift Shop' },
    { time: 'Tuesdays 7:00 PM', event: 'Krishna Ashraya Class' },
    { time: 'Sundays 9:00 AM – 11:00 AM', event: 'Gopal Sakha Class (Sunday School for Children)' },
    { time: 'Sunday 4:30 PM', event: 'Bhajans & Kirtans' },
    { time: 'Sunday 6:30 PM', event: 'Sunday Feast Lecture' },
    { time: 'Sunday 7:30 PM', event: 'Sunday Feast Served' },
    { time: 'Sunday 4:00 PM – 8:00 PM', event: 'Govinda’s Gifts Open' },
  ];

  const activities = [
    {
      title: 'Youth Empowerment (FOLK)',
      description: 'Friends of Lord Krishna (FOLK) helps youth learn timeless wisdom from the Bhagavad Gita and Srimad Bhagavatam, enabling them to become more focused, cultivate positive value systems, develop interpersonal skills, increase operational skills, and enhance personal growth. Weekend programs include Vedic science classes and yoga retreat sessions.',
    },
    {
      title: 'Corporate Workshops',
      description: 'Designed for professionals, these workshops promote a stress-free life enriched with spiritual values, helping participants become more efficient at the workplace and enhance productivity in their fields.',
    },
    {
      title: 'Hostel Facility',
      description: 'Available for FOLK participants, the hostel provides a conducive atmosphere near the temple to enhance spiritual advancement.',
    },
    {
      title: 'Krishna Ashraya Class',
      description: 'This class helps members learn Lord Krishna’s instructions from the Bhagavad Gita and Srimad Bhagavatam through Srila Prabhupada’s teachings, focusing on practicing bhakti yoga principles.',
    },
    {
      title: 'Gopal Sakha Class',
      description: 'A Sunday school for children aged 3 to 15, held every Sunday, focusing on inculcating a positive value system through scriptural study of the Bhagavad Gita and Srimad Bhagavatam.',
    },
    {
      title: 'Culture Camp',
      description: 'A 15-day summer program for children, featuring six-hour daily sessions with Bhagavad Gita classes, Vedic story sessions, creative arts, dance, and drama to prepare them for life’s challenges.',
    },
    {
      title: 'Heritage Festival',
      description: 'Held during Janmashtami, this festival provides a platform for school children to participate in competitions based on tradition and culture, fostering spiritual interest and reviving traditional arts.',
    },
    {
      title: 'Nagar Sankirtana',
      description: 'Frequent city-wide events where devotees sing the Hare Krishna Mahamantra with kartal and mridanga, spreading the transcendental sound vibration to cleanse inauspiciousness.',
    },
    {
      title: 'Spiritual Trips',
      description: 'Organized to holy places like Vrindavan, Puri, and Mayapur, these trips offer devotees a chance to visit sacred sites, chant, sing kirtan, and experience spiritual rejuvenation.',
    },
    {
      title: 'Nitya Annadana',
      description: 'Krishna prasadam is distributed, especially on Sundays, after being offered to the Lord. This sanctified food elevates consciousness towards God, making it an integral part of devotional service.',
    },
    {
      title: 'Agricultural Farming',
      description: 'Organic farming of wheat, paddy, and vegetables is conducted without pesticides. The pure yields are used for offerings to the Lord.',
    },
    {
      title: 'Spiritual Books & Paraphernalia',
      description: 'Over 60 volumes of Srila Prabhupada’s authoritative translations and commentaries on Vedic classics are available at the temple book stall, along with Lord’s paraphernalia, deities, tulsi mala, chanting bags, and t-shirts.',
    },
    {
      title: 'Gaushala',
      description: 'A goshala is maintained to protect cows, ensuring offerings are prepared with pure milk and ghee. Devotees can contribute to cow protection, which brings religiosity and piety.',
    },
    {
      title: 'Sunday Love Feast',
      description: 'A weekly festival since 1966, featuring kirtan, spiritual discourse, and a free vegetarian feast. Held every Sunday from 7:00 AM – 9:30 AM and 7:00 PM – 9:30 PM, open to all for a culturally rich experience of bhakti yoga.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 font-serif">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Sri Sri Radha Krishnachandra Mandir
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
            The Hare Krishna Movement in Bhilai rejuvenates Vedic culture through bhakti yoga, as taught by Srila Prabhupada, guiding devotees to reconnect with Lord Krishna.
          </p>
          <blockquote className="text-lg italic max-w-3xl mx-auto">
            “Temple means people should come, people should learn the science of God. Temple means spiritual educational shelter.”
            <span className="block mt-3 font-semibold text-yellow-200">— Srila Prabhupada</span>
          </blockquote>
        </div>
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1200x400?temple')] opacity-20 bg-cover bg-center"></div>
      </section>

      {/* Activities Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Our Activities</h2>
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          The Hare Krishna Movement Bhilai offers a variety of programs to revive Vedic culture, fostering spiritual growth and a deeper connection with Lord Krishna through bhakti yoga.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-indigo-500"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">{activity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Morning Programme Introduction */}
      <section className="container mx-auto px-6 py-12 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Morning Programme</h2>
        <p className="text-gray-700 mb-4 max-w-3xl mx-auto text-center">
          Join us for daily services open to all. The temple welcomes pilgrims and guests from 4:30 AM to 8:30 PM.
        </p>
        <p className="text-gray-700 mb-4 max-w-3xl mx-auto text-center">
          Spiritual activities during brahma-muhurta (one and a half hours before sunrise) are especially potent, as recommended by scriptures. Devotees follow Srila Prabhupada’s mandate to rise at 3:30 AM for devotional service.
        </p>
        <p className="text-gray-700 text-center">Experience the serenity of starting your day with devotion.</p>
      </section>

      {/* Morning Programme Schedule */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Morning Programme Schedule</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {morningProgramme.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-yellow-400"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.event}</h3>
              <p className="text-gray-600 font-medium mb-3">{item.time}</p>
              {item.description.map((desc, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-2">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Evening Programme Introduction */}
      <section className="container mx-auto px-6 py-12 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Evening Programme</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          As the sun sets, the temple transforms into a serene and spiritually vibrant space, offering a perfect opportunity to conclude your day in the divine presence of the Lord.
        </p>
      </section>

      {/* Evening Programme Schedule */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Evening Programme Schedule</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eveningProgramme.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-yellow-400"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.event}</h3>
              <p className="text-gray-600 font-medium mb-3">{item.time}</p>
              {item.description.map((desc, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-2">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Darshan Times */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Darshan Times</h2>
        <p className="text-gray-700 mb-6 text-center">Temple Altar is open to see the Deities</p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {darshanTimes.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 flex items-center space-x-2 hover:text-indigo-600 transition-colors duration-200"
              >
                <span className="font-medium text-indigo-600">{item.time}:</span>
                <span>{item.event}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services and Classes */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Services and Classes</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {servicesAndClasses.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 flex items-center space-x-2 hover:text-indigo-600 transition-colors duration-200"
              >
                <span className="font-medium text-indigo-600">{item.time}:</span>
                <span>{item.event}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Temple Hours */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Temple Hours</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <p className="text-gray-700 mb-2">4:30 AM – 12:30 PM</p>
          <p className="text-gray-700">4:30 PM – 8:30 PM</p>
        </div>
      </section>
    </div>
  );
};

export default TempleScheduleB;
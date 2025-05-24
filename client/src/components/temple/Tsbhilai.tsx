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
    { time: 'Tuesdays 7:00 PM', event: 'Bhakti School' },
    { time: 'Sunday 4:30 PM', event: 'Bhajans & Kirtans' },
    { time: 'Sunday 6:30 PM', event: 'Sunday Feast Lecture' },
    { time: 'Sunday 7:30 PM', event: 'Sunday Feast Served' },
    { time: 'Sunday 4:00 PM – 8:00 PM', event: 'Govinda’s Gifts Open' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Slogan Section */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Sri Sri Radha Krishnachandra Mandir</h1>
          <blockquote className="text-lg italic">
            “Temple means people should come, people should learn the science of God. Temple means spiritual educational shelter. People should come and learn what is spiritual life, what is God, what is my relationship with God.”
            <span className="block mt-2 font-semibold">— Srila Prabhupada</span>
          </blockquote>
        </div>
      </section>

      {/* Morning Programme Introduction */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Morning Programme</h2>
        <p className="text-gray-600 mb-4">
          There are several services throughout the day at Sri Sri Radha Krishnachandra Mandir to which everyone is welcome to attend. Aside from these times, it is open daily from 4:30 AM - 8:30 PM for pilgrims and guests.
        </p>
        <p className="text-gray-600 mb-4">
          The scriptures recommend that spiritual activities performed in the auspicious time of brahma-muhurta (one and a half hours before sunrise) have greater effect. Srila Prabhupada mandated that devotees should wake up early in the morning at 3:30 AM and prepare themselves for rendering devotional service. This mandate is strictly followed by all the devotees who practice the principles of Krishna consciousness.
        </p>
        <p className="text-gray-600">
          Come experience the peace and joy of starting your day with devotion.
        </p>
      </section>

      {/* Morning Programme Schedule */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Morning Programme Schedule</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {morningProgramme.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-indigo-600">{item.event}</h3>
              <p className="text-gray-600 font-medium">{item.time}</p>
              {item.description.map((desc, i) => (
                <p key={i} className="text-gray-600 mt-2">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Evening Programme Introduction */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Evening Programme</h2>
        <p className="text-gray-600">
          As the sun begins to set, the temple atmosphere becomes calm and spiritually vibrant. The evening programme offers a wonderful opportunity to wind down the day in the divine presence of the Lord.
        </p>
      </section>

      {/* Evening Programme Schedule */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Evening Programme Schedule</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eveningProgramme.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-indigo-600">{item.event}</h3>
              <p className="text-gray-600 font-medium">{item.time}</p>
              {item.description.map((desc, i) => (
                <p key={i} className="text-gray-600 mt-2">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Darshan Times */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Darshan Times</h2>
        <p className="text-gray-600 mb-4">Temple Altar is open to see the Deities</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-2">
            {darshanTimes.map((item, index) => (
              <li key={index} className="text-gray-600">
                <span className="font-medium">{item.time}:</span> {item.event}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services and Classes */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services and Classes</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-2">
            {servicesAndClasses.map((item, index) => (
              <li key={index} className="text-gray-600">
                <span className="font-medium">{item.time}:</span> {item.event}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Temple Hours */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Temple Hours</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">4:30 AM – 12:30 PM</p>
          <p className="text-gray-600">4:30 PM – 8:30 PM</p>
        </div>
      </section>

      
    </div>
  );
};

export default TempleScheduleB;
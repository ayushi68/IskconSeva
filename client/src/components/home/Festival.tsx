import React from 'react';
import { Link } from 'wouter';

const services = [
  {
    title: 'Gaura Purnima',
    description: "Celebration of Lord Chaitanya Mahaprabhu's appearance, the golden avatar of love and devotion.",
    icon: '✨',
    bgImage: '/Festival/sri_gaur_purnima_01.jpg',
    link: '/Gaurapurnima',
    approxDate: '2025-03-12',
  },
  {
    title: 'Rama Navami',
    description: 'Commemoration of Lord Rama’s birth, celebrating righteousness and dharma.',
    icon: '🏹',
    bgImage: '/Festival/sri_ram_navami_01.jpg',
    link: '/Ramnavami',
    approxDate: '2025-04-02',
  },
  {
    title: 'Narasimha Chaturdashi',
    description: 'Festival honoring Lord Narasimha’s appearance to protect His devotee Prahlada.',
    icon: '🦁',
    bgImage: '/Festival/sri_narsimha_chaturdashi_01.jpg',
    link: '/NarasimhaChaturdashi',
    approxDate: '2025-05-10',
  },
  {
    title: 'Panihati Chida-dahi Mahotsava',
    description: 'Celebration of Raghunatha dasa Goswami’s mercy through chipped rice and yogurt.',
    icon: '🍚',
    bgImage: '/Festival/panihati_chida-dahi-utsava_01.jpg',
    link: '/Panihati',
    approxDate: '2025-06-06',
  },
  {
    title: 'Jhulan Yatra',
    description: 'The swing festival celebrating the divine love of Radha and Krishna.',
    icon: '🌸',
    bgImage: '/Festival/jhulan_yatra_01.jpg',
    link: '/JhulanYatra',
    approxDate: '2025-08-05',
  },
  {
    title: 'Sri Krishna Janmashtami',
    description: 'Joyous celebration of Lord Krishna’s birth with fasting, kirtan, and festivities.',
    icon: '🦚',
    bgImage: '/Festival/sri_krishna_janmashtami_01.jpg',
    link: '/Janmashtami',
    approxDate: '2025-08-15',
  },
  {
    title: 'SP’s Vyasa Puja',
    description: 'Annual worship ceremony honoring the spiritual master’s appearance day.',
    icon: '📿',
    bgImage: '/Festival/sri_vaysa_puja_01.jpg',
    link: '/Vyasapuja',
    approxDate: '2025-08-16',
  },
  {
    title: 'Radhashtami',
    description: 'Celebration of Srimati Radharani’s appearance, the embodiment of divine love.',
    icon: '👑',
    bgImage: '/Festival/sri_radhashtami_01.jpg',
    link: '/Radhashtami',
    approxDate: '2025-08-29',
  },
  {
    title: 'Deepotsava',
    description: 'Festival of lights celebrating Lord Rama’s return to Ayodhya.',
    icon: '🪔',
    bgImage: '/Festival/deepotsava_01.jpg',
    link: '/Deepotsava',
    approxDate: '2025-10-20',
  },
  {
    title: 'Govardhan Puja',
    description: 'Worship of Govardhan Hill, commemorating Krishna’s lifting of the hill.',
    icon: '🐄',
    bgImage: '/Festival/govardhan_puja_01.jpg',
    link: '/Govardhanpuja',
    approxDate: '2025-10-21',
  },
  {
    title: 'Gita Jayanti',
    description: 'Celebration of the day Lord Krishna spoke the Bhagavad-gita to Arjuna.',
    icon: '📜',
    bgImage: '/Festival/gita_jayanti_01.jpg',
    link: '/GitaJayanti',
    approxDate: '2025-12-01',
  },
  {
    title: 'Vaikuntha Ekadashi',
    description: 'Auspicious Ekadashi when the gates to Vaikuntha are opened.',
    icon: '🛕',
    bgImage: '/Festival/sri_vaikuntha_ekadashi_01.jpg',
    link: '/Vaikuntha',
    approxDate: '2025-12-21',
  },
  {
    title: 'Akhanda Harinaam Sankirtan',
    description: '24-hour continuous chanting of the holy names in worship.',
    icon: '🕉️',
    bgImage: '/Festival/sri_narsimha_chaturdashi_01.jpg',
    link: '/Akhandaharinaam',
    approxDate: '2025-12-31',
  },
  {
    title: 'Nityananda Trayodashi',
    description: 'Appearance day of Lord Nityananda, the most merciful incarnation.',
    icon: '🌞',
    bgImage: '/Festival/sri_nityanand_trayodashi_01.jpg',
    link: '/Nityananda',
    approxDate: '2026-01-30',
  },
];

const Festival: React.FC = () => {
  // Determine current date
  const currentDate = new Date('2025-06-08T22:34:00+05:30');

  // Sort festivals: upcoming festivals first (in chronological order), then past festivals (in reverse chronological order)
  const sortedFestivals = services.sort((a, b) => {
    const dateA = new Date(a.approxDate).getTime();
    const dateB = new Date(b.approxDate).getTime();
    const isAFuture = dateA > currentDate.getTime();
    const isBFuture = dateB > currentDate.getTime();

    if (isAFuture && isBFuture) {
      return dateA - dateB; // Upcoming festivals in ascending order
    } else if (!isAFuture && !isBFuture) {
      return dateB - dateA; // Past festivals in descending order
    } else {
      return isAFuture ? -1 : 1; // Upcoming before past
    }
  });

  // Get the upcoming festival (first in the sorted list)
  const upcomingFestival = sortedFestivals[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-100 to-orange-100 font-inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-pink-500 to-orange-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2 mb-4 animate-slide-in">Celebrate with Devotion</h1>
          <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
            Join us in celebrating sacred Vaishnava festivals that unite us with the divine through devotion, love, and community.
          </p>
          <button
            onClick={() => document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 bg-red-200 text-red-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-300 transition transform hover:scale-105 shadow-md"
          >
            See Upcoming Festival
          </button>
        </div>
      </section>

      {/* Upcoming Festival */}
      {upcomingFestival && (
        <section id="upcoming" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-6 animate-slide-in">Upcoming Festival</h2>
          <Link to={upcomingFestival.link} className="block">
            <div className="relative bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-2 border border-red-200 group h-48">
              <img
                src={upcomingFestival.bgImage}
                alt={upcomingFestival.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="relative z-10 p-8 flex items-center space-x-6 h-full">
                <div className="text-5xl animate-pulse">{upcomingFestival.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-red-600 mb-2">{upcomingFestival.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed line-clamp-2">{upcomingFestival.description}</p>
                  <p className="text-gray-600 text-sm mt-2 italic">Approx. Date: {new Date(upcomingFestival.approxDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Festivals Grid */}
      <section id="festivals" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-6 animate-slide-in">All Festivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedFestivals.map((service, idx) => (
            <Link to={service.link} key={idx} className="block">
              <div className="relative bg-white/90 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform hover:shadow-xl hover:-translate-y-2 border border-red-200 group h-64">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="relative z-10 p-8 text-center flex flex-col items-center justify-center h-full">
                  <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-red-600 mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-red-200/90 backdrop-blur-sm p-8 rounded-2xl max-w-6xl mx-auto px-6 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold text-red-600 mb-4 animate-slide-in">Join Our Celebrations</h2>
          <p className="text-gray-700 text-lg mb-4">
            Contact us to participate in these divine festivals or learn more about our events.
          </p>
          <p className="text-gray-700 text-lg">
            Reach us at:{' '}
            <a href="tel:+919755098620" className="text-red-600 hover:underline">+91-97550 98620</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Festival;
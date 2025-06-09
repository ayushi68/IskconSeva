import React from 'react';

const BookCeremony: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 animate-slide-in">Yajnas & Samskaras</h1>
          <p className="text-2xl mb-8 text-yellow-100">
            Embrace the Sacred Traditions of Vedic Rites and Rituals
          </p>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-200 text-yellow-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-md"
          >
            Discover Our Ceremonies
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* About Section */}
        <section id="about" className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-yellow-600 mb-6 animate-fade-in">About Our Ceremonies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80"
                alt="Vedic Ceremony"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                At our temple, we honor the sacred traditions of Yajnas and Samskaras, rooted in Vedic wisdom. These ceremonies purify the soul, invoke divine blessings, and mark significant life milestones with spiritual potency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Led by our esteemed Brahmins, trained in Vaishnava scriptures, each ritual invokes the presence of deities like Krishna, Vishnu, Narasimha, and Varaha, creating an atmosphere of divine grace and serenity.
              </p>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">The Importance of Yajnas and Samskaras</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yajnas and Samskaras are transformative rituals that connect devotees with the divine. They purify the mind, body, and spirit, fostering spiritual growth and aligning devotees with divine energies for health, prosperity, and peace.
            </p>
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">A Journey of Spiritual Growth</h3>
            <p className="text-gray-700 leading-relaxed">
              Each ceremony is an opportunity to deepen your connection with Krishna and other Vaishnava deities. Through sacred chants, offerings, and fire rituals, devotees experience purification, inner peace, and divine blessings, uniting past and present in devotion.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-yellow-600 mb-6 animate-fade-in">Our Samskara Services</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
            We offer a range of Samskara services to mark life’s milestones, performed by our trained Brahmins. A minimum of 1 week’s notice is required, with charges payable to the temple and donations requested for the priests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-yellow-200">
              <img
                src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=400&q=80"
                alt="Vivaha Ceremony"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Weddings and Engagements</h3>
              <p className="text-gray-700"><strong>Vivaha:</strong> A sacred wedding ceremony uniting two souls with Vedic rituals.</p>
              <p className="text-gray-700"><strong>Engagement:</strong> A formal announcement with ring exchange and aarti.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-yellow-200">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
                alt="Pre-Childbirth Rites"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Conception and Pre-Childbirth</h3>
              <p className="text-gray-700"><strong>Garbhadhana:</strong> Pre-conception ritual for spiritual growth.</p>
              <p className="text-gray-700"><strong>Pumsavana:</strong> Promotes fetal health during pregnancy.</p>
              <p className="text-gray-700"><strong>Simantonnayana:</strong> Baby shower for safe pregnancy.</p>
              <p className="text-gray-700"><strong>Sosyanti-Homa:</strong> Ensures safe childbirth.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-yellow-200">
              <img
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80"
                alt="Newborn Samskaras"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Newborns and Babies</h3>
              <p className="text-gray-700"><strong>Jata Karma:</strong> Post-birth purification.</p>
              <p className="text-gray-700"><strong>Namakarna:</strong> Naming ceremony.</p>
              <p className="text-gray-700"><strong>Niskramanya:</strong> First outing.</p>
              <p className="text-gray-700"><strong>Annaprasana:</strong> First feeding.</p>
              <p className="text-gray-700"><strong>Karna Vedha:</strong> Ear piercing.</p>
              <p className="text-gray-700"><strong>Mundan:</strong> Tonsure ceremony.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-yellow-200">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80"
                alt="Vastu Shanti"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Vastu Shanti and Griha Pravesh</h3>
              <p className="text-gray-700"><strong>Vastu Shanti:</strong> Balances energies in a home.</p>
              <p className="text-gray-700"><strong>Griha Pravesh:</strong> Housewarming for prosperity.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-yellow-200">
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=400&q=80"
                alt="Other Ceremonies"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Other Ceremonies</h3>
              <p className="text-gray-700"><strong>Paustika-Karma:</strong> Child’s health ritual.</p>
              <p className="text-gray-700"><strong>Vidyarambha:</strong> Initiation into learning.</p>
              <p className="text-gray-700"><strong>Shanti-Homa:</strong> Fire sacrifice for peace.</p>
              <p className="text-gray-700"><strong>Antyesti-Kriya:</strong> Funeral rites.</p>
              <p className="text-gray-700"><strong>Sraddha-Kriya:</strong> Memorial services.</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center mt-4 italic">
            Join us to celebrate life’s sacred moments with divine blessings. <br />
            <strong>Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare</strong> <br />
            Chant Hare Krishna And Be Happy!
          </p>
        </section>

        {/* Esteemed Yajna Priest Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-yellow-600 mb-6 animate-fade-in">Our Esteemed Yajna Priest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Our Yajna priests are highly trained in Vedic rituals and Vaishnava philosophy, bringing profound devotion and expertise to every ceremony. With years of experience, they ensure each Yajna and Samskara is conducted with precision, invoking divine energies with sacred chants and offerings.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80"
                alt="Yajna Priest"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-yellow-200/90 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-yellow-600 mb-4 animate-fade-in">Contact Us</h2>
            <p className="text-gray-700 text-lg mb-4">
              To schedule a Yajna or Samskara or for any queries, please reach out to us. We require at least 1 week’s notice for all ceremonies.
            </p>
            <p className="text-gray-700 text-lg">
              Contact us at:{' '}
              <a href="tel:+919755098617" className="text-yellow-600 hover:underline">+91-97550 98617</a>
            </p>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-yellow-600 mb-6 animate-fade-in">Photo Gallery</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
            Explore moments from our sacred ceremonies, filled with devotion and divine grace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80"
                alt="Vivaha Ceremony"
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80"
                alt="Fire Yajna"
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=600&q=80"
                alt="Samskara Ritual"
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white text-center py-6">
        <p>HKM Bhilai - Honoring the Sacred Traditions of Yajnas and Samskaras</p>
      </footer>
    </div>
  );
};

export default BookCeremony;
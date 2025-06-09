import React from 'react';

const Pilgrimage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white h-96 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-slide-in font-serif">
            A Rendezvous with The Supreme Lord
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-orange-100">
            A Journey to the Dust of Holy Lands
          </p>
          <button
            onClick={() => document.getElementById('kshetras')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 bg-orange-200 text-orange-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-300 transition transform hover:scale-105 shadow-md"
          >
            Explore Holy Kshetras
          </button>
        </div>
      </header>

      {/* Kshetras Section */}
      <section id="kshetras" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6 font-serif animate-fade-in">Kshetras We Often Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/vrindavan" className="group">
            <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80"
                alt="Vrindavan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Vrindavan</h3>
            </div>
          </a>
          <a href="/puri" className="group">
            <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593950338333-7a7907f1e47e?auto=format&fit=crop&w=600&q=80"
                alt="Jagannath Puri"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Jagannath Puri</h3>
            </div>
          </a>
          <a href="/mayapur" className="group">
            <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=600&q=80"
                alt="Mayapur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Mayapur</h3>
            </div>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Introduction */}
        <section className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6 animate-slide-in">The Essence of Pilgrimage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pilgrimage to India’s holy lands reveals the timeless wealth of Vedic wisdom. While many seek material success abroad, Westerners embrace India’s spiritual heritage, finding fulfillment in its sacred philosophy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Join us to experience the divine energy of these sacred sites, where devotion to Lord Krishna transforms the heart and soul.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80"
                alt="Pilgrimage Essence"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Blessings of a Pilgrimage */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6 animate-slide-in">Blessings of a Pilgrimage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=400&q=80"
                alt="Tune In"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Tune In</h3>
              <p className="text-gray-700">Break free from routine, practicing devotion and temporary renunciation in the Lord’s abode.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
                alt="Happiness"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Happiness</h3>
              <p className="text-gray-700">Soak in the positive energy of sacred sites, uplifting your spirit with divine vibrations.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1593950338333-7a7907f1e47e?auto=format&fit=crop&w=400&q=80"
                alt="Abundance"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Abundance</h3>
              <p className="text-gray-700">Engage in charity and selfless service, cultivating virtue for spiritual growth.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=400&q=80"
                alt="Nexus"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Nexus</h3>
              <p className="text-gray-700">Connect with sadhus and yogis, gaining wisdom and blessings through their satsang.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=400&q=80"
                alt="Knowledge"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Knowledge</h3>
              <p className="text-gray-700">Neutralize sinful reactions and purify consciousness in the presence of pure devotees.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
                alt="Stimulus Therapy"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Stimulus Therapy</h3>
              <p className="text-gray-700">Attain emancipation and foster transcendental devotion to the Lord.</p>
            </div>
          </div>
        </section>

        {/* Yatra Activities */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6 animate-slide-in">Yatra Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80"
                alt="Lectures"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Lectures</h3>
              <p className="text-gray-700">Learn the glories of the Holy Dham through lectures by senior devotees.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=400&q=80"
                alt="Holy Places"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Holy Places</h3>
              <p className="text-gray-700">Visit sacred sites tied to the Lord’s pastimes, deepening your connection.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=400&q=80"
                alt="Prasadam"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Prasadam</h3>
              <p className="text-gray-700">Savor divine meals that nourish body and soul.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1593950338333-7a7907f1e47e?auto=format&fit=crop&w=400&q=80"
                alt="Kirtan"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Kirtan</h3>
              <p className="text-gray-700">Dance in ecstasy, chanting the Lord’s holy names.</p>
            </div>
          </div>
        </section>

        {/* Vrindavan Page */}
        <section className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6 animate-slide-in font-serif">Immerse Yourself in the Dust of Gopis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80"
                alt="Vrindavan Yatra"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vrindavan, the divine abode of Radha Krishna, is surcharged with the ecstasy of kirtan and the sacred waters of Radha Kund and Shyama Kund. A 5-day Kartik Vrindavan Dham Yatra offers an unforgettable spiritual experience.
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Packages</h3>
                <p className="text-gray-700">Adult: Contact for details (includes travel, accommodation, Prasadam)</p>
                <p className="text-gray-700">Child: Contact for details</p>
                <p className="text-gray-700">Extra charges: Contact for details</p>
              </div>
            </div>
          </div>
        </section>

        {/* Jagannath Puri Page */}
        <section className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6 animate-slide-in font-serif">Lord of The Universe Awaits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jagannath Puri, home of the “Daru Brahman” Lord, hosts the grand Ratha Yatra. Seeing Lord Jagannath on His ratha frees one from the cycle of birth and death. Join our yatra to experience this divine festival.
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Packages</h3>
                <p className="text-gray-700">Adult: Contact for details (includes travel, accommodation, Prasadam)</p>
                <p className="text-gray-700">Child: Contact for details</p>
                <p className="text-gray-700">Extra charges: Contact for details</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1593950338333-7a7907f1e47e?auto=format&fit=crop&w=600&q=80"
                alt="Jagannath Puri Yatra"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Jagannath Puri & Mayapur Yatra */}
        <section className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6 animate-slide-in">Jagannath Puri & Mayapur Yatra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d5ac0e7d39b?auto=format&fit=crop&w=600&q=80"
                alt="Puri & Mayapur Yatra"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jagannath Puri, with its 12th-century temple, and Mayapur, the birthplace of Sri Caitanya Mahaprabhu, are sacred abodes fostering Krishna-prema. Join our yatra to experience their compassion and sweetness.
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold">Register early due to limited seats!</p>
                <p className="text-gray-700">
                  Contact: <a href="tel:+919755098618" className="text-orange-600 hover:underline">+91-97550 98618</a>
                </p>
                <p className="text-gray-700">Payment: Cash, Cheque/DD to HARE KRISHNA MOVEMENT, BHILAI, or online transfer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kartik Vrindavan Dham Yatra */}
        <section className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6 animate-slide-in">Kartik Vrindavan Dham Yatra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vrindavan, non-different from Goloka, is the ultimate pilgrimage. Our Kartik yatra, guided by senior devotees, offers comfortable travel, accommodation, and prasadam, deepening your devotion.
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold">Hurry! Limited seats available!</p>
                <p className="text-gray-700">
                  Contact: <a href="tel:+919755098618" className="text-orange-600 hover:underline">+91-97550 98618</a>
                </p>
                <p className="text-gray-700">Payment: Cash, Cheque/DD to HARE KRISHNA MOVEMENT, BHILAI, or online transfer.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80"
                alt="Kartik Vrindavan Yatra"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white p-8 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-center mb-6 animate-slide-in">Testimonials</h2>
            <p className="text-lg leading-relaxed mb-4">
              “An unforgettable yatra filled with divine fervor. The organizers’ care, especially for my elderly mother, was exceptional.” – Anonymous Yatri
            </p>
            <p className="text-lg leading-relaxed mb-4">
              “The Vrajabhumi Yatra was a lifetime experience. The narrations and satvik food were divine.” – Mukesh, Bangalore
            </p>
            <p className="text-lg leading-relaxed">
              “My first Vrindavan visit brought me closer to God. The devotees’ association and maha-prasadam were truly blessed.” – Anjana, IBM
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-orange-200/90 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-orange-600 mb-4 animate-slide-in">Contact Us</h2>
            <p className="text-gray-700 text-lg mb-4">
              Plan your pilgrimage with us for a transformative experience. Register early as seats are limited!
            </p>
            <p className="text-gray-700 text-lg">
              Contact: <a href="tel:+919755098618" className="text-orange-600 hover:underline">+91-97550 98618</a>
            </p>
            <p className="text-gray-700 text-lg">Payment: Cash, Cheque/DD to HARE KRISHNA MOVEMENT, BHILAI, or online transfer.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 text-white text-center py-6">
        <p>Hare Krishna Movement Bhilai - Join Us in the Journey to Divine Abodes</p>
      </footer>
    </div>
  );
};

export default Pilgrimage;
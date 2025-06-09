import React from 'react';

const Gifts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509048197708-4c6c6a5c96e0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 animate-slide-in">Gifts & Paraphernalia</h1>
          <p className="text-2xl mb-8 text-amber-100">
            Discover the essence of Krishna Consciousness at HKM Bhilai’s Matchless Gifts Shop
          </p>
          <button
            onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-200 text-amber-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-300 transition transform hover:scale-105 shadow-md"
          >
            Explore Our Offerings
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Introduction */}
        <section className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-amber-600 mb-6 animate-fade-in">Matchless Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                “Matchless Gifts”, the iconic storefront by Srila Prabhupada, transformed lives by sharing the wisdom of Sanatana Dharma. Named after the shop where <span className="italic">Bhagavad Gīta As It Is</span> was first sold, it drew seekers worldwide to embrace India’s spiritual heritage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At HKM Bhilai’s gift shop, find everything for a Krishna Conscious life—books, deities, clothing, and more, all curated to inspire devotion and spiritual growth.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca7342f27f?auto=format&fit=crop&w=600&q=80"
                alt="Matchless Gifts Shop"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section id="offerings" className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-amber-600 mb-6 animate-fade-in">Our Offerings</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
            From sacred texts to devotional items, our shop provides everything needed to honor Lord Krishna, as inspired by Srila Prabhupada’s vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-amber-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=400&q=80"
                alt="Books & Scriptures"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Books & Scriptures</h3>
              <p className="text-gray-700">Priceless Vedic texts like <span className="italic">Bhagavad Gīta As It Is</span> and children’s spiritual books.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-amber-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509048197708-4c6c6a5c96e0?auto=format&fit=crop&w=400&q=80"
                alt="Deity Worship"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Deity Worship</h3>
              <p className="text-gray-700">Exquisite deity statues, japa beads, bead bags, kanthi malas, and incense.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-amber-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518602164573-6d7b3f8e0b5a?auto=format&fit=crop&w=400&q=80"
                alt="Devotional Items"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Devotional Items</h3>
              <p className="text-gray-700">Posters, calendars, diaries, CDs, toys, and traditional clothing.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-amber-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d0162c44ef?auto=format&fit=crop&w=400&q=80"
                alt="Traditional Products"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Traditional Products</h3>
              <p className="text-gray-700">Go Ark, soap powder, pure cow ghee, and other Vedic essentials.</p>
            </div>
          </div>
        </section>

        {/* Gifting Section */}
        <section className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-amber-600 mb-6 animate-fade-in">Perfect Gifts for Loved Ones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                alt="Gifting Krishna Consciousness"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Gift your loved ones items that inspire devotion to Lord Krishna. From sacred books and deity statues to japa beads, children’s books, and traditional clothing, each item is designed to keep Krishna in their hearts.
              </p>
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="text-center bg-amber-200/90 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-amber-600 mb-4 animate-fade-in">Visit Our Temple & Gift Shop</h2>
            <p className="text-gray-700 text-lg mb-4">
              Step into our temple and gift shop to explore transcendental paraphernalia—a one-stop destination for your devotional needs!
            </p>
            <p className="text-gray-700 text-lg font-semibold mb-2">Timings: 9 AM - 1 PM & 4 PM - 9 PM</p>
            <p className="text-gray-700 text-lg">
              For queries, contact us at:{' '}
              <a href="tel:+919755098617" className="text-amber-600 hover:underline">+91-97550 98617</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-600 text-white text-center py-6">
        <p>HKM Bhilai Gift Shop - Your Destination for Krishna Conscious Living</p>
      </footer>
    </div>
  );
};

export default Gifts;
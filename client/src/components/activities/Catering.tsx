import React from 'react';

const Catering: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 animate-slide-in">Catering Services</h1>
          <p className="text-2xl mb-8 text-purple-100">
            Savor the Divine Prasadam at HKM Bhilai Raipur
          </p>
          <button
            onClick={() => document.getElementById('vedic-thoughts')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-200 text-purple-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-300 transition transform hover:scale-105 shadow-md"
          >
            Explore Our Catering
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Vedic Thoughts Section */}
        <section id="vedic-thoughts" className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-6 animate-fade-in">Vedic Thoughts on Good Food</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-purple-200">
              <img
                src="https://images.unsplash.com/photo-1504672281656-e3ce286bfb45?auto=format&fit=crop&w=400&q=80"
                alt="Purity of Ingredients"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Purity of Ingredients</h3>
              <p className="text-gray-700">Food prepared with love, devotion, and purity, offered to the Divine, nourishes both body and soul, becoming a medium for spiritual enlightenment.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-purple-200">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a680?auto=format&fit=crop&w=400&q=80"
                alt="Sattvic Quality"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Sattvic Quality</h3>
              <p className="text-gray-700">Sattvic food, prepared with a calm, devotional mind, brings clarity, wisdom, and happiness, aiding the spiritual journey.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-purple-200">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"
                alt="Offering to the Divine"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Offering to the Divine</h3>
              <p className="text-gray-700">Food offered to the Lord, as per the Bhagavad Gita, purifies the eater, uplifting the spirit and aligning with divine grace.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-purple-200">
              <img
                src="https://images.unsplash.com/photo-1505253716362-afaea1d3e1e2?auto=format&fit=crop&w=400&q=80"
                alt="Impact on Consciousness"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Impact on Consciousness</h3>
              <p className="text-gray-700">Food prepared with positive intentions elevates consciousness, fostering inner peace and contentment.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-purple-200 md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1509048197708-4c6c6a5c96e0?auto=format&fit=crop&w=600&q=80"
                alt="Connection with the Divine"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Connection with the Divine</h3>
              <p className="text-gray-700">Sharing prasadam fosters community and devotion, connecting devotees with divine energy and blessings.</p>
            </div>
          </div>
        </section>

        {/* Catering Services Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-6 animate-fade-in">Our Catering Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1512058564366-4c7e9d09b6d6?auto=format&fit=crop&w=600&q=80"
                alt="Prasadam Preparation"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                At HKM Bhilai Raipur, our prasadam embodies the philosophy that food nourishes both body and soul. Our vegetarian dishes, free from onion and garlic, are bursting with flavor, from savory snacks to wholesome meals.
              </p>
              <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700 mb-4">
                “The devotees of the Lord are released from all kinds of sins because they eat food offered first for sacrifice.” — <span className="font-semibold">Bhagavad Gita 3.13</span>
              </blockquote>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our sattvic prasadam satisfies hunger while uplifting your spirit, keeping you in a state of purity and devotion.
              </p>
            </div>
          </div>
          <div className="text-center">
            <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700 mb-4 mx-auto max-w-3xl">
              “Everything should be so clean that not even a single fly should be seen. After the first batch of prasadam is made, it will be offered to Lord Caitanya with arati...” — <span className="font-semibold">Srila Prabhupada</span>
            </blockquote>
          </div>
        </section>

        {/* Events Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-6 animate-fade-in">Catering for All Occasions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                From birthdays to grand weddings, our catering services bring divine prasadam to every occasion. Enjoy cakes, cookies, breads, and savory snacks that delight the palate and soul.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Marriage Ceremonies</li>
                <li>Gruha Pravesha (Housewarming)</li>
                <li>Upanayanam (Sacred Thread Ceremony)</li>
                <li>Seemantha (Kubsa) (Pregnancy Ritual)</li>
                <li>Birthdays</li>
                <li>Wedding Anniversaries</li>
                <li>Corporate Events</li>
                <li>Business Lunches/Dinners</li>
                <li>Any Other Social and Religious Functions</li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519996529931-28324d48471b?auto=format&fit=crop&w=600&q=80"
                alt="Catering for Events"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700 text-lg text-center">For larger events, please place your order a week in advance.</p>
        </section>

        {/* Visit Us */}
        <section className="text-center bg-purple-200/90 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-purple-600 mb-4 animate-fade-in">Visit or Order</h2>
            <p className="text-gray-700 text-lg mb-4">
              Let us serve you divine prasadam for any occasion, from grand parties to simple gatherings, uplifting both body and soul.
            </p>
            <p className="text-gray-700 text-lg font-semibold mb-2">Visiting Timings: 9 AM - 9 PM</p>
            <p className="text-gray-700 text-lg">
              For queries or to place an order, contact us at:{' '}
              <a href="tel:+918770552285" className="text-purple-600 hover:underline">+91-87705 52285</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white text-center py-6">
        <p>HKM Bhilai Raipur - Divine Prasadam for Every Occasion</p>
      </footer>
    </div>
  );
};

export default Catering;
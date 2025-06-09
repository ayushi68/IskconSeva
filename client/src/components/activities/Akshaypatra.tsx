import React from 'react';

const Akshaypatra: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-100 to-pink-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517483000871-1dbf64a6e08c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 animate-slide-in">The Akshaya Patra Foundation</h1>
          <p className="text-2xl mb-8 text-red-100">
            Nourishing Underprivileged Children with Wholesome Meals
          </p>
          <button
            onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-200 text-red-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-300 transition transform hover:scale-105 shadow-md"
          >
            Learn About Our Mission
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Introduction */}
        <section id="introduction" className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-6 animate-fade-in">The Inexhaustible Vessel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Named after the sacred “Akshaya Patra” vessel that fed countless sages during the Pandavas’ exile, The Akshaya Patra Foundation continues this legacy by nourishing underprivileged school children.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Inspired by Srila Prabhupada’s vision that “No one within a 10-mile radius of an ISKCON temple should go hungry,” the Foundation began in Bangalore in 2000, serving 1,500 children. Today, it’s the world’s largest NGO-run Mid-Day Meal Program.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80"
                alt="Akshaya Patra Mission"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-6 animate-fade-in">Impact and Achievements</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
            Serving over 1.6 million children across 13,636 schools in twelve states, Akshaya Patra promotes education and fights hunger with nutritious meals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-red-200">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80"
                alt="Awards and Recognition"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600 mb-2">Awards and Recognition</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Padma Shri Award to Chairman H G Madhu Pandit Dasa (2016)</li>
                <li>Praised by President Barack Obama as “an imaginative approach”</li>
                <li>2009 Tech Award in Education Category</li>
                <li>Top five finalist in 2008 American Express Members Project</li>
                <li>Featured at Clinton Global Initiative (2007, 2008)</li>
                <li>ICAI Gold Shield Award for best financial reporting</li>
                <li>2008 CNBC-TV India Business Leader Award</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-red-200">
              <img
                src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=400&q=80"
                alt="Mega Kitchens"
                className="w-full h-32 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600 mb-2">Mega Kitchens</h3>
              <p className="text-gray-700">
                Equipped with cutting-edge technology, our mega kitchens produce 60,000 chapatis per hour and meals for 1,200 children in 15 minutes, ensuring hot, fresh food delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Bhilai Operations */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-6 animate-fade-in">Akshaya Patra in Bhilai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80"
                alt="Bhilai Operations"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Since its inception in Bhilai [date to be filled], The Akshaya Patra Foundation has served numerous schools daily. Starting at 2:30 AM, our dedicated team prepares meals with devotion, ensuring children receive nutritious food to support their education.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-red-200/90 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517483000871-1dbf64a6e08c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-red-600 mb-4 animate-fade-in">Support Our Mission</h2>
            <p className="text-gray-700 text-lg mb-4">
              Help us ensure no child goes hungry. Your support fuels our mission to nourish minds and promote education through wholesome meals.
            </p>
            <p className="text-gray-700 text-lg">
              For queries or to donate, contact us at:{' '}
              <a href="tel:+919755098615" className="text-red-600 hover:underline">+91-97550 98615</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center py-6">
        <p>The Akshaya Patra Foundation - Nourishing Minds, Feeding Futures</p>
      </footer>
    </div>
  );
};

export default Akshaypatra;
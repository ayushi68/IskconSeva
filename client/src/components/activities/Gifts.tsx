import React from 'react';

const Gifts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-amber-600 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gifts & Paraphernalia</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover the essence of Krishna Consciousness at our HKM Bhilai Gift Shop
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-amber-700 mb-6">Matchless Gifts</h2>
          <p className="text-lg leading-relaxed mb-4">
            “Matchless Gifts”, an iconic storefront, turned hippies to happies and remarkably impressed 
            the minds of people worldwide, showcasing that the Sanatana Dharma followed in BHARAT, 
            its rich culture, and practices are meant for every human, irrespective of region, religion, 
            caste, or gender. Srila Prabhupada gave this name to the book shop where the greatest epic, 
            <span className="italic"> Bhagavad Gīta As It Is</span>, was put on sale. Young American 
            seekers thronged this store to buy ancient Indian texts and hear lectures by HDG Srila Prabhupada.
          </p>
          <p className="text-lg leading-relaxed">
            At our HKM Bhilai gift shop, you will find everything aptly fitting the term “Matchless Gifts”. 
            It is an exquisitely arranged store where all needs for a Krishna Conscious life, from dhotis 
            to deities, are available.
          </p>
        </section>

        {/* Offerings */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-amber-700 mb-6">Our Offerings</h2>
          <p className="text-lg leading-relaxed mb-4">
            Srila Prabhupada often mentioned that deities should be dressed and decorated with ornaments 
            as gorgeously as possible. We at our shop provide the best in all, whether it’s the books 
            written by Srila Prabhupada or the paraphernalia for deity worship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Books & Scriptures</h3>
              <p>Priceless ancient Indian Vedic books, including <span className="italic">Bhagavad Gīta As It Is</span>, and books for children.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Deity Worship</h3>
              <p>Exquisite statues of Their Lordships, japa beads, bead bags, kanthi malas, and incense.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Devotional Items</h3>
              <p>Posters of Lord Krishna’s pastimes, calendars, diaries, CDs, toys, and traditional clothing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Traditional Products</h3>
              <p>Go Ark, soap powder, pure cow ghee, and other items rooted in ancient Indian practices.</p>
            </div>
          </div>
        </section>

        {/* Gifting Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-amber-700 mb-6">Perfect Gifts for Loved Ones</h2>
          <p className="text-lg leading-relaxed">
            When it comes to gifting your loved ones, our shop is the perfect choice. From beautiful statues 
            of Their Lordships to priceless Vedic books, varieties of beads, children’s books, CDs, toys, 
            and clothes—each item is designed to make the receiver remember Krishna every moment. What can 
            be a better gift than this?
          </p>
        </section>

        {/* Visit Us */}
        <section className="text-center bg-amber-200 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">Visit Our Temple & Gift Shop</h2>
          <p className="text-lg mb-4">
            Walk into our temple and gift shop to experience the transcendental paraphernalia. 
            A one-stop destination for all your devotional needs!
          </p>
          <p className="text-lg font-semibold mb-2">Timings: 9 AM - 1 PM & 4 PM - 9 PM</p>
          <p className="text-lg">
            For any queries, contact us at: 
            <a href="tel:+919755098617" className="text-amber-600 hover:underline"> +91-97550 98617</a>
          </p>
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
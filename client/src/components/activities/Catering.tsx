import React from 'react';

const Catering: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Catering Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Experience Divine Prasadam at HKM Bhilai Raipur
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Vedic Thoughts Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Thoughts on Good Food as Described by Vedic Scriptures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Purity of Ingredients</h3>
              <p>Food prepared with love, devotion, and purity, and offered to the Divine, becomes sanctified and nourishes both body and soul. It transcends mere sustenance and becomes a medium of spiritual enlightenment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Sattvic Quality</h3>
              <p>As per the Vedic scriptures, food prepared with a calm, peaceful mind and with devotion is known as 'Sattvic' food. Such food brings clarity, wisdom, and happiness, and helps in the spiritual journey of an individual.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Offering to the Divine</h3>
              <p>The Bhagavad Gita emphasizes that food offered first to the Lord purifies the eater and sanctifies the act of eating. Such prasadam not only satisfies hunger but uplifts the spirit and aligns one's consciousness with divine grace.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Impact on Consciousness</h3>
              <p>Food is a reflection of the mind that prepares it. Therefore, food prepared with positive intentions and devotional feelings can elevate one's consciousness and foster a sense of inner peace and contentment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Connection with the Divine</h3>
              <p>In the Vedic tradition, sharing food offered to the Divine fosters a sense of community and devotion. It is believed that prasadam, blessed by the Lord, connects the devotee with divine energy and imparts divine blessings.</p>
            </div>
          </div>
        </section>

        {/* Catering Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Our Catering Services</h2>
          <p className="text-lg leading-relaxed mb-4">
            “You are what you eat,” as famously stated by French lawyer Anthelme Brillat-Savarin, resonates strongly with the philosophy that food is not just fuel for the body but nourishment for the soul. At HKM Bhilai Raipur, we bring this deep truth to life through our divine prasadam.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Who says vegetarian food, especially without onion and garlic, lacks flavor? At our HKM Bhilai food stall, we defy this idea with an array of delectable, lovingly prepared dishes that are both hot and fresh. Our options range from savory snacks to full meals, catering to every palate while enriching your soul.
          </p>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-lg mb-4">
            “The devotees of the Lord are released from all kinds of sins because they eat food which is offered first for sacrifice. Others, who prepare food for personal sense pleasure, verily eat only sin.” — <span className="font-semibold">Bhagavad Gita 3.13</span>
          </blockquote>
          <p className="text-lg leading-relaxed mb-4">
            This shows the sanctity of prasadam that we serve. Our food not only satisfies your hunger but also keeps you in a sattvic mode, nourishing your soul and satisfying your taste desires.
          </p>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-lg mb-4">
            “Everything should be so clean that not even a single fly should be seen. After the first batch of prasadam is made, it will be offered to Lord Caitanya with arati, then the prasadam for the rest of the day will be considered offered. Tapes can play of our kirtanas...” — <span className="font-semibold">Srila Prabhupada</span>
          </blockquote>
        </section>

        {/* Events Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Catering for All Occasions</h2>
          <p className="text-lg leading-relaxed mb-4">
            Whether it’s a birthday party, a grand wedding, a social gathering, a business meeting, or even if you're simply looking for a respite from cooking, let us take care of your catering needs. From cakes and cookies to blending dinners and savory snacks, we’ve got you covered.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
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
          <p className="text-lg leading-relaxed mt-4">
            Our cakes, cookies, breads, and sweets have won hearts for their simplicity in taste. For larger events, please place your order a week in advance.
          </p>
        </section>

        {/* Visit Us */}
        <section className="text-center bg-green-200 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Visit or Order</h2>
          <p className="text-lg mb-4">
            May it be a grand party or a simple gathering, let us serve you with prasadam that is as spiritually uplifting as it is delicious. Visit our Temple’s stall or place your order a week in advance for larger events.
          </p>
          <p className="text-lg font-semibold mb-2">Visiting Timings: 9 AM - 9 PM</p>
          <p className="text-lg">
            For queries or to place an order, contact us at: 
            <a href="tel:+918770552285" className="text-green-600 hover:underline"> +91-87705 52285</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-6">
        <p>HKM Bhilai Raipur - Divine Prasadam for Every Occasion</p>
      </footer>
    </div>
  );
};

export default Catering;
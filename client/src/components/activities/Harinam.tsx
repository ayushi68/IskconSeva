import React from 'react';

const Harinam: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-100 to-blue-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Activity/harinaam_mandap_02.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 animate-slide-in">Harinaam Mantapa</h1>
          <p className="text-2xl mb-8 text-teal-100">
            Experience the transcendental power of chanting Lord Krishna’s holy names.
          </p>
          <button
            onClick={() => document.getElementById('harinaam-mantapa')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-200 text-teal-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-300 transition transform hover:scale-105 shadow-md"
          >
            Discover Harinaam Mantapa
          </button>
        </div>
      </header>

      {/* Harinaam Mantapa Section */}
      <main className="max-w-6xl mx-auto p-8 space-y-12">
        <section id="harinaam-mantapa" className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-teal-600 mb-12 animate-fade-in">
            Harinaam Mantapa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/Activity/harinaam_mandap_01.jpg"
                alt="Harinaam Mantapa"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <blockquote className="border-l-4 border-teal-600 pl-4 italic text-gray-700 mb-4">
                “One who chants the holy name of the Lord is immediately freed from the reactions of unlimited sins, even if he chants indirectly, jokingly, for musical entertainment, or even neglectfully.”<br />
                <span className="text-sm">(Śrimad Bhāgavatam 6.2.14)</span>
              </blockquote>
              <p className="text-gray-700 mb-4">
                The holy name of Lord Krishna, non-different from the Lord Himself, carries immense spiritual potency. As Srila Prabhupada explains, chanting the Lord’s holy names achieves what Vedic rituals cannot.
              </p>
              <p className="text-gray-700 mb-4">
                At HKM Bhilai, the Harinaam Mantapa, located opposite the Main Temple Hall, offers a unique opportunity to chant the Hare Krishna maha-mantra. With 108 steps, each accompanied by the mantra chanted in sync with Srila Prabhupada’s recorded voice, devotees can immerse themselves in a spiritual atmosphere.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Transcendental Benefits</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Freedom from reactions to sin</li>
              <li>Freedom from illusory desires</li>
              <li>Enlightenment</li>
              <li>Liberation</li>
              <li>God consciousness</li>
              <li>Ecstatic love for God</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Visit the Harinaam Mantapa to experience these benefits through attentive chanting. Let the holy name purify your mind and soul.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              Hari Bol!
            </p>
            <p className="text-gray-700">
              For queries or to learn more,{' '}
              <button onClick={scrollToForm} className="text-teal-600 underline hover:text-teal-800">
                contact us
              </button>{' '}
              at: +91-97550 98615.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Harinam;
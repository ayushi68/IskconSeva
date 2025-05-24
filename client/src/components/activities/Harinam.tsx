import React from 'react';

const Harinam: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Harinaam Mantapa</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Harinaam Mantapa */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Harinaam Mantapa</h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-2">
            One who chants the holy name of the Lord is immediately freed from the reactions of unlimited sins, even if he chants indirectly [to indicate something else], jokingly, for musical entertainment, or even neglectfully. This is accepted by all the learned scholars of the scriptures.<br />
            (Śrimad Bhāgavatam 6.2.14)
          </blockquote>
          <p className="text-gray-700 mb-2">
            The holy name of Lord Krishna, being non-different from the Lord, is equally potent as the Lord Himself. As indicated in the above verse, however we chant the Holy Name, the benefits are attained.
          </p>
          <p className="text-gray-700 mb-2">
            In this regard, Srila Prabhupada says: what cannot be achieved through the performance of Vedic Rituals can be easily achieved through the chanting of Lord’s Holy Names.
          </p>
          <p className="text-gray-700 mb-2">
            To give an equal opportunity of chanting to every individual, we at HKM Bhilai have made this Harinām Mantap, which is located diagonally opposite to the Main Temple Hall in the spacious courtyard within the temple premises. The Harinam Mantap has 108 steps, and on every step, you have to chant the Hare Krishna maha-mantra. The mantra is chanted audibly (the power of the mantra lies in attentively hearing it) in sync with the recorded mantra chant of Srila Prabhupada, the Founder-Acharya of the Worldwide Hare Krishna Movement and a pure devotee of Lord Krishna. By doing so, the mind gets tuned to the spiritual atmosphere in the temple, and transcendental benefits of chanting the Holy Name are attained.
          </p>
          <p className="text-gray-700 mb-2">
            The transcendental benefits of the Holy Name are as follows:<br />
            - Freedom from reactions to sin<br />
            - Freedom from desire due to illusion<br />
            - Enlightenment<br />
            - Liberation<br />
            - God consciousness<br />
            - Ecstatic love for God
          </p>
          <p className="text-gray-700 mb-2">
            These benefits can be easily attained by just visiting the Harinaam Mantap. Please do visit the Harinām Mantap when you visit our Temple. May the transcendental benefits be bestowed upon you!
          </p>
          <p className="text-gray-700 mb-2 font-semibold">
            Hari Bol!
          </p>
          <p className="text-gray-700 mb-2">
            For any queries, please feel free to{' '}
            <button onClick={scrollToForm} className="text-blue-600 underline hover:text-blue-800">
              contact us
            </button>{' '}
            at: +91-97550 98615.
          </p>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
          <h3 className="text-lg font-medium text-gray-800 mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Your Name*</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Your Phone*</label>
              <input type="tel" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Phone" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Your Email*</label>
              <input type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Query Related To*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>Harinaam Mantapa Inquiry</option>
                <option>Visiting Information</option>
                <option>Other Queries</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message...</label>
              <textarea className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows={4} placeholder="Message..."></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              SEND MESSAGE
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025 Harinaam Mantapa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Harinam;
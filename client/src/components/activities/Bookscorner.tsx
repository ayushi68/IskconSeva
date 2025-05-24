import React from 'react';

const BooksCorner: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Books Corner</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Book Distribution */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Book Distribution</h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-2">
            “I was born in the darkness of ignorance, and my spiritual master opened my eyes with the torchlight of knowledge.”<br />
            (Translation of Prayers to the Spiritual Master, Gautamīya Tantra)
          </blockquote>
          <p className="text-gray-700 mb-2">
            Aren’t you dumbstruck to hear that we are born in the darkest of ignorance? Is it true? None of us would have believed it or known it. But, All Glories to Srila Prabhupada, who through his Brihat Mridanga (or the greater mrdanga - book distribution) enlightened us and opened our doors to Spiritual wisdom which were closed since many births.
          </p>
          <p className="text-gray-700 mb-2">
            He often said, “There is no literature throughout the Universe like Śrimad Bhāgavatam. There is no comparison. Every word is for the good of human society. Somehow or other, if a book goes in one’s hands, he will be benefited. Therefore we are stressing so much, please distribute books.”
          </p>
          <p className="text-gray-700 mb-2">
            He took the order of his Spiritual Master, Srila Bhaktisiddhanta Saraswati Thakur, to print books whenever he got money, as his life and soul. In accordance with that instruction, Srila Prabhupada wanted books to be distributed in every town and village. Coming in the lineage of Sri Chaitanya Mahaprabhu (Lord Krishna’s incarnation in Kaliyuga and the inaugurator of Yugadharma: Harinām Sankīrtana), Srila Prabhupada gave us this authorized, transcendental priceless gift of his books which contain knowledge and wisdom beyond the scope of any philosophy/religion of this World.
          </p>
          <p className="text-gray-700 mb-2">
            And ultimately Sri Krishna tells Arjuna in the Bhagavad-Gita, Chapter 18, Verses 68 & 69:<br />
            “For one who explains this supreme secret to the devotees, pure devotional service is guaranteed, and at the end he will come back to Me. There is no servant in this world more dear to Me than he, nor will there ever be one more dear.”
          </p>
          <p className="text-gray-700 mb-2">
            Prabhupada was most satisfied to hear news of his books being distributed widely. He says: “Book distribution is solid. Even if they do not read, simply by touching they are benefited. It is so much powerful.” (Correspondence, Honolulu, 2/2/75)
          </p>
          <p className="text-gray-700 mb-2">
            This rare gift of human form of life is ours now. Let's open our gates to transcendental wisdom and help others too, to taste this happiness…
          </p>
          <p className="text-gray-700 mb-2">
            For any queries, please feel free to{' '}
            <button onClick={scrollToForm} className="text-blue-600 underline hover:text-blue-800">
              contact us
            </button>{' '}
            at: +91-97550 98617.
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
                <option>Book Distribution Inquiry</option>
                <option>Request for Books</option>
                <option>Volunteer for Book Distribution</option>
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
        <p>© 2025 Books Corner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BooksCorner;
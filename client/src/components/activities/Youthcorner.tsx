import React from 'react';

const Youthcorner: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Youth Corner</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Vedic Science Course */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Vedic Science Course</h2>
          <p className="text-gray-700 mb-2">
            The Vedic Science Course is designed to make you go through fundamental questions of life. Have you ever thought of am I this body or beyond it? Who has decided my parents? Who is God, and How can we see him? Why do bad things happen to good people? What are meditation and yoga?
          </p>
          <p className="text-gray-700 mb-2">
            The Vedic Science Series, based on the Vedic scriptures, provides answers to the questions and queries raised above. From the fundamentals of spirituality to answering more profound philosophical questions about existence, creation, God, and happiness, this course is designed to take you step by step through the steps of spiritual development.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Timings:</strong><br />
            Saturday: 5:00 pm to 7:00 pm<br />
            Sunday: 10:30 am to 12:30 pm
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Venue:</strong> Sri Sri Radhakrishna Mandir, Akshaya Patra Campus, Sector-6, Bhilai
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on enrollment, please contact - 97550 98615<br />
            <strong>Mail ID:</strong> hkmbhilai@gmail.com
          </p>
          <button onClick={scrollToForm} className="mt-4 text-blue-600 underline hover:text-blue-800">
            Click Here to Register
          </button>
        </section>

        {/* Yoga for Happiness */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Yoga for Happiness</h2>
          <p className="text-gray-700 mb-2">
            Are you concerned about,<br />
            What can I do to improve the overall quality of my life?<br />
            What can you do to improve your focus and concentration?<br />
            How can one maintain a positive attitude even in the face of adversity?<br />
            Where can I find happiness that will last forever?
          </p>
          <p className="text-gray-700 mb-2">
            "We are trying to give Human society the opportunity for a life of happiness, Good Health, Peace of mind and all Good Qualities through God Consciousness." - Srila Prabhupada
          </p>
          <p className="text-gray-700 mb-2">
            The Yoga For Happiness course is designed in a way so as to make students achieve these positive attributes through the analysis of Vedic scriptures.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Timings:</strong><br />
            Saturday: 5:00 pm to 7:00 pm<br />
            Sunday: 10:30 am to 12:30 pm
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Venue:</strong> Sri Sri Radhakrishna Mandir, Akshaya Patra Campus, Sector-6, Bhilai
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on enrollment, please contact - 97550 98615<br />
            <strong>Mail ID:</strong> hkmbhilai@gmail.com
          </p>
          <button onClick={scrollToForm} className="mt-4 text-blue-600 underline hover:text-blue-800">
            Click Here to Register
          </button>
        </section>

        {/* Friend of Lord Krishna (FOLK) */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Friend of Lord Krishna (FOLK)</h2>
          <p className="text-gray-700 mb-2">
            Based on the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, Hare Krishna Movement (HKM) Bhilai has been presenting the treasure house of spiritual knowledge to youth through 'Friends Of Lord Krishna' (FOLK). Folk envisions a society of dynamic young men and women, ready to live a life of values, culture and devotion to God. Our mission is to empower everyone with knowledge of the Bhagavad Gita that helps to differentiate between truth and illusion; revive faith that is based on scientific principles, logic and self-realization.
          </p>
          <p className="text-gray-700 mb-2">
            The FOLK program provides spiritual and value sessions on weekends. On every Sunday hundreds of students gather for spiritual classes which also consist of music, dance and not to forget Prasadam—delicious food offered to Lord Krishna.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on enrollment, please contact - 97550 98615<br />
            <strong>Mail ID:</strong> hkmbhilai@gmail.com
          </p>
          <button onClick={scrollToForm} className="mt-4 text-blue-600 underline hover:text-blue-800">
            Click Here to Register
          </button>
        </section>

        {/* FOLK Residency */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">FOLK Residency</h2>
          <p className="text-gray-700 mb-2">
            FOLK Residency aspires to reintroduce today's fast-tracked youth to that timeless concept of peaceful living. In FOLK Residency, we adhere to practices of stress management and anxiety relief. We serve hygienic, nutritious, and 100% vegetarian food, thrice a day. There are regular morning programs, meditation sessions, group discussions, and feasts to keep you entertained as well as help you maintain your emotional and physical balance.
          </p>
          <p className="text-gray-700 mb-2">
            We greet members from diverse backgrounds and classes. Sharing a house with them gives you a chance to communicate with different personalities, build relationships, learn life skills, share resources, and grow as a compassionate, confident human being.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Facilities:</h3>
          <p className="text-gray-700 mb-2">
            The houses are clean, with spacious rooms and gardens. We have a professional staff dedicated to keeping the conveniences well-maintained. We are highly mindful of your safety and health and have fool-proof protocols in place to ensure the same.
          </p>
          <p className="text-gray-700 mb-2">
            You can choose residencies closest to your college or workplace by filling a form for the same. The accommodation options we offer include the following:<br />
            - Spacious apartment/house<br />
            - 3 BHK or more<br />
            - Attached bathing and toilet facilities with every room<br />
            - Space around the house for multi-utilities<br />
            - Geyser facility<br />
            - Inbuilt wardrobes in every bedroom<br />
            - Water purifiers<br />
            - 24-hour water supply
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Note:</strong> We strictly do not allow smoking, drinking, drugs, or meat on our premises. You will have an active role in keeping the house neat, maintaining accord with your housemates, and judiciously using the resources like electricity and water.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on FOLK Residency, please contact - 97550 98615
          </p>
        </section>

        {/* FOLK Yatra */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">FOLK Yatra</h2>
          <p className="text-gray-700 mb-2">
            Places of pilgrimage yield a special advantage for a devotee in quickly advancing his spiritual life. Lord Krishna lives everywhere, but still it is very easy to approach Him in holy places of pilgrimage because these places are inhabited by great sages. Visiting a holy place of pilgrimage means neutralizing the reactions of sinful life. The holy places all over the earth are meant for purifying the polluted consciousness of the human being by an atmosphere surcharged with the presence of the Lord's pure devotees.
          </p>
          <p className="text-gray-700 mb-2">
            Hare Krishna Movement Bhilai conducts pilgrimage trips for the FOLK participants regularly to the places as Rajim, Champaran, Jagannath Puri, Mayapur, Vrindavan, Ahobilam, Tirupati, Shri Rangam and other pilgrimage places. It provides a wonderful opportunity to visit various holy places in different parts of the country.
          </p>
          <p className="text-gray-700 mb-2">
            The pilgrimages are conducted by senior devotees of temple who ensure that pilgrims get a memorable and devotionally inspiring experience through these tours. In addition to good accommodation, transportation and prasadam, you also get to learn about the significance of holy places and the pastimes of the Lord and His devotees associated to those places.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on enrollment, please contact - 97550 98615<br />
            <strong>Mail ID:</strong> hkmbhilai@gmail.com
          </p>
          <button onClick={scrollToForm} className="mt-4 text-blue-600 underline hover:text-blue-800">
            Click Here to Register
          </button>
        </section>

        {/* Registration Form */}
        <section id="registration-form" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Join Now!</h2>
          <h3 className="text-lg font-medium text-gray-800 mb-6">Youth Corner Registration Form</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Enter Your Name*</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Enter Your Phone*</label>
              <input type="tel" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Phone" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Enter Your WhatsApp Number*</label>
              <input type="tel" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your WhatsApp Number" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Enter Your Email*</label>
              <input type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Gender*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Course*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>Vedic Science Course</option>
                <option>Yoga for Happiness</option>
                <option>Friend of Lord Krishna (FOLK)</option>
                <option>FOLK Yatra</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Occupation*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Academic Qualification*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>High School</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message...</label>
              <textarea className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows={4} placeholder="Message..."></textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Academic Qualification (If you are a student, please write Stream & Year)</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Academic Qualification (If you are a student, please write Stream & Year)" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Academic Qualification (If you are working, please write Designation and the details of the Company)</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Academic Qualification (If you are working, please write Designation and the details of the Company)" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">dd-mm-yyyy</label>
              <input type="date" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Location" />
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              SEND MESSAGE
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025 Youth Corner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Youthcorner;
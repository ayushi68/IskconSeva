import React from 'react';

const KidsCorner: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Kids Corner</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Gopal Sakha Club */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Gopal Sakha Club</h2>
          <p className="text-gray-700 mb-2">
            The quality of children’s lives and character is a major concern for parents. Children take their experiences into their hearts, and these experiences form their character. Without proper character, knowledge can be destructive to self and society. The aim of Gopal Sakha Club is to provide a loving environment where students are nourished with care and devotion. We look forward to serving your children, providing them with a Krishna conscious education, and most of all helping them along the path to Krishna Bhakti.
          </p>
          <p className="text-gray-700 mb-2">
            Through a lively blend of art, stories, scripture, dramas, and games, children are immersed in Vaishnava spiritual wisdom and culture. For festivals, children prepare and perform dramas for the congregation and guests.
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-2">
            śrī-prahlāda uvāca<br />
            kaumāra ācaret prājṣo<br />
            dharmān bhāgavatān iha<br />
            durlabhaṁ mānuṣaṁ janma<br />
            tad apy adhruvam arthadam<br />
            (Bhāg 7.6.1)<br /><br />
            Prahlāda Mahārāja said: One who is sufficiently intelligent should use the human form of body from the very beginning of life—in other words, from the tender age of childhood—to practice the activities of devotional service, giving up all other engagements. The human body is most rarely achieved, and although temporary like other bodies, it is meaningful because in human life one can perform devotional service. Even a slight amount of sincere devotional service can give one complete perfection.
          </blockquote>
          <p className="text-gray-700 mb-2">
            The sweetest goal of Gopal Sakha Club is imparting holistic education to children to aid in the development of their character and personality. Children build long-lasting, Krishna-conscious friendships based on a shared desire to love and serve Krishna.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Srila Prabhupada on children education:</strong><br />
            Just like we send small children to nursery school, or preliminary, primary schools because that is the age, receptive age. Similarly Krishna consciousness should be taught from that childhood age. Therefore I wanted that on Sunday, let people send their children here and we shall teach Krishna consciousness.<br />
            <em>Srila Prabhupada in a lecture in Montreal, 10 June 1968</em>
          </p>
          <p className="text-gray-700 mb-2">
            Give your children a gift that he/she never forgets. We will help your children:<br />
            - Inculcate values<br />
            - Develop Character<br />
            - Learn about Vaishnav Cultural Heritage<br />
            - Establish relationship with God<br />
            - Learn Gita and other scriptures and apply the realizations in their day-to-day lives<br />
            - Create a long term and natural attachment for serving one and all
          </p>
          <p className="text-gray-700 mb-2">
            Amongst many educational and spiritual activities that we conduct as integral part of the club, following are few:<br />
            - Krishna Conscious Games<br />
            - Drawing<br />
            - Dance<br />
            - Drama<br />
            - Quiz<br />
            - Spiritual Movies<br />
            - Shloka Recitation<br />
            - Krishna Conscious Lifestyle<br />
            - Vedic Knowledge<br />
            - Moral Education
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Age Groups:</strong><br />
            Junior Class: age 3-6<br />
            Senior Class: age 7-15
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Fees:</strong><br />
            Registration Fees: 300/- (once only)<br />
            Tuition Fees: 100/- per month<br />
            Transportation Fees: 200/- monthly
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Class Timings:</strong> Every Sunday 7:30 a.m. to 9:30 a.m.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on enrolling your child today, please contact - 97550 42624, 9039215222<br />
            <strong>Email ID:</strong> hkmbhilai@gmail.com
          </p>
        </section>

        {/* Cultural Camp */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cultural Camp</h2>
          <p className="text-gray-700 mb-2">
            <strong>Cultural Camp (during summer vacation time)</strong><br />
            Hare Krishna Movement (HKM) Bhilai is conducting a Summer Camp for children!! The camp includes Slokas, Stories, Songs, Bhajans, Mantra Meditation, Craft, and Fun Games. So come along and enjoy some religious fun-filled activities.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Activities:</strong><br />
            Art & Craft, Slokas, Stories, Songs, Bhajans, Mantra Meditation, Craft, Fun Games, Storytelling, Summer Camps
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Camp Schedules:</strong><br />
            09:00 AM – 09:40 AM: Arati followed by Japa<br />
            09:40 AM – 09:50 AM: Icebreaker<br />
            09:55 AM – 11:25 AM: Bhagavad Gita Class<br />
            11:30 AM – 12:00 PM: Arati<br />
            12:30 PM – 01:00 PM: Lunch Prasadam<br />
            01:00 PM – 01:40 PM: Recess<br />
            01:40 PM – 03:30 PM: Arts & Craft, Dance, Drama<br />
            03:30 PM – 04:00 PM: Yoga & Krishna Conscious Games
          </p>
          <p className="text-gray-700 mb-2">
            Be sure to register early to reserve your spot. Summer camp spots are limited to 100 children.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on enrolling your child today, please contact - 97550 42624, 9039215222<br />
            <strong>Email ID:</strong> hkmbhilai@gmail.com
          </p>
        </section>

        {/* Heritage Fest */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Heritage Fest</h2>
          <p className="text-gray-700 mb-2">
            Heritage Fest is an entertaining and enlightening cultural carnival of contests for students between Pre Nursery to Class XII and above 18 years, celebrating India’s vibrant culture and traditions.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Guidelines to Participants:</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Students may participate in as many events as they like.</li>
            <li>Please bring your Token ID card with ID number that is given by your school teacher to the event without fail.</li>
            <li>The stage dimension for the entire contest is 10 X 25 feet. Students are requested to practice accordingly.</li>
            <li>Late comers will not be entertained.</li>
            <li>The decision of judges for all the contests will be final.</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Results and Awards:</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            <li>Attractive prizes to winners in the finals will be given away in a grand prize distribution ceremony at Hare Krishna Movement, Bhilai. Parents and teachers are also welcome to this ceremony.</li>
            <li>Special prizes will be given to the top 3 schools and to the teachers who have trained the prize-winning students.</li>
            <li>The Rolling Trophy will be awarded to the school with the maximum number of entries in each event and will be performance based.</li>
            <li>Results will be announced on the school display board.</li>
            <li>Phone calls, e-mails, or personal visits to know the results will strictly not be entertained.</li>
            <li>Late comers will not be entertained.</li>
            <li>The decision of the judges will be final and binding.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            <strong>Note:</strong> Prasadam will be distributed to all the participants in venue. Non-vegetarian foods, including eggs, are strictly not allowed inside the premises during the Heritage Fest event.
          </p>
        </section>

        {/* Streams & Contests */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Streams & Contests</h2>
          <p className="text-gray-700 mb-2">
            There are eight streams of competitions, and in each stream, there are multiple contests.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Dance:</h3>
          <p className="text-gray-700 mb-2">
            Srimad Bhagavatam describes that in the spiritual world, ‘every step is a dance’. Krishna is the greatest transcendental dancer, and His dance with the gopis of Vrindavana enchants the entire existence. A tribute to His love for ‘dance’ is the Dance competitions of Heritage Fest.<br />
            Classical Dance, Semi Classical Dance, Light Dance<br />
            <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">Register Now</button>
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Decoration:</h3>
          <p className="text-gray-700 mb-2">
            Decoration and art is the most practical and popular way to engage in worship of God in all the cultures. Heritage Fest gives you an opportunity to engage your children from a very young age, by giving them an opportunity to colour Krishna’s forms.<br />
            Cookery, Photography, Pottery Decoration, Rangoli, Salad Decoration<br />
            <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">Register Now</button>
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Drawing:</h3>
          <p className="text-gray-700 mb-2">
            Drawing and Painting can be a great podium for children to progress and discover their creativity and aids them to acquire hand-eye coordination skills. Heritage festival provides an opportunity to sketch or paint the God of art, Lord Krishna, and thereby purify your vision.<br />
            Coloring, Canvas Painting, Painting, Pencil Shading<br />
            <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">Register Now</button>
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Literary Arts:</h3>
          <p className="text-gray-700 mb-2">
            Articulation of thoughts into meaningful words is an essential quality that is worth developing in the formative years of education. Here is an opportunity for your children to exhibit their literary skills and offer it as a birthday gift to Lord Krishna on the occasion of Sri Krishna Janmashtami.<br />
            Essay Writing (English & Hindi), Rhymes, Story Telling, Vedic Quiz<br />
            <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">Register Now</button>
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Music:</h3>
          <p className="text-gray-700 mb-2">
            Lord Narayana declares to Srila Narada Muni, yatra gayanti mad-bhaktah tatra tishthami narada: “Wherever My devotee sings My glories, I take My residence there, O Narada!” Heritage Fest celebrates the talent of mastering this rich musical form, as an offering to Lord Krishna.<br />
            Gita Sloka Chanting, Krishna Bhajan, Instrumental Music, Vocal Music<br />
            <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">Register Now</button>
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Theatre:</h3>
          <p className="text-gray-700 mb-2">
            Acting and stage plays are the best ways to reach out a vital message to the masses in an easy, understandable, and entertaining manner. Heritage Fest provides a platform for children to bring out their inherent talent in theatrical performances.<br />
            Puranic Costumes
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Krishna Sakha (For above 18 years only):</h3>
          <p className="text-gray-700 mb-2">
            The creativity of real art uplifts the consciousness of the artist. While making an art form or painting the captivating beauty of Krishna, you are immersed in His Divinity. At Heritage Festival, the subject of art is Krishna Himself, so this art gives you new inspiration and a new dimension of imagination.<br />
            Classical Dance (Others), Semi Classical Dance, Vocal Music, Canvas Painting, Painting, Rangoli
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Bal Gopal (Pre Nursery & Nursery to Class IV):</h3>
          <p className="text-gray-700 mb-2">
            Giving children access to all varieties of literature is extremely important for their success. It helps them to appreciate our cultural heritage and develop emotional intelligence and creativity. Janmashtami is an occasion to express their skills like memory, language, and imagination in the service of the Supreme Lord.<br />
            Classical Dance (Others), Light Dance, Coloring, Painting, Pottery Decoration, Rangoli, Krishna Rhymes, Story Telling, Gita Sloka Chanting, Krishna Bhajans, Puranic Costumes
          </p>
        </section>

        {/* Let's Learn Together */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Let’s Learn Together!</h2>
          <p className="text-gray-700 mb-2">
            The joy of learning is best experienced when you learn what you like as well as when you like what you learn. Join us to have the best learning experience!
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information on enrolling your child today, please contact - 97550 42624, 9039215222, 97550 98618<br />
            <strong>Email ID:</strong> hkmbhilai@gmail.com
          </p>
        </section>

        {/* Registration Form */}
        <section id="registration-form" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Join Now!</h2>
          <h3 className="text-lg font-medium text-gray-800 mb-6">Kids Corner Registration Form</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Enter Child's Name*</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Child's Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Enter Parent's Phone*</label>
              <input type="tel" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Parent's Phone" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Enter Parent's WhatsApp Number*</label>
              <input type="tel" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Parent's WhatsApp Number" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Enter Parent's Email*</label>
              <input type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Parent's Email" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Child's Gender*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Program/Event*</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select</option>
                <option>Gopal Sakha Club</option>
                <option>Cultural Camp</option>
                <option>Heritage Fest - Dance</option>
                <option>Heritage Fest - Decoration</option>
                <option>Heritage Fest - Drawing</option>
                <option>Heritage Fest - Literary Arts</option>
                <option>Heritage Fest - Music</option>
                <option>Heritage Fest - Theatre</option>
                <option>Heritage Fest - Krishna Sakha (Above 18)</option>
                <option>Heritage Fest - Bal Gopal (Pre Nursery to Class IV)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Child's Age*</label>
              <input type="number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Child's Age" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">School Name*</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter School Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message...</label>
              <textarea className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows={4} placeholder="Message..."></textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Date of Birth (dd-mm-yyyy)*</label>
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
        <p>© 2025 Kids Corner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KidsCorner;
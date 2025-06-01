import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ContactFormInputs {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
}

const FamilyCorner: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean | null;
    message: string | null;
  }>({ success: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const openModal = (content: string) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setSubmitStatus({ success: null, message: null });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus({ success: true, message: result.message || 'Message sent successfully!' });
        reset();
      } else {
        setSubmitStatus({ success: false, message: result.error || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Network error occurred',
      });
    }
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756fd443d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 animate-slide-in">Welcome to Family Corner</h1>
          <p className="text-2xl mb-8 text-amber-100">
            Join the Hare Krishna Movement for spiritual growth and community joy.
          </p>
          <button
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-200 text-orange-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-300 transition transform hover:scale-105 shadow-md"
          >
            Explore Programs
          </button>
        </div>
      </header>

      {/* Programs Section */}
      <section id="programs" className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12 animate-fade-in">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Soulful Sunday Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-orange-600">Soulful Sunday</h3>
            </div>
            <p className="text-gray-600 mb-4">
              A family festival to recharge spiritually with kirtan, lectures, and a vegetarian feast.
            </p>
            <button
              onClick={() => openModal('soulful-sunday')}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Learn More
            </button>
          </div>

          {/* Hare Krishna Satsang Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 4c-2.761 0-5 2.239-5 5v2h10v-2c0-2.761-2.239-5-5-5z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-orange-600">Hare Krishna Satsang</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Weekly gatherings for bhajans, meditation, and spiritual discussions.
            </p>
            <button
              onClick={() => openModal('satsang')}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Learn More
            </button>
          </div>

          {/* Nagar Sankirtana Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h.01M12 12h.01M9 12h.01M15 9h.01M12 9h.01M9 9h.01M15 15h.01M12 15h.01M9 15h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-orange-600">Nagar Sankirtana</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Street chanting of Hare Krishna to spread peace and joy.
            </p>
            <button
              onClick={() => openModal('nagar-sankirtana')}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Learn More
            </button>
          </div>

          {/* Krishna Ashraya Program Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 2v6h4v-6m-7-7l7-7 7 7"></path>
              </svg>
              <h3 className="text-xl font-semibold text-orange-600">Krishna Ashraya Program</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Spiritual guidance for families through progressive devotion levels.
            </p>
            <button
              onClick={() => openModal('krishna-ashraya')}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Learn More
            </button>
          </div>

          {/* Offer a Prayer Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-200">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6 3 4 0-3.674-2.326A1.76 1.76 0 0116.24 19.24V5.882m-2.326.592l2.147 6.15M6 6h12"></path>
              </svg>
              <h3 className="text-xl font-semibold text-orange-600">Offer a Prayer</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Submit your prayers for blessings and spiritual support.
            </p>
            <button
              onClick={() => openModal('offer-prayer')}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section id="contact-form" className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12 animate-fade-in">
          Contact Us
        </h2>
        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Program of Interest *</label>
                <select
                  {...register('program', { required: 'Please select a program' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.program ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                >
                  <option value="">Select a program</option>
                  <option value="Soulful Sunday">Soulful Sunday</option>
                  <option value="Hare Krishna Satsang">Hare Krishna Satsang</option>
                  <option value="Nagar Sankirtana">Nagar Sankirtana</option>
                  <option value="Krishna Ashraya Program">Krishna Ashraya Program</option>
                  <option value="Offer a Prayer">Offer a Prayer</option>
                </select>
                {errors.program && (
                  <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                }`}
                placeholder="Enter your message"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            {submitStatus.message && (
              <div
                className={`p-4 rounded-lg flex items-center ${
                  submitStatus.success
                    ? 'bg-green-100 border border-green-500 text-green-700'
                    : 'bg-red-100 border border-red-500 text-red-700'
                }`}
              >
                <svg
                  className={`w-6 h-6 mr-2 ${
                    submitStatus.success ? 'text-green-500' : 'text-red-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {submitStatus.success ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
                <p>{submitStatus.message}</p>
              </div>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-600 text-white py-3 px-8 rounded-full btn-hover text-xl font-semibold tracking-wide disabled:bg-orange-400"
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </section> */}

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {modalContent === 'soulful-sunday' && (
              <div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Soulful Sunday</h2>
                <p className="text-gray-600 mb-4">
                  Make your holiday a holy day. Sunday Festival is a unique program to surcharge you spiritually for the rest of the week. In this family festival, you can look forward to participating in ecstatic devotional engagements.
                </p>
                <p className="text-gray-600 mb-4">
                  Join us for the Sunday Love Feast at the temple every Sunday:<br />
                  <strong>Morning Time:</strong> 7:30 am to 9:30 am<br />
                  <strong>Evening Time:</strong> 6:45 pm to 9:15 pm
                </p>
                <p className="text-gray-600 mb-4">
                  The Founder Acharya of the Hare Krishna Movement, Srila Prabhupada, started the “Sunday Love-Feast” Festival in the Western world. He would personally invite guests and prepare the entire meal. He would serve the devotees a variety of tasty Indian-vegetarian preparations. Along with the vegetarian feast, Srila Prabhupada would sing the Hare Krishna Maha-mantra with the guests, dance, and give a lecture on Srimad Bhagavatam & Bhagavad-Gita. Since then, this weekly Sunday Love Feast Festival is celebrated in all Hare Krishna temples around the world.
                </p>
                <p className="text-gray-600 mb-4">
                  We extend a warm and hearty welcome to you, your friends, and family. Please join us at the temple with your family and friends and enjoy the atmosphere in the association of people interested in genuine spirituality and a meaningful life. Chant and dance with us, hear what Lord Krishna speaks in Srimad Bhagavatam & Bhagavad-Gita, ask questions about the philosophy and the devotional lifestyle, and taste the delicious vegetarian feast!
                </p>
                <p className="text-gray-600 mb-4">
                  If you would like to sponsor a Sunday Love Feast (to commemorate a special occasion or celebration), please{' '}
                  <button onClick={scrollToForm} className="text-orange-600 underline hover:text-orange-800">
                    contact us
                  </button>{' '}
                  for more information.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Arati & Kirtan</h3>
                <p className="text-gray-600 mb-4">
                  The most important activity of bhakti-yoga (Krishna Consciousness) in the modern age is Kirtan, or chanting the holy names of God. Kirtan is a group activity where people gather together for ecstatic congregational dancing and chanting of the Hare Krishna Mahamantra, accompanied by rhythmic instruments. During kirtan, devotees chant and dance in glorification of the Lord.
                </p>
                <p className="text-gray-600 mb-4">
                  Aarti is a traditional ceremony in which various articles are offered to the Lord’s Deity form. According to the Vedic scriptures, the deity is the worshipful form of God, locally manifest so that the devotees can personally render some service to Him. The priest begins by blowing a conch-shell. The following items are offered: incense, ghee wick lamp, water, cloth, flowers, a chamara (whisk), and, in the summer, a peacock fan. These items represent the material elements in pure form. Aarti reminds us to offer everything in service to Lord Krishna.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Srimad Bhagavatam & Bhagavad Gita Class</h3>
                <p className="text-gray-600 mb-4">
                  The Bhagavad Gita (“Song of God”) is the philosophical foundation of the Hare Krishna movement. Sung 5,000 years ago by Lord Krishna Himself, the Gita describes the difference between the body and the self; the relationship between the soul and Krishna; and the process of bhakti-yoga, devotional service, by which one attains full realization of the Lord as a tangible fact. A specific topic is discussed by the speaker and includes a Q&A session.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vegetarian Feast</h3>
                <p className="text-gray-600">
                  A special free vegetarian feast, Prasadam (sanctified food that has been offered with love to Krishna, the Supreme Personality of Godhead), is served to everyone after the program.
                </p>
              </div>
            )}

            {modalContent === 'satsang' && (
              <div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Hare Krishna Satsang Program</h2>
                <p className="text-gray-600 mb-4">
                  Satsang is the association of people who are searching for eternal truth. It is available at Hare Krishna Mandir or can also be arranged through the temple at the homes of devotees in your neighborhood. It is effective in motivating participants to give up habits detrimental to physical and spiritual growth and cultivate devotional habits with a sense of love for Krishna, which manifests itself in increased happiness and peacefulness. Congregation members and newcomers to the temple are encouraged to enroll for the program to start a new phase of spiritual awakening in one's life.
                </p>
                <p className="text-gray-600 mb-4">
                  Hare Krishna Mandir conducts spiritual programs in the residences or community halls in the locality of interested members without taking any charges. The hosts invite their friends and neighbors to participate in the program to give them a spiritually enlivening experience. The key features of the program are bhajans & kirtans, Mantra meditation, Maha-arati, and prasadam.
                </p>
                <p className="text-gray-600 mb-4">
                  It’s a weekly evening 2-hour program in various localities in Bhilai / Durg / Raipur city, replete with Bhajans & Kirtans, Hari-Katha Pravachan, Mantra Meditation, Maha-arati & delicious Prasadam.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Features:</h3>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>One can experience the joy of Krishna-conscious communities.</li>
                  <li>Learn practical application of Bhagavad Gita & other Vedic literatures in modern life.</li>
                  <li>Systematic education in the science of Krishna consciousness is offered through VEDIC SCIENCE Sessions, Friend of Lord Krishna Sessions, giving deep insights into the devotional literatures.</li>
                  <li>Maha-arati.</li>
                </ul>
              </div>
            )}

            {modalContent === 'nagar-sankirtana' && (
              <div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Nagar Sankirtana</h2>
                <blockquote className="border-l-4 border-orange-600 pl-4 italic text-gray-600 mb-4">
                  “I offer my respectful obeisances unto the Supreme Lord, Hari, the congregational chanting of whose holy names destroys all sinful reactions, and the offering of obeisances unto whom relieves all material suffering.”<br />
                  (Śrimad Bhāgavatam 12.13.23)
                </blockquote>
                <p className="text-gray-600 mb-4">
                  Gone are the days when “Hari Katha” was a major evening occupation for rich and poor, young and old, men and women alike. Fortunate is this twentieth generation humanity, by the Grace and Prophecy of Lord Sri Chaitanya, our ears and minds are purified by the transcendental chant “Hare Krishna…”.
                </p>
                <p className="text-gray-600 mb-4">
                  As said in the above verse and as Krishna says to Arjuna in Bhagavad Gīta 10.25, <em>yajñānāṁ japa-yajño ’smi</em> (Of sacrifices I am the chanting of the holy names [japa]), the Harinām Sankīrtan should be done regularly to wipe out violence/hatred etc. among the people and establish a peaceful society.
                </p>
                <p className="text-gray-600 mb-4">
                  Prabhupada often said: “Sankīrtana is our life and soul, and if we execute this transcendental business in all earnestness, then there will be no difficulty in any way.” (Letter to Harernama written from Los Angeles)
                </p>
                <p className="text-gray-600 mb-4">
                  When a group of devotees goes on the streets of a town or village and loudly sings the holy names of the Lord to the accompaniment of mrdangas and karatals, that is called Nagar Sankirtana. Lord Caitanya Mahaprabhu, who is Krishna Himself, the supreme personality of Godhead, personally propagated Sankirtana. For Kali Yuga, the śāstras enjoin that saṅkīrtana-yajña be performed always: <em>kīrtanīyaḥ sadā hariḥ</em>.
                </p>
                <p className="text-gray-600 mb-4">
                  Why don’t you be a part of it and enjoy the transcendental fruit of this chanting? Let your friends and family also partake in this joy.
                </p>
                <p className="text-gray-600 mb-4">
                  For arranging a Nagar Sankirtan in your apartment/colony/locality, please{' '}
                  <button onClick={scrollToForm} className="text-orange-600 underline hover:text-orange-800">
                    contact us
                  </button>{' '}
                  at: +91-97550 98615.
                </p>
              </div>
            )}

            {modalContent === 'krishna-ashraya' && (
              <div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Krishna Ashraya Program</h2>
                <p className="text-gray-600 mb-4">
                  The Krishna Ashraya Program, part of the Hare Krishna Movement, guides families toward spiritual life and the ultimate shelter of the Supreme Lord. Inspired by Lord Chaitanya Mahaprabhu, who democratized spiritual knowledge in the 15th century through the sankirtan movement, this program offers progressive levels of devotion to help devotees grow spiritually while fulfilling daily responsibilities.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Program Levels</h3>
                {/* Shraddhavan */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Level 1 - Shraddhavan</h4>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Chant minimum 1 round of Hare Krishna maha-mantra for one month or more.</li>
                  <li>Complete reading “Beyond Birth & Death” by Srila Prabhupada.</li>
                  <li>Participate in Krishna Ashraya programs near home.</li>
                  <li>Learn Pranama Mantra of Srila Prabhupada & Tulasi Maharani.</li>
                  <li>Pass a test to be categorized as “Srila Prabhupada’s Shraddhavan Devotee”.</li>
                </ul>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Commitments:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Chant 1 round daily.</li>
                  <li>Read 20 pages of Srila Prabhupada’s books monthly.</li>
                  <li>Render 2 hours of temple service monthly.</li>
                  <li>Participate in book distribution for 4 hours quarterly.</li>
                </ul>
                <button
                  onClick={scrollToForm}
                  className="mt-2 inline-flex items-center text-orange-600 underline hover:text-orange-800"
                >
                  Register for Shraddhavan
                </button>
                {/* Sevaka */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Level 2 - Sevaka</h4>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Follow Shraddhavan commitments for 3+ months.</li>
                  <li>Read “Beyond Birth and Death” and “The Matchless Gift”.</li>
                  <li>Set up a home altar with RadhaKrishnachandra, Panchatattva, and Srila Prabhupada.</li>
                  <li>Pass a test to be categorized as “Srila Prabhupada’s Sevaka Devotee”.</li>
                </ul>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Commitments:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Chant 4 rounds daily.</li>
                  <li>Read 30 pages monthly.</li>
                  <li>Render 4 hours of temple service monthly.</li>
                  <li>Participate in book distribution for 8 hours quarterly.</li>
                </ul>
                <button
                  onClick={scrollToForm}
                  className="mt-2 inline-flex items-center text-orange-600 underline hover:text-orange-800"
                >
                  Register for Sevaka
                </button>
                {/* Sadhaka */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Level 3 - Sadhaka</h4>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Follow Sevaka commitments for 3+ months.</li>
                  <li>Read “Science of Self-Realization”.</li>
                  <li>Offer simple Arati and Bhoga at home.</li>
                  <li>Follow four regulative principles (no meat, illicit sex, gambling, intoxication).</li>
                  <li>Pass a test to be categorized as “Srila Prabhupada Sadhaka Devotee”.</li>
                </ul>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Commitments:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Chant 8 rounds daily.</li>
                  <li>Read 45 pages monthly.</li>
                  <li>Fast on Ekadashi and festivals.</li>
                  <li>Render 8 hours of temple service monthly.</li>
                  <li>Participate in book distribution for 12 hours quarterly.</li>
                </ul>
                <button
                  onClick={scrollToForm}
                  className="mt-2 inline-flex items-center text-orange-600 underline hover:text-orange-800"
                >
                  Register for Sadhaka
                </button>
                {/* Upasaka */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Level 4 - Upasaka</h4>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Follow Sadhaka commitments for 3+ months.</li>
                  <li>Read “Bhagavad Gita As It Is” and “Krishna - The Supreme Personality of Godhead”.</li>
                  <li>Perform full Arati and Guru Puja daily.</li>
                  <li>Surrender exclusively to Srila Prabhupada.</li>
                  <li>Pass a test to be categorized as “Srila Prabhupada Upasaka”.</li>
                </ul>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Commitments:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Chant 16 rounds daily.</li>
                  <li>Read 60 pages monthly.</li>
                  <li>Avoid intoxicants and non-vegetarian food (including onion/garlic).</li>
                  <li>Render 16 hours of temple service monthly.</li>
                  <li>Participate in book distribution for 16 hours quarterly.</li>
                </ul>
                <button
                  onClick={scrollToForm}
                  className="mt-2 inline-flex items-center text-orange-600 underline hover:text-orange-800"
                >
                  Register for Upasaka
                </button>
                {/* Harinaam Diksha */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Level 5 - Harinaam Diksha</h4>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Eligibility Criteria:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Follow Upasaka commitments for 6+ months.</li>
                  <li>Complete reading “Bhagavad Gita As It Is”, “Krishna - The Supreme Personality of Godhead”, and “Srila Prabhupada” biography.</li>
                  <li>Follow four regulative principles strictly.</li>
                  <li>Pass a test and interview with temple authorities.</li>
                </ul>
                <h5 className="text-md font-semibold text-gray-700 mb-1">Commitments:</h5>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  <li>Chant 16 rounds daily.</li>
                  <li>Perform daily sadhana, including Arati, Guru Puja, and Srimad Bhagavatam class.</li>
                  <li>Render 20 hours of temple service monthly.</li>
                  <li>Participate in book distribution for 20 hours quarterly.</li>
                </ul>
                <button
                  onClick={scrollToForm}
                  className="mt-2 inline-flex items-center text-orange-600 underline hover:text-orange-800"
                >
                  Register for Harinaam Diksha
                </button>
              </div>
            )}

            {modalContent === 'offer-prayer' && (
              <div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Offer a Prayer</h2>
                <p className="text-gray-600 mb-4">
                  At the Hare Krishna Movement, we believe in the power of prayer to connect with Lord Krishna and seek His blessings. Whether you’re seeking guidance, peace, or gratitude, you can submit your prayers to be offered at our temple during our sacred rituals.
                </p>
                <p className="text-gray-600 mb-4">
                  Our priests will include your prayers in the daily Arati ceremonies, where offerings are made to Sri Sri Radha Krishnachandra. Your intentions will be sanctified through the chanting of the Hare Krishna Maha-mantra and the spiritual atmosphere of the temple.
                </p>
                <p className="text-gray-600 mb-4">
                  To submit a prayer, please use the contact form below, selecting “Offer a Prayer” as your program of interest. Include your prayer message, and we will ensure it is offered with devotion.
                </p>
                <p className="text-gray-600">
                  For more information or special prayer requests, contact us at +91-97550 98615 or{' '}
                  <button onClick={scrollToForm} className="text-orange-600 underline hover:text-orange-800">
                    send a message
                  </button>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyCorner;
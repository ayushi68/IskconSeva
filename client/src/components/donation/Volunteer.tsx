import React, { useState, useEffect } from 'react';

const Volunteer: React.FC = () => {
  // Carousel images (replace with actual temple/volunteer-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Volunteer+1',
    'https://via.placeholder.com/1200x500?text=Volunteer+2',
    'https://via.placeholder.com/1200x500?text=Volunteer+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // State for volunteer form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    role: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, log the form data to console
    console.log('Volunteer Form Data:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      availability: '',
      role: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Volunteer Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Volunteer: Serve Krishna with Love
          </h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImage ? 'bg-white' : 'bg-gray-400'
              } shadow-md`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-amber-800 mb-6 text-center">
          Join Us as a Volunteer at HKM Bhilai
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Volunteering at HKM Bhilai is a divine opportunity to serve Lord Krishna
          and His devotees, immersing yourself in the bliss of Krishna
          Consciousness. Inspired by Srila Prabhupada’s teachings, our volunteers
          play a vital role in sustaining temple activities, spreading Vedic
          wisdom, and fostering a community of devotion and love.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Whether you’re assisting in deity worship, participating in sankirtan,
          or helping with youth programs, every act of service brings you closer to
          Krishna. Join us in this sacred seva and experience the joy of giving
          selflessly.
        </p>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 to-orange-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Volunteer Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Deity Worship Support
            </h3>
            <p className="text-gray-600 text-sm">
              Assist in the sacred practice of Vigraha Seva by helping with deity
              decoration, preparing offerings, or maintaining the altar’s
              cleanliness.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Sankirtan and Outreach
            </h3>
            <p className="text-gray-600 text-sm">
              Join our sankirtan teams to chant the Holy Names and distribute
              Srila Prabhupada’s books, spreading Krishna Consciousness in the
              community.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Youth Empowerment Programs
            </h3>
            <p className="text-gray-600 text-sm">
              Support our youth initiatives by mentoring young devotees, organizing
              camps, or facilitating character development workshops.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Festival and Event Assistance
            </h3>
            <p className="text-gray-600 text-sm">
              Help organize and manage temple festivals, ensuring a blissful
              experience for all devotees through decorations, prasadam
              distribution, and more.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Kitchen Seva
            </h3>
            <p className="text-gray-600 text-sm">
              Participate in preparing bhoga for Their Lordships, cooking with
              love and devotion to offer sanctified prasadam to Krishna and the
              devotees.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Educational Support
            </h3>
            <p className="text-gray-600 text-sm">
              Assist in managing our spiritual library, conducting Gyaan Daan
              sessions, or supporting educational trips for youth to pilgrimage
              sites.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Volunteering Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Benefits of Volunteering
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Volunteering at HKM Bhilai is not just an act of service—it’s a
          transformative journey that brings you closer to Krishna. Here are some
          of the spiritual and personal benefits:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 mt-4">
          <li>
            Spiritual Growth: Deepen your Krishna Consciousness through direct
            seva, purifying your heart and mind.
          </li>
          <li>
            Sadhu Sanga: Associate with like-minded devotees, fostering a sense of
            community and spiritual support.
          </li>
          <li>
            Divine Blessings: Earn the mercy of Their Lordships, Sri Sri
            Nitai-Gauranga, through selfless service.
          </li>
          <li>
            Skill Development: Gain practical skills in event management, teaching,
            cooking, and more, all offered in Krishna’s service.
          </li>
          <li>
            Inner Peace: Experience the transcendental bliss of serving Krishna,
            transcending material anxieties.
          </li>
        </ul>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-amber-500 pl-4 mt-4">
          “Work done as a sacrifice for Viṣṇu has to be performed; otherwise work
          causes bondage in this material world.”<br />
          <span className="text-sm">— Bhagavad-gita 3.9</span>
        </blockquote>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 to-orange-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Volunteer Registration Form
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-gray-700"
                >
                  Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="E.g., Weekends, Evenings, Specific days"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred Volunteer Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                >
                  <option value="">Select a role</option>
                  <option value="Deity Worship Support">
                    Deity Worship Support
                  </option>
                  <option value="Sankirtan and Outreach">
                    Sankirtan and Outreach
                  </option>
                  <option value="Youth Empowerment Programs">
                    Youth Empowerment Programs
                  </option>
                  <option value="Festival and Event Assistance">
                    Festival and Event Assistance
                  </option>
                  <option value="Kitchen Seva">Kitchen Seva</option>
                  <option value="Educational Support">Educational Support</option>
                  <option value="Other">Other (Specify in Message)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="Share any additional details or preferences"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transform transition-transform hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-orange-50 to-amber-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Become a Volunteer Today
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your time and dedication can make a profound impact on the lives of
          devotees and the mission of HKM Bhilai. Whether you can offer a few
          hours a week or join us for special events, every moment spent in
          Krishna’s service brings eternal rewards.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          To volunteer or learn more, please contact us at{' '}
          <a
            href="mailto:contact@hkmbhilai.org"
            className="text-amber-600 hover:underline"
          >
            contact@hkmbhilai.org
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919755098615"
            className="text-amber-600 hover:underline"
          >
            +91 9755098615
          </a>.
        </p>
        <a
          href="mailto:contact@hkmbhilai.org"
          className="mt-6 inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transform transition-transform hover:scale-105"
        >
          Join as a Volunteer
        </a>
      </section>
    </div>
  );
};

export default Volunteer;
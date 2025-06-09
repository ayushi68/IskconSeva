import React, { useState, useEffect } from 'react';

const Volunteer: React.FC = () => {
  // Carousel images (replace with actual temple/volunteer-related image URLs)
  const images: string[] = [
    'https://via.placeholder.com/1200x500?text=Volunteer+1',
    'https://via.placeholder.com/1200x500?text=Volunteer+2',
    'https://via.placeholder.com/1200x500?text=Volunteer+3',
  ];

  const [currentImage, setCurrentImage] = useState<number>(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // State for volunteer form
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    contact: string;
    dob: string;
    days: { [key: string]: boolean };
    time: string;
  }>({
    fullName: '',
    email: '',
    contact: '',
    dob: '',
    days: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
    time: '',
  });

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;
  if (type === 'checkbox') {
    // Type assertion to HTMLInputElement for checkbox
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      days: { ...prev.days, [name]: checked },
    }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};

  const handleSubmit = async () => {
    // Prepare data for API submission
    const submissionData = {
      fullName: formData.fullName,
      email: formData.email,
      contact: formData.contact,
      dob: formData.dob,
      days: Object.keys(formData.days).filter((day) => formData.days[day]),
      time: formData.time,
    };

    try {
      // Mock API endpoint (replace with actual API endpoint)
      const response = await fetch('https://api.example.com/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        alert('Thank you for your application! We will contact you soon.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          contact: '',
          dob: '',
          days: {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false,
          },
          time: '',
        });
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
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
            BE PART OF THE COMMUNITY!
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

      {/* Sanskrit Verse Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-amber-800 mb-6 text-center">
          स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          Svalpam apy asya dharmasya trāyate mahato bhayāt<br />
          <span className="text-sm">— Bhagavad-gita 2.40</span>
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Devotional service is so pure and perfect that once having begun, one is forcibly dragged to ultimate success. The temple means to give a chance to everyone, even to the child, to advance one step in Krishna Consciousness. One step a day means in 60-70 years one can easily reach the Supreme Personality of Godhead, the ultimate goal of life.
        </p>
      </section>

      {/* Main Goal Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 to-orange-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          DEVOTIONAL SERVICE TO THE LORD IS THE ULTIMATE GOAL OF LIFE
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          In every chapter of Bhagavad-gita, Lord Krishna stresses that devotional service unto the Supreme Personality of Godhead is the ultimate goal of life (BG 18.65). Even the processes of yoga, austerity, sacrifice, or charity are meant to culminate in devotional service to the Lord. The temple means to give a chance to everyone, even to the child, to advance one step in Krishna Consciousness. One step a day means in 60-70 years one can easily reach the Supreme Personality of Godhead, the ultimate goal of life.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Fortunately, we can do Seva (Pure Devotional Service) at HKM Bhilai, which gives us a chance to purify our hearts and minds, develop love for Krishna, and ultimately attain the ultimate goal of life.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Our only aim is to develop Krishna Consciousness based on practical activity, whatever little strength you have got, whatever little education you have got, whatever little knowledge you have got. Srimad Bhagavatam Lectures, Mayapur, March 1, 1977.
        </p>
      </section>

      {/* Seva Diagram Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Should I learn something new to do Seva?
        </h2>
        <div className="flex justify-center my-8">
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SEVA
                </div>
              </div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center text-center p-2">
                <span className="text-sm text-gray-700">Without any expectation</span>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center text-center p-2">
                <span className="text-sm text-gray-700">Hearty</span>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center text-center p-2">
                <span className="text-sm text-gray-700">With pure intention</span>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center text-center p-2">
                <span className="text-sm text-gray-700">Done always without any lapses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can I Do Seva Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 to-orange-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          HOW CAN I DO SEVA?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          <span className="font-semibold">Bhakti (Bhagavatam 1.2.6):</span> Sa vai puṁsāṁ paro dharmo yato bhaktir adhokṣaje ahaituky apratihatā yayātmā suprasīdati – the duty of every living being is to perform welfare activities for the benefit of others with his life, wealth, intelligence, and words. This is the mission of HKM Bhilai. We want to do Seva to the Lord, to the devotees, to the society, to the nation, and to the world at large by engaging our spiritual devotional service without any motivation, rendering such service as the only occupational business of all living entities.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Devotional Service to the Lord is the Prime Necessity of all living entities. The temple means to give a chance to everyone, even to the child, to advance one step in Krishna Consciousness. One step a day means in 60-70 years one can easily reach the Supreme Personality of Godhead, the ultimate goal of life.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Srila Suta Goswami is presenting the prime necessity of devotional service to the Lord, which is the only occupational business of all living entities. Devotional service is so pure and perfect that once having begun, one is forcibly dragged to ultimate success.
        </p>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 to-orange-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          VOLUNTEER FOR DEVOTIONAL SERVICE – NOT A JOB, IT IS A PRIVILEGE – SRILA PRABHUPADA<br />
          How can you take part?
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
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
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="Enter your contact number"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Days Available
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {Object.keys(formData.days).map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name={day}
                      checked={formData.days[day]}
                      onChange={handleChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-600">{day}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Time
              </label>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="time"
                    value="Morning"
                    checked={formData.time === 'Morning'}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                    required
                  />
                  <span className="text-sm text-gray-600">Morning</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="time"
                    value="Evening"
                    checked={formData.time === 'Evening'}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                    required
                  />
                  <span className="text-sm text-gray-600">Evening</span>
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transform transition-transform hover:scale-105"
              >
                Submit Application
              </button>
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
          Your time and dedication can make a profound impact on the lives of devotees and the mission of HKM Bhilai. Whether you can offer a few hours a week or join us for special events, every moment spent in Krishna’s service brings eternal rewards.
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
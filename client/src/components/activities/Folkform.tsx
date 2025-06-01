import React, { useState } from 'react';

const Folkform: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    gender: '',
    course: '',
    occupation: '',
    qualification: '',
    message: '',
    academicQual1: '',
    academicQual2: '',
    dob: '',
    location: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSuccess(result.message);
      setFormData({
        name: '',
        phone: '',
        whatsapp: '',
        email: '',
        gender: '',
        course: '',
        occupation: '',
        qualification: '',
        message: '',
        academicQual1: '',
        academicQual2: '',
        dob: '',
        location: ''
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl mx-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Now!</h2>
          <p className="text-gray-600">Youth Corner Registration Form</p>
          <div className="mt-4 w-16 h-1 bg-blue-500 rounded-full mx-auto"></div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <p className="text-green-700 font-medium">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                👤
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                📞
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                💬
              </div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp*"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ✉️
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
                required
              >
                <option value="" disabled>Gender*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ▼
              </div>
            </div>
            
            <div className="relative">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
                required
              >
                <option value="" disabled>Course*</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ▼
              </div>
            </div>
            
            <div className="relative">
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
                required
              >
                <option value="" disabled>Occupation*</option>
                <option value="student">Student</option>
                <option value="working">Working</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ▼
              </div>
            </div>
            
            <div className="relative">
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
                required
              >
                <option value="" disabled>Qualification*</option>
                <option value="highschool">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ▼
              </div>
            </div>
            
            <div className="relative md:col-span-2">
              <div className="absolute left-3 top-4 text-gray-500">
                ✏️
              </div>
              <textarea
                name="message"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[120px]"
                rows={4}
              />
            </div>
            
            <div className="relative md:col-span-2">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                🎓
              </div>
              <input
                type="text"
                name="academicQual1"
                placeholder="Student? Enter your stream & year"
                value={formData.academicQual1}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative md:col-span-2">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                💼
              </div>
              <input
                type="text"
                name="academicQual2"
                placeholder="Working? Enter your designation & company"
                value={formData.academicQual2}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                🎂
              </div>
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth*"
                value={formData.dob}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                📍
              </div>
              <input
                type="text"
                name="location"
                placeholder="Your Location*"
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Folkform;
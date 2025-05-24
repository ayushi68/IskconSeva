import React, { useState } from 'react';

const KidsCorner: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'gopal' | 'cultural'>('gopal');

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCulturalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert('Cultural/Heritage Fest Registration Submitted!');
  };

  const handleGopalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert('Gopal Sakha Club Registration Submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Kids Corner</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Gopal Sakha Club Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Gopal Sakha Club</h2>
          <p className="text-gray-700 mb-2">
            The quality of children’s lives and character is a major concern for parents. Children take their experiences into their hearts, and these experiences form their character. Without proper character, knowledge can be destructive to self and society. The aim of Gopal Sakha Club is to provide a loving environment where students are nourished with care and devotion. We look forward to serving your children, providing them with a Krishna conscious education, and most of all helping them along the path to Krishna Bhakti.
          </p>
          {/* Other Gopal Sakha content remains unchanged */}
          <p className="text-gray-700 mb-2">
            <strong>Fees:</strong><br />
            Registration Fees: 300/- (once only)<br />
            Tuition Fees: 100/- per month<br />
            Transportation Fees: 200/- monthly
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information, please contact - 97550 42624, 9039215222<br />
            <strong>Email ID:</strong> hkmbhilai@gmail.com
          </p>
        </section>

        {/* Cultural Camp Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cultural Camp</h2>
          <p className="text-gray-700 mb-2">
            <strong>Cultural Camp (during summer vacation time)</strong><br />
            Hare Krishna Movement (HKM) Bhilai is conducting a Summer Camp for children!! The camp includes Slokas, Stories, Songs, Bhajans, Mantra Meditation, Craft, and Fun Games. So come along and enjoy some religious fun-filled activities.
          </p>
          {/* Other Cultural Camp content remains unchanged */}
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information, please contact - 97550 42624, 9039215222<br />
            <strong>Email ID:</strong> hkmbhilai@gmail.com
          </p>
        </section>

        {/* Heritage Fest Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Heritage Fest</h2>
          <p className="text-gray-700 mb-2">
            Heritage Fest is an entertaining and enlightening cultural carnival of contests for students between Pre Nursery to Class XII and above 18 years, celebrating India’s vibrant culture and traditions.
          </p>
          {/* Other Heritage Fest content remains unchanged */}
        </section>

        {/* Streams & Contests Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Streams & Contests</h2>
          {/* Streams & Contests content remains unchanged */}
          <button onClick={scrollToForm} className="mt-2 text-blue-600 underline hover:text-blue-800">Register Now</button>
        </section>

        {/* Let's Learn Together Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Let’s Learn Together!</h2>
          <p className="text-gray-700 mb-2">
            The joy of learning is best experienced when you learn what you like as well as when you like what you learn. Join us to have the best learning experience!
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> For more information, please contact - 97550 42624, 9039215222, 97550 98618<br />
            <strong>Email ID:</strong> hkmbhilai@gmail.com
          </p>
        </section>

        {/* Registration Forms Section */}
        {/* Registration Forms Section */}
        <section id="registration-form" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Join Now!</h2>

          {/* Tabs for switching between forms */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${activeForm === 'gopal' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveForm('gopal')}
            >
              Gopal Sakha Club
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeForm === 'cultural' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveForm('cultural')}
            >
              Cultural/Heritage Fest
            </button>
          </div>

          {/* Gopal Sakha Club Form */}
          {activeForm === 'gopal' && (
            <form onSubmit={handleGopalSubmit} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Gopal Sakha Club Registration</h3>
              <div>
                <label className="block text-gray-700 mb-1">Name (नाम)*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Child's Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Gender (लिंग)*</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Contact Number (संपर्क नंबर)*</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter 10-digit Contact Number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Date of Birth (जन्म तिथि)*</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Class (कक्षा)*</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option>Select</option>
                  <option>Junior (Nursery to Class IV)</option>
                  <option>Senior (Class V to Class X)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">School Name (स्कूल के नाम)*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter School Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Address (पता)*</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={3}
                  placeholder="Enter Address"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Center (केंद्र)*</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option>Select</option>
                  <option>Bhilai</option>
                  <option>Raipur</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Blood Group (रक्त समूह)*</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option>Select</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Father's/Mother's/Guardian's Name (पिता/माता/अभिभावक का नाम)*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Father's/Mother's/Guardian's Occupation (पिता/माता/अभिभावक का व्यवसाय)</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Occupation"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Father's/Mother's/Guardian's Contact Number (पिता/माता/अभिभावक का संपर्क नंबर)*</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter 10-digit Contact Number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Father's/Mother's/Guardian's Email ID (पिता/माता/अभिभावक की ईमेल-आईडी)*</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Email ID"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">How did you come to know about Gopal Sakha? (आपको गोपाल सखा के बारे में कैसे पता चला?)*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="E.g., Newspaper, Friend, Website"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Any particular issues (Health/Psychology/Habits) (कोई विशेष मुद्दा)*</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={3}
                  placeholder="Enter any health, psychology, or habit issues"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Date of Joining (शामिल होने की तिथि)*</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Reason for Joining Gopal Sakha Club (गोपाल सखा क्लब में शामिल होने का कारण)*</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={3}
                  placeholder="Enter reason for joining"
                  required
                ></textarea>
              </div>

              {/* Payment Section */}
              <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Details</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Bank Details:</strong><br />
                  UPI ID: Q68635907@ybl<br />
                  Pay via UPI apps (Paytm, Google Pay, PhonePe, etc.).
                </p>
                <div className="mb-4">
                  <img
                    src="https://via.placeholder.com/150" // Replace with actual QR code URL
                    alt="Payment QR Code"
                    className="w-32 h-32 mx-auto"
                  />
                  <p className="text-center text-gray-700 mt-2">Scan to pay Registration and Transportation Fees</p>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Registration Fees Transaction ID*</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Transaction ID"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Registration Fees Transaction Copy (PDF/Image, Max 10MB)*</label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Receipt Number (If paid in cash)</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Receipt Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Transportation Fees Transaction ID</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Transaction ID"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Transportation Fees Transaction Copy (PDF/Image, Max 10MB)</label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Transportation Fees Receipt Number (If paid in cash)</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Receipt Number"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit Gopal Sakha Club Registration
              </button>
            </form>
          )}

          {/* Cultural/Heritage Fest Form */}
          {activeForm === 'cultural' && (
            <form onSubmit={handleCulturalSubmit} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Cultural/Heritage Fest Registration</h3>
              <div>
                <label className="block text-gray-700 mb-1">Registration ID</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Registration ID"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Child's Name*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Child's Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Date of Birth (dd-mm-yyyy)*</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Class</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Class"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Gender*</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">School Name*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter School Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Father's Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Father's Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Father's Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Father's Phone"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Father's Occupation</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Father's Occupation"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Mother's Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Mother's Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Mother's Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Mother's Phone"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Mother's Occupation</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Mother's Occupation"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Address</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={3}
                  placeholder="Enter Address"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Landline Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Landline Number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Mobile Number*</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Mobile Number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email ID</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Email ID"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">How did you come to know about Culture Camp?</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="E.g., Newspaper, Friend, Website"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Have you attended Culture Camp before?</label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Are you a Gopal Sakha Club member?</label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Any particular issues (Health/Psychology/Habits)</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={3}
                  placeholder="Enter any health, psychology, or habit issues"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Module*</label>
                <select
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option>Select</option>
                  <option>Dance</option>
                  <option>Dramatics</option>
                  <option>Creative Arts</option>
                </select>
              </div>

              {/* Payment Section */}
              <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Details</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Bank Details:</strong><br />
                  UPI ID: Q68635907@ybl<br />
                  Pay via UPI apps (Paytm, Google Pay, PhonePe, etc.).<br />
                  Cheque or DD should be drawn in favor of Hare Krishna Movement.
                </p>
                <div className="mb-4">
                  <img
                    src="https://via.placeholder.com/150" // Replace with actual QR code URL
                    alt="Payment QR Code"
                    className="w-32 h-32 mx-auto"
                  />
                  <p className="text-center text-gray-700 mt-2">Scan to pay Registration and Transport Fees</p>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Registration Fee Payment Method</label>
                  <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select</option>
                    <option>Cash</option>
                    <option>Cheque</option>
                    <option>UPI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Registration Fee Transaction ID</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Transaction ID"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Registration Fee Transaction Copy (PDF/Image, Max 10MB)</label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Transport Fee Area</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Area"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Transport Fee Amount</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Amount"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Transport Fee Transaction ID</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Transaction ID"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Transport Fee Transaction Copy (PDF/Image, Max 10MB)</label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Receipt Number (If paid in cash)</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Receipt Number"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 mb-2">
                  <strong>Terms and Conditions:</strong><br />
                  1. The amount once paid shall not be refunded or transferred to other participants. Collect receipt on each payment.<br />
                  2. Cheque or DD should be drawn in favor of Hare Krishna Movement.<br />
                  3. Change of modules and change of batches are not allowed.<br />
                  4. Students are strictly advised not to carry mobiles or any valuables while participating in the camp.<br />
                  5. Students should report on time for the camp.<br />
                  6. Certificates will be issued based on attendance (90% or above).<br />
                  7. Pick up and drop points only at mutually convenient spots. For more details, contact - 9039215222, 0788-2223699.
                </p>
                <label className="flex items-center text-gray-700">
                  <input type="checkbox" className="mr-2" required />
                  I agree to abide by the above-mentioned terms and conditions.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit Cultural/Heritage Fest Registration
              </button>
            </form>
          )}
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
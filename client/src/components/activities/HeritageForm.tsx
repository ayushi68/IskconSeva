import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeritageForm: React.FC = () => {
  const [formData, setFormData] = useState({
    registrationId: '',
    name: '',
    gender: '',
    dateOfBirth: '',
    class: '',
    schoolName: '',
    bloodGroup: '',
    address: '',
    contactNumber: '',
    email: '',
    guardianName: '',
    guardianContactNumber: '',
    guardianEmail: '',
    howHeard: '',
    issues: '',
    dateOfJoining: '',
    reasonForJoining: '',
    registrationReceiptNumber: '',
    photo: null as File | null,
    regTxnId: '',
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [registrationPaymentStatus, setRegistrationPaymentStatus] = useState<string>('pending');
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean | null;
    message: string | null;
  }>({ success: null, message: null });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const generateRegistrationId = (): string => {
    const date = new Date();
    const dateString = date.toISOString().slice(0, 10).replace(/-/g, '');
    const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `HERITAGE-${dateString}-${randomString}`;
  };

  useEffect(() => {
    const newRegistrationId = generateRegistrationId();
    setFormData((prev) => ({ ...prev, registrationId: newRegistrationId }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, photo: null }));
      setPhotoPreview(null);
    }
  };

  const handlePayment = () => {
    const amount = 500;
    setSubmitStatus({ success: null, message: `Initiating payment of Rs ${amount} for Registration Fees via payment gateway...` });
    setTimeout(() => {
      setRegistrationPaymentStatus('completed');
      setFormData((prev) => ({ ...prev, regTxnId: 'SIMULATED_REG_TXN' }));
      setSubmitStatus({ success: true, message: `Payment of Rs ${amount} for Registration Fees completed successfully!` });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ success: null, message: null });
    setIsSubmitting(true);

    if (registrationPaymentStatus !== 'completed') {
      setSubmitStatus({ success: false, message: 'Please complete the Registration Fees payment.' });
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('registrationId', formData.registrationId);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('dateOfBirth', formData.dateOfBirth);
    formDataToSend.append('class', formData.class);
    formDataToSend.append('schoolName', formData.schoolName);
    formDataToSend.append('bloodGroup', formData.bloodGroup);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('contactNumber', formData.contactNumber);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('guardianName', formData.guardianName);
    formDataToSend.append('guardianContactNumber', formData.guardianContactNumber);
    formDataToSend.append('guardianEmail', formData.guardianEmail);
    formDataToSend.append('howHeard', formData.howHeard);
    formDataToSend.append('issues', formData.issues);
    formDataToSend.append('dateOfJoining', formData.dateOfJoining);
    formDataToSend.append('reasonForJoining', formData.reasonForJoining);
    formDataToSend.append('registrationReceiptNumber', formData.registrationReceiptNumber);
    formDataToSend.append('regTxnId', formData.regTxnId);
    if (formData.photo) {
      formDataToSend.append('photo', formData.photo);
    }

    console.log('Submitting FormData:');
    // for (const [key, value] of formDataToSend.entries()) {
    //   console.log(`${key}:`, value);
    // }

    const apiUrl = '/api/heritage-form'; // This will be proxied to http://localhost:5000/api/heritage-form
    const attemptSubmission = async (attempt: number = 1, maxAttempts: number = 3) => {
      try {
        console.log(`Attempt ${attempt}/${maxAttempts} - Sending request to ${apiUrl}`);
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formDataToSend,
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers.get('content-type'));

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.log('Non-JSON response:', text);
          if (response.status === 404) {
            throw new Error(
              'API endpoint not found. Please ensure the backend server is running on http://localhost:5000 and the /api/heritage-form route is correctly set up.'
            );
          }
          throw new Error(
            `Expected JSON response but received ${contentType || 'unknown content type'}. Response: ${text.slice(0, 100)}...`
          );
        }

        const result = await response.json();
        console.log('Response body:', result);

        if (response.ok) {
          setSubmitStatus({ success: true, message: result.message || 'Registration submitted successfully!' });
          setFormData({
            registrationId: generateRegistrationId(),
            name: '',
            gender: '',
            dateOfBirth: '',
            class: '',
            schoolName: '',
            bloodGroup: '',
            address: '',
            contactNumber: '',
            email: '',
            guardianName: '',
            guardianContactNumber: '',
            guardianEmail: '',
            howHeard: '',
            issues: '',
            dateOfJoining: '',
            reasonForJoining: '',
            registrationReceiptNumber: '',
            photo: null,
            regTxnId: '',
          });
          setPhotoPreview(null);
          setRegistrationPaymentStatus('pending');
        } else {
          if (result.error?.includes('Registration ID') && attempt < maxAttempts) {
            const newRegistrationId = generateRegistrationId();
            console.log(`Duplicate registrationId detected. Retrying with new ID: ${newRegistrationId}`);
            setFormData((prev) => ({ ...prev, registrationId: newRegistrationId }));
            formDataToSend.set('registrationId', newRegistrationId);
            setSubmitStatus({ success: null, message: `Retrying with new Registration ID (Attempt ${attempt + 1}/${maxAttempts})...` });
            await attemptSubmission(attempt + 1, maxAttempts);
          } else {
            setSubmitStatus({ success: false, message: result.error || 'Failed to submit registration' });
          }
        }
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus({
          success: false,
          message: error instanceof Error
            ? error.message
            : 'An unexpected error occurred. Please try again later.',
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    await attemptSubmission();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 font-inter">
      <header className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756fd443d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15"></div>
        <h1 className="text-7xl font-extrabold relative z-10 animate-slide-in">
          Heritage Program Registration
        </h1>
        <p className="mt-4 text-2xl relative z-10 text-amber-100">Hare Krishna Movement, Bhilai</p>
      </header>
      <main className="max-w-6xl mx-auto p-8 space-y-16">
        <section className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">
            Heritage Program Registration Form (वैष्णव सांस्कृतिक विरासत कार्यक्रम पंजीकरण फॉर्म)
          </h2>
          <div className="mb-8 text-gray-700">
            <p className="mb-4">
              The Heritage Program by Hare Krishna Movement aims to immerse children in the rich Vaishnav Cultural Heritage, fostering a deep connection with Krishna consciousness. Through interactive sessions, Vedic stories, and cultural activities, we help children develop strong moral values, character, and a lifelong devotion to Krishna Bhakti.
            </p>
            <p className="mb-4">
              हरे कृष्णा मूवमेंट द्वारा वैष्णव सांस्कृतिक विरासत कार्यक्रम का उद्देश्य बच्चों को समृद्ध वैष्णव सांस्कृतिक विरासत में डुबोना है, जिससे कृष्णभावनामृत के साथ एक गहरा संबंध विकसित हो। इंटरैक्टिव सत्रों, वैदिक कहानियों और सांस्कृतिक गतिविधियों के माध्यम से, हम बच्चों को मजबूत नैतिक मूल्यों, चरित्र और कृष्ण भक्ति के प्रति आजीवन समर्पण विकसित करने में मदद करते हैं।
            </p>
            <p className="font-semibold">Program Benefits:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Learn about Vaishnav Cultural Heritage</li>
              <li>Develop moral values and character</li>
              <li>Engage in Vedic storytelling and cultural activities</li>
              <li>Establish a relationship with Krishna</li>
              <li>Participate in Kirtan, Darshan, and interactive sessions</li>
            </ul>
            <p className="font-semibold">कार्यक्रम के लाभ:</p>
            <ul className="list-disc list-inside mb-4">
              <li>वैष्णव सांस्कृतिक विरासत के बारे में जानें</li>
              <li>नैतिक मूल्यों और चरित्र का विकास करें</li>
              <li>वैदिक कहानियों और सांस्कृतिक गतिविधियों में भाग लें</li>
              <li>कृष्ण के साथ संबंध स्थापित करें</li>
              <li>कीर्तन, दर्शन और इंटरैक्टिव सत्रों में भाग लें</li>
            </ul>
            <p><strong>Age Criteria:</strong> 6 years to 16 years</p>
            <p><strong>Dates:</strong> Every Saturday</p>
            <p><strong>Time:</strong> 4:00 PM to 6:00 PM</p>
            <p><strong>Venue:</strong> Hare Krishna Movement, Akshaya Patra Campus, Sector - 6, Bhilai</p>
            <p><strong>Fees:</strong> Registration Fees: Rs 500/- (one time)</p>
            <p><strong>Contact:</strong> 90392 15222, 0788 - 2284699 (Bhilai)</p>
            <p><strong>Email:</strong> ayushisamaddar55@gmail.com</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Participant Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Registration ID *</label>
                <input
                  type="text"
                  name="registrationId"
                  value={formData.registrationId}
                  className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name (नाम) *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Gender (लिंग) *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Date of Birth (जन्म तिथि) *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Class (कक्षा) *</label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="KG">KG</option>
                  <option value="Class I">Class I</option>
                  <option value="Class II">Class II</option>
                  <option value="Class III">Class III</option>
                  <option value="Class IV">Class IV</option>
                  <option value="Class V">Class V</option>
                  <option value="Class VI">Class VI</option>
                  <option value="Class VII">Class VII</option>
                  <option value="Class VIII">Class VIII</option>
                  <option value="Class IX">Class IX</option>
                  <option value="Class X">Class X</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">School Name (स्कूल के नाम) *</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter School Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Blood Group (रक्त समूह) *</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Upload Photo (फोटो अपलोड करें)</label>
              <input
                type="file"
                name="photo"
                accept="image/jpeg,image/png,image/gif" // Match backend's allowed types (exclude PDF)
                onChange={handlePhotoChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {photoPreview && (
                <div className="mt-4">
                  <img
                    src={photoPreview}
                    alt="Photo Preview"
                    className="max-w-xs h-auto rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Address (पता) *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Full Address"
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Contact Number (संपर्क नंबर) *</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter 10-digit number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email ID (ईमेल-आईडी) *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter Email Address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Guardian Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Guardian's Name (अभिभावक का नाम) *
                </label>
                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Guardian's Contact Number (अभिभावक का संपर्क नंबर) *
                </label>
                <input
                  type="tel"
                  name="guardianContactNumber"
                  value={formData.guardianContactNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter 10-digit number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Guardian's Email-ID (अभिभावक की ईमेल-आईडी) *
                </label>
                <input
                  type="email"
                  name="guardianEmail"
                  value={formData.guardianEmail}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  How did you come to know about the Heritage Program? (आपको इस कार्यक्रम के बारे में कैसे पता चला?) *
                </label>
                <input
                  type="text"
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="E.g., Friend, Flyer, Social Media"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Any particular issues (Health/Psychology/Habits) (कोई विशेष मुद्दा - स्वास्थ्य/मनोविज्ञान/आदतें) *
                </label>
                <textarea
                  name="issues"
                  value={formData.issues}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter any relevant details"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Date of Joining (शामिल होने की तिथि) *
                </label>
                <input
                  type="date"
                  name="dateOfJoining"
                  value={formData.dateOfJoining}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Reason for Joining the Heritage Program (कार्यक्रम में शामिल होने का कारण)
                </label>
                <textarea
                  name="reasonForJoining"
                  value={formData.reasonForJoining}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your reason"
                  rows={4}
                />
              </div>
            </div>

            {/* Payment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Registration Fees (पंजीकरण शुल्क) - Rs 500/- *
                </label>
                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={registrationPaymentStatus === 'completed'}
                  className={`w-full p-3 rounded-lg text-white font-semibold ${
                    registrationPaymentStatus === 'completed'
                      ? 'bg-green-500 cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  {registrationPaymentStatus === 'completed'
                    ? 'Payment Completed'
                    : 'Pay Rs 500 via Payment Gateway'}
                </button>
                <label className="block text-gray-700 font-semibold mt-4 mb-2">
                  Receipt Number (Cash Payment) (रसीद संख्या - नकद भुगतान)
                </label>
                <input
                  type="text"
                  name="registrationReceiptNumber"
                  value={formData.registrationReceiptNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Receipt Number if paid in cash"
                />
              </div>
            </div>

            {/* Submission Status */}
            {submitStatus.message && (
              <div
                className={`p-4 mb-4 rounded-lg flex items-center justify-between ${
                  submitStatus.success === null
                    ? 'bg-yellow-100 border border-yellow-500 text-yellow-700'
                    : submitStatus.success
                    ? 'bg-green-100 border border-green-500 text-green-700'
                    : 'bg-red-100 border border-red-500 text-red-700'
                }`}
              >
                <div className="flex items-center">
                  <svg
                    className={`w-6 h-6 mr-2 ${
                      submitStatus.success === null
                        ? 'text-yellow-500'
                        : submitStatus.success
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {submitStatus.success === null ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ) : submitStatus.success ? (
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
                <button
                  onClick={() => setSubmitStatus({ success: null, message: null })}
                  className="text-sm underline focus:outline-none"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`py-3 px-8 rounded-full text-xl font-semibold tracking-wide text-white ${
                  isSubmitting
                    ? 'bg-orange-400 cursor-not-allowed'
                    : 'bg-orange-600 btn-hover'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HeritageForm;
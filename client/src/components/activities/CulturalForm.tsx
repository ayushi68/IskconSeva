import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface CulturalFormInputs {
  registrationId: string;
  childName: string;
  dob: string;
  gender: string;
  classGroup: string;
  schoolName: string;
  GuardianName: string;
  GuardianPhone: string;
  GuardianOccupation: string;
  address: string;
  landline: string;
  mobile: string;
  email: string;
  referralSource: string;
  attendedBefore: string;
  isClubMember: string;
  issues: string;
  module: string;
  regFeeMethod: string;
  transportFeeArea: string;
  acceptTerms: boolean;
}

const generateRegistrationId = (): string => {
  const date = new Date();
  const dateString = date.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD (e.g., 20250530)
  const randomString = Math.random().toString(36).substring(2, 6).toUpperCase(); // 4-character random string
  return `CULTURE-${dateString}-${randomString}`; // e.g., CULTURE-20250530-ABCD
};

const CulturalForm: React.FC = () => {
  const [registrationPaymentStatus, setRegistrationPaymentStatus] = useState<string>('pending');
  const [transportPaymentStatus, setTransportPaymentStatus] = useState<string>('pending');
  const [regTxnId, setRegTxnId] = useState<string>('');
  const [transTxnId, setTransTxnId] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean | null;
    message: string | null;
  }>({ success: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CulturalFormInputs>({
    defaultValues: {
      acceptTerms: false,
      registrationId: '',
    },
  });

  useEffect(() => {
    // Generate registrationId on component mount
    const newRegistrationId = generateRegistrationId();
    setValue('registrationId', newRegistrationId);
  }, [setValue]);

  const registrationId = watch('registrationId');

  const handlePayment = (type: 'registration' | 'transport') => {
    const amount = type === 'registration' ? 400 : 300;
    alert(`Initiating payment of Rs ${amount} for ${type} fees via payment gateway...`);
    setTimeout(() => {
      if (type === 'registration') {
        setRegistrationPaymentStatus('completed');
        setRegTxnId('SIMULATED_REG_TXN');
      } else {
        setTransportPaymentStatus('completed');
        setTransTxnId('SIMULATED_TRANS_TXN');
      }
      alert(`Payment of Rs ${amount} for ${type} fees completed successfully!`);
    }, 1000);
  };

  const onSubmit: SubmitHandler<CulturalFormInputs> = async (data) => {
    if (!data.acceptTerms) {
      setSubmitStatus({ success: false, message: 'You must agree to the terms and conditions.' });
      return;
    }

    if (registrationPaymentStatus !== 'completed') {
      setSubmitStatus({ success: false, message: 'Please complete the Registration Fees payment.' });
      return;
    }

    const attemptSubmission = async (attempt: number = 1, maxAttempts: number = 3) => {
      setSubmitStatus({ success: null, message: null });

      try {
        const formData = new FormData();
        formData.append('registrationId', data.registrationId);
        formData.append('childName', data.childName);
        formData.append('dob', data.dob);
        formData.append('gender', data.gender);
        formData.append('classGroup', data.classGroup || '');
        formData.append('schoolName', data.schoolName);
        formData.append('GuardianName', data.GuardianName || '');
        formData.append('GuardianPhone', data.GuardianPhone || '');
        formData.append('GuardianOccupation', data.GuardianOccupation || '');
        formData.append('address', data.address || '');
        formData.append('landline', data.landline || '');
        formData.append('mobile', data.mobile);
        formData.append('email', data.email || '');
        formData.append('referralSource', data.referralSource || '');
        formData.append('attendedBefore', data.attendedBefore || '');
        formData.append('isClubMember', data.isClubMember || '');
        formData.append('issues', data.issues || '');
        formData.append('module', data.module);
        formData.append('regFeeMethod', data.regFeeMethod || 'Cash');
        formData.append('regTxnId', regTxnId);
        formData.append('transportFeeArea', data.transportFeeArea || '');
        formData.append('transTxnId', transTxnId || '');
        formData.append('acceptTerms', data.acceptTerms.toString());

        const response = await fetch('/api/cultural-form', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        if (response.ok) {
          setSubmitStatus({ success: true, message: result.message || 'Registration submitted successfully!' });
          reset();
          setRegistrationPaymentStatus('pending');
          setTransportPaymentStatus('pending');
          setRegTxnId('');
          setTransTxnId('');
          // Generate a new registrationId for the next submission
          setValue('registrationId', generateRegistrationId());
        } else {
          if (result.error.includes('Registration ID') && attempt < maxAttempts) {
            // Duplicate registrationId detected, regenerate and retry
            const newRegistrationId = generateRegistrationId();
            setValue('registrationId', newRegistrationId);
            setSubmitStatus({ success: null, message: `Retrying with new Registration ID (Attempt ${attempt + 1}/${maxAttempts})...` });
            await attemptSubmission(attempt + 1, maxAttempts);
          } else {
            setSubmitStatus({ success: false, message: result.error || 'Failed to submit registration' });
          }
        }
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: error instanceof Error ? error.message : 'Network error occurred',
        });
      }
    };

    await attemptSubmission();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 font-inter">
      <header className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756fd443d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15"></div>
        <h1 className="text-7xl font-extrabold relative z-10 animate-slide-in">
          Culture Camp Registration
        </h1>
        <p className="mt-4 text-2xl relative z-10 text-amber-100">Hare Krishna Movement, Bhilai</p>
      </header>
      <main className="max-w-6xl mx-auto p-8 space-y-16">
        <section className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Registration Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Registration ID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Registration ID *</label>
                <input
                  {...register('registrationId', { required: 'Registration ID is required' })}
                  className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 ${
                    errors.registrationId ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  readOnly
                />
                {errors.registrationId && (
                  <p className="text-red-500 text-sm mt-1">{errors.registrationId.message}</p>
                )}
              </div>
            </div>

            {/* Student Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Child's Name *</label>
                <input
                  {...register('childName', { required: 'Child\'s name is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.childName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter Full Name"
                />
                {errors.childName && (
                  <p className="text-red-500 text-sm mt-1">{errors.childName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Date of Birth *</label>
                <input
                  type="date"
                  {...register('dob', { required: 'Date of birth is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.dob ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Gender *</label>
                <select
                  {...register('gender', { required: 'Gender is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Class</label>
                <input
                  {...register('classGroup')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Class/Grade"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">School *</label>
                <input
                  {...register('schoolName', { required: 'School name is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.schoolName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter School Name"
                />
                {errors.schoolName && (
                  <p className="text-red-500 text-sm mt-1">{errors.schoolName.message}</p>
                )}
              </div>
            </div>

            {/* Parent Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Father's Name</label>
                <input
                  {...register('GuardianName')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Guardian's Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Father's Phone</label>
                <input
                  type="tel"
                  {...register('GuardianPhone', {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.GuardianPhone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter Phone Number"
                />
                {errors.GuardianPhone && (
                  <p className="text-red-500 text-sm mt-1">{errors.GuardianPhone.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Guardian's Occupation</label>
                <input
                  {...register('GuardianOccupation')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Occupation"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                <textarea
                  {...register('address')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Full Address"
                  rows={4}
                />
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Landline Number</label>
                  <input
                    type="tel"
                    {...register('landline')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter Landline Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    {...register('mobile', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number',
                      },
                    })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                    }`}
                    placeholder="Enter Mobile Number"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email ID</label>
                  <input
                    type="email"
                    {...register('email', {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                    }`}
                    placeholder="Enter Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  How did you come to know about Culture Camp?
                </label>
                <input
                  {...register('referralSource')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="E.g., Friend, Flyer, Social Media"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Have you attended Culture Camp before?
                </label>
                <select
                  {...register('attendedBefore')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Are you a Gopal Sakha Club member?
                </label>
                <select
                  {...register('isClubMember')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Any particular issues (Health/Psychology/Habits)
                </label>
                <textarea
                  {...register('issues')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter any relevant details"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Module *</label>
                <select
                  {...register('module', { required: 'Module is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.module ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                >
                  <option value="">Select Module</option>
                  <option value="Dance">Dance</option>
                  <option value="Dramatics">Dramatics</option>
                  <option value="Creative Arts">Creative Arts</option>
                </select>
                {errors.module && (
                  <p className="text-red-500 text-sm mt-1">{errors.module.message}</p>
                )}
              </div>
            </div>

            {/* Payment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Registration Fee (Rs 400/-) *
                </label>
                <div className="flex space-x-4 mb-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="UPI"
                      {...register('regFeeMethod')}
                      className="mr-2"
                      defaultChecked
                    />
                    UPI 
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Bank Transfer"
                      {...register('regFeeMethod')}
                      className="mr-2"
                    />
                    Bank Transfer
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => handlePayment('registration')}
                  disabled={registrationPaymentStatus === 'completed'}
                  className={`w-full p-3 rounded-lg text-white font-semibold ${
                    registrationPaymentStatus === 'completed'
                      ? 'bg-green-500 cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  {registrationPaymentStatus === 'completed'
                    ? 'Payment Completed'
                    : 'Pay Rs 400 via Payment Gateway'}
                </button>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Transport Fee (Rs 300/-)
                </label>
                <button
                  type="button"
                  onClick={() => handlePayment('transport')}
                  disabled={transportPaymentStatus === 'completed'}
                  className={`w-full p-3 rounded-lg text-white font-semibold ${
                    transportPaymentStatus === 'completed'
                      ? 'bg-green-500 cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  {transportPaymentStatus === 'completed'
                    ? 'Payment Completed'
                    : 'Pay Rs 300 via Payment Gateway'}
                </button>
                <label className="block text-gray-700 font-semibold mt-4 mb-2">
                  Transport Fee Area
                </label>
                <input
                  {...register('transportFeeArea')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                  placeholder="Enter Area"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">Terms and Conditions</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>The amount once paid shall not be refunded or transferred to other participants. Collect receipt on each payment.</li>
                <li>Cheque or DD should be drawn in favor of Hare Krishna Movement.</li>
                <li>Change of modules and change of batches are not allowed.</li>
                <li>Students are strictly advised not to carry mobiles or any valuables while participating in the camp.</li>
                <li>Students should report on time for the camp.</li>
                <li>Certificates will be issued based on attendance (90% or above).</li>
                <li>Pick up and drop points only at mutually convenient spots. For more details, please contact: 9039215222, 0788-2223699.</li>
              </ul>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  {...register('acceptTerms', { required: 'You must agree to the terms and conditions' })}
                  className={`mr-2 ${errors.acceptTerms ? 'border-red-500' : ''}`}
                />
                I agree to abide by the above-mentioned terms and conditions *
              </label>
              {errors.acceptTerms && (
                <p className="text-red-500 text-sm mt-1">{errors.acceptTerms.message}</p>
              )}
            </div>

            {/* Submission Status */}
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

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-600 text-white py-3 px-8 rounded-full btn-hover text-xl font-semibold tracking-wide disabled:bg-orange-400"
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

export default CulturalForm;
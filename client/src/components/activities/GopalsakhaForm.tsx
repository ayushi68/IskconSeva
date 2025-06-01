import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface GopalsakhaFormInputs {
  name: string;
  gender: string;
  contact: string;
  dob: string;
  classGroup: string;
  schoolName: string;
  address: string;
  center: string;
  bloodGroup: string;
  guardianName: string;
  guardianOccupation: string;
  guardianContact: string;
  guardianEmail: string;
  referralSource: string;
  issues: string;
  joiningDate: string;
  reason: string;
  regReceiptNo: string;
  transReceiptNo: string;
  regTxnFile: FileList;
  transTxnFile?: FileList;
}

const GopalsakhaForm: React.FC = () => {
  const [regTxnFilePreview, setRegTxnFilePreview] = useState<string | null>(null);
  const [transTxnFilePreview, setTransTxnFilePreview] = useState<string | null>(null);
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
    formState: { errors, isSubmitting },
  } = useForm<GopalsakhaFormInputs>();

  const regTxnFile = watch('regTxnFile');
  const transTxnFile = watch('transTxnFile');

  const handleFilePreview = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handlePayment = (type: 'registration' | 'transport') => {
    const amount = type === 'registration' ? 400 : 300;
    alert(`Initiating payment of Rs ${amount} for ${type} fees via payment gateway...`);
    setTimeout(() => {
      if (type === 'registration') {
        setRegistrationPaymentStatus('completed');
        setRegTxnId('SIMULATED_REG_TXN'); // Simulate transaction ID
      } else {
        setTransportPaymentStatus('completed');
        setTransTxnId('SIMULATED_TRANS_TXN'); // Simulate transaction ID
      }
      alert(`Payment of Rs ${amount} for ${type} fees completed successfully!`);
    }, 1000);
  };

  const onSubmit: SubmitHandler<GopalsakhaFormInputs> = async (data) => {
    if (registrationPaymentStatus !== 'completed') {
      setSubmitStatus({ success: false, message: 'Please complete the Registration Fees payment.' });
      return;
    }

    setSubmitStatus({ success: null, message: null });

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('gender', data.gender);
      formData.append('contact', data.contact);
      formData.append('dob', data.dob);
      formData.append('classGroup', data.classGroup);
      formData.append('schoolName', data.schoolName);
      formData.append('address', data.address);
      formData.append('center', data.center);
      formData.append('bloodGroup', data.bloodGroup);
      formData.append('guardianName', data.guardianName);
      formData.append('guardianOccupation', data.guardianOccupation || '');
      formData.append('guardianContact', data.guardianContact);
      formData.append('guardianEmail', data.guardianEmail);
      formData.append('referralSource', data.referralSource);
      formData.append('issues', data.issues);
      formData.append('joiningDate', data.joiningDate);
      formData.append('reason', data.reason || '');
      formData.append('regTxnId', regTxnId);
      formData.append('regReceiptNo', data.regReceiptNo || '');
      formData.append('transTxnId', transTxnId || '');
      formData.append('transReceiptNo', data.transReceiptNo || '');

      if (data.regTxnFile && data.regTxnFile.length > 0) {
        formData.append('regTxnFile', data.regTxnFile[0]);
      }
      if (data.transTxnFile && data.transTxnFile.length > 0) {
        formData.append('transTxnFile', data.transTxnFile[0]);
      }

      const response = await fetch('/api/gopal-form', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitStatus({ success: true, message: result.message || 'Registration submitted successfully!' });
        reset();
        setRegTxnFilePreview(null);
        setTransTxnFilePreview(null);
        setRegistrationPaymentStatus('pending');
        setTransportPaymentStatus('pending');
        setRegTxnId('');
        setTransTxnId('');
      } else {
        setSubmitStatus({ success: false, message: result.error || 'Failed to submit registration' });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Network error occurred',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 font-inter">
      <header className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756fd443d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15"></div>
        <h1 className="text-7xl font-extrabold relative z-10 animate-slide-in">
          Gopal Sakha Registration
        </h1>
        <p className="mt-4 text-2xl relative z-10 text-amber-100">Hare Krishna Movement, Bhilai</p>
      </header>
      <main className="max-w-6xl mx-auto p-8 space-y-16">
        <section className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">
            Gopal Sakha Club Registration Form (गोपाल सखा क्लब पंजीकरण फॉर्म)
          </h2>
          <div className="mb-8 text-gray-700">
            <p className="mb-4">
              The quality of children's lives and character is a major concern for parents. Children take their experiences into their hearts, and these experiences form their character. Without proper character, knowledge can be destructive to self and society. The aim of Gopal Sakha Club is to provide a loving environment where students are nourished with care and devotion. We look forward to serving your children, providing them with a Krishna conscious education, and most of all helping them along the path to Krishna Bhakti.
            </p>
            <p className="mb-4">
              बच्चों के जीवन और चरित्र की गुणवत्ता माता-पिता के लिए एक प्रमुख चिंता का विषय है। बच्चे अपने अनुभवों को अपने दिलों में बसाते हैं और ये अनुभव उनके चरित्र का निर्माण करते हैं। उचित चरित्र के बिना ज्ञान स्वयं और समाज के लिए विनाशकारी हो सकता है। गोपाल सखा क्लब का उद्देश्य एक प्रेमपूर्ण वातावरण प्रदान करना है जहां छात्रों को देखभाल और भक्ति से पोषित किया जाता है। हम आपके बच्चों की सेवा करने, उन्हें कृष्णभावनामृत शिक्षा प्रदान करने और सबसे बढ़कर कृष्ण भक्ति के मार्ग पर उनकी मदद करने के लिए तत्पर हैं।
            </p>
            <p className="font-semibold">We will help your children:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Inculcate values</li>
              <li>Develop Character</li>
              <li>Learn about Vaishnav Cultural Heritage</li>
              <li>Establish relationship with God</li>
              <li>Learn Gita & other scriptures and apply the realizations in their day-to-day lives</li>
              <li>Create a long term and natural attachment for serving one and all</li>
            </ul>
            <p className="font-semibold">हम आपके बच्चों की मदद करेंगे:</p>
            <ul className="list-disc list-inside mb-4">
              <li>मूल्यों को विकसित करें</li>
              <li>चरित्र का विकास करें</li>
              <li>वैष्णव सांस्कृतिक विरासत के बारे में जानें</li>
              <li>भगवान के साथ संबंध स्थापित करें</li>
              <li>गीता और अन्य धर्मग्रंथों को सीखें और उनकी अनुभूतियों को अपने दैनिक जीवन में लागू करें</li>
              <li>सभी की सेवा के लिए दीर्घकालिक और स्वाभाविक लगाव बनाएं</li>
            </ul>
            <p className="font-semibold">Highlights:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Mantra Meditation, Games & Activities, Vedic Stories</li>
              <li>Bhagavad Gita Slokas Memorization and Pronunciation, Interactive Sessions</li>
              <li>Darshan, Kirtan, Videos, Quiz, Sumptuous Prasadam</li>
            </ul>
            <p className="font-semibold">मुख्य अंश:</p>
            <ul className="list-disc list-inside mb-4">
              <li>मंत्र ध्यान, खेल और गतिविधियाँ, वैदिक कहानियाँ</li>
              <li>भगवद गीता श्लोक स्मरण और उच्चारण, इंटरैक्टिव सत्र</li>
              <li>दर्शन, कीर्तन, वीडियो, प्रश्नोत्तरी, शानदार प्रसादम</li>
            </ul>
            <p><strong>Age Criteria:</strong> 6 years to 16 years</p>
            <p><strong>Dates:</strong> Every Sunday</p>
            <p><strong>Time:</strong> 7:30 AM to 10:30 AM</p>
            <p><strong>Classes:</strong> Junior (Nursery to Class IV), Senior (Class V to Class X)</p>
            <p><strong>Venue:</strong> Hare Krishna Movement, Akshaya Patra Campus, Sector - 6, Bhilai</p>
            <p><strong>Fees:</strong> Registration Fees: Rs 400/- (one time), Tuition Fees: Rs 200/- (per month), Transportation Fees: Rs 300/- (per month)</p>
            <p><strong>Contact:</strong> 90392 15222, 0788 - 2284699 (Bhilai)</p>
            <p><strong>Email:</strong> ayushisamaddar55@gmail.com</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Student Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name (नाम) *</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter Full Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Gender (लिंग) *</label>
                <select
                  {...register('gender', { required: 'Gender is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Contact Number (संपर्क नंबर) *</label>
                <input
                  {...register('contact', {
                    required: 'Contact number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.contact ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter 10-digit number"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Date of Birth (जन्म तिथि) *</label>
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
                <label className="block text-gray-700 font-semibold mb-2">Class (कक्षा) *</label>
                <select
                  {...register('classGroup', { required: 'Class is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.classGroup ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
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
                {errors.classGroup && (
                  <p className="text-red-500 text-sm mt-1">{errors.classGroup.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">School Name (स्कूल के नाम) *</label>
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

            {/* Address and Center */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Address (पता) *</label>
                <textarea
                  {...register('address', { required: 'Address is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.address ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter Full Address"
                  rows={4}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Center (केंद्र) *</label>
                <select
                  {...register('center', { required: 'Center is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.center ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                >
                  <option value="">Select Center</option>
                  <option value="Bhilai">Bhilai</option>
                  <option value="Raipur">Raipur</option>
                </select>
                {errors.center && (
                  <p className="text-red-500 text-sm mt-1">{errors.center.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Blood Group (रक्त समूह) *</label>
                <select
                  {...register('bloodGroup', { required: 'Blood group is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.bloodGroup ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
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
                {errors.bloodGroup && (
                  <p className="text-red-500 text-sm mt-1">{errors.bloodGroup.message}</p>
                )}
              </div>
            </div>

            {/* Guardian Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Father's/Mother's/Guardian's Name (पिता/माता/अभिभावक का नाम) *
                </label>
                <input
                  {...register('guardianName', { required: 'Guardian name is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.guardianName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter Name"
                />
                {errors.guardianName && (
                  <p className="text-red-500 text-sm mt-1">{errors.guardianName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Father's/Mother's/Guardian's Occupation (पिता/माता/अभिभावक का व्यवसाय)
                </label>
                <input
                  {...register('guardianOccupation')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Occupation"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Father's/Mother's/Guardian's Contact Number (पिता/माता/अभिभावक का संपर्क नंबर) *
                </label>
                <input
                  {...register('guardianContact', {
                    required: 'Guardian contact number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.guardianContact ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter 10-digit number"
                />
                {errors.guardianContact && (
                  <p className="text-red-500 text-sm mt-1">{errors.guardianContact.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Father's/Mother's/Guardian's Email-ID (पिता/माता/अभिभावक की ईमेल-आईडी) *
                </label>
                <input
                  {...register('guardianEmail', {
                    required: 'Guardian email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.guardianEmail ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter Email Address"
                />
                {errors.guardianEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.guardianEmail.message}</p>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  How did you come to know about Gopal Sakha? (आपको गोपाल सखा के बारे में कैसे पता चला?) *
                </label>
                <input
                  {...register('referralSource', { required: 'This field is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.referralSource ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="E.g., Friend, Flyer, Social Media"
                />
                {errors.referralSource && (
                  <p className="text-red-500 text-sm mt-1">{errors.referralSource.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Any particular issues (Health/Psychology/Habits) (कोई विशेष मुद्दा - स्वास्थ्य/मनोविज्ञान/आदतें) *
                </label>
                <textarea
                  {...register('issues', { required: 'This field is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.issues ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter any relevant details"
                  rows={4}
                />
                {errors.issues && (
                  <p className="text-red-500 text-sm mt-1">{errors.issues.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Date of Joining (शामिल होने की तिथि) *
                </label>
                <input
                  type="date"
                  {...register('joiningDate', { required: 'Date of joining is required' })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.joiningDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                />
                {errors.joiningDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.joiningDate.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Reason for Joining Gopal Sakha Club (गोपाल सखा क्लब में शामिल होने का कारण)
                </label>
                <textarea
                  {...register('reason')}
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
                  Registration Fees (पंजीकरण शुल्क) - Rs 400/- *
                </label>
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
                <label className="block text-gray-700 font-semibold mt-4 mb-2">
                  Registration Transaction File (पंजीकरण लेनदेन फ़ाइल) *
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif,application/pdf"
                  {...register('regTxnFile', { required: 'Registration transaction file is required' })}
                  onChange={(e) => handleFilePreview(e, setRegTxnFilePreview)}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.regTxnFile ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
                  }`}
                />
                {errors.regTxnFile && (
                  <p className="text-red-500 text-sm mt-1">{errors.regTxnFile.message}</p>
                )}
                {regTxnFilePreview && (
                  <div className="mt-4">
                    <img
                      src={regTxnFilePreview}
                      alt="Registration Transaction Preview"
                      className="max-w-xs h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
                <label className="block text-gray-700 font-semibold mt-4 mb-2">
                  Receipt Number (Cash Payment) (रसीद संख्या - नकद भुगतान)
                </label>
                <input
                  {...register('regReceiptNo')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Receipt Number if paid in cash"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Transportation Fees (परिवहन शुल्क) - Rs 300/-
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
                  Transportation Transaction File (परिवहन लेनदेन फ़ाइल)
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif,application/pdf"
                  {...register('transTxnFile')}
                  onChange={(e) => handleFilePreview(e, setTransTxnFilePreview)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {transTxnFilePreview && (
                  <div className="mt-4">
                    <img
                      src={transTxnFilePreview}
                      alt="Transportation Transaction Preview"
                      className="max-w-xs h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
                <label className="block text-gray-700 font-semibold mt-4 mb-2">
                  Receipt Number (Cash Payment) (रसीद संख्या - नकद भुगतान)
                </label>
                <input
                  {...register('transReceiptNo')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Receipt Number if paid in cash"
                />
              </div>
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

export default GopalsakhaForm;
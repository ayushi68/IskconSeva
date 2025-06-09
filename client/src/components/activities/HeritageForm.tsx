import { useState, useEffect } from 'react';

// Define the HeritageForm component
const HeritageForm: React.FC = () => {
  // Initialize form state with all fields
  const [formData, setFormData] = useState<{
    registrationId: string;
    name: string;
    gender: string;
    dateOfBirth: string;
    category: string;
    contactNumber: string;
    email: string;
    address: string;
    schoolName: string;
    customSchoolName: string;
    guardianName: string;
    guardianContactNumber: string;
    activities: string[];
    regTxnId: string;
  }>({
    registrationId: '',
    name: '',
    gender: '',
    dateOfBirth: '',
    category: '',
    contactNumber: '',
    email: '',
    address: '',
    schoolName: '',
    customSchoolName: '',
    guardianName: '',
    guardianContactNumber: '',
    activities: [],
    regTxnId: '',
  });

  const [registrationPaymentStatus, setRegistrationPaymentStatus] = useState<string>('pending');
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean | null;
    message: string | null;
  }>({ success: null, message: null });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showCustomSchoolInput, setShowCustomSchoolInput] = useState<boolean>(false);

  // List of schools
  const schools = [
    "Geetanjali Sangeet Kala Vidyalaya, Civil Lines, Durg",
    "Foundation Kinder Garden, Nehru Nagar, Bhilai",
    "English Medium Middle School, Sector - 10, Bhilai",
    "Vinayak Public School, Risali, Bhilai",
    "Sri Shankaracharya Vidyalaya, Sector - 10, Bhilai",
    "English Medium Middle School, Sector-10, Bhilai",
    "Senior Secondary School, Sector-10, Bhilai",
    "Maa Sharada Vidyalaya, Sector - 10, Bhilai",
    "English Medium Middle School, Ruabhandha, Bhilai",
    "St. Thomas Senior Secondary School, Ruabandha, Bhilai",
    "Delhi Public School, Risali, Bhilai",
    "Maitri Vidya Niketan, Risali, Bhilai",
    "Sharda Vidyalaya, Risali, Bhilai",
    "Modern Public School Maitrinagar, Risali, Bhilai",
    "Joy Foundation, Maitri Nagar, Risali",
    "English Medium Middle School, Maroda, Bhilai",
    "Bhilai Public School, Maroda, Bhilai",
    "Deepshikha Public School, Utai",
    "Krishna Public School, Utai",
    "Bhilai Nair Samajam, Sector - 8 bhilai",
    "Sri Satya Sai Higher Secondary School, Sector-8, Bhilai",
    "English Medium Middle School, Sector-9, Bhilai",
    "Senior Secondary School, Sector - 9, Bhilai",
    "Angel Valley School, Hudco, Bhilai",
    "Amdi Niketan Vidyalaya, Hudco, Bhilai",
    "DAV, Hudco, Bhilai",
    "Sri Shankaracharya Vidyalaya, Hudco, Bhilai",
    "Senior Secondary School, Sector-7, Bhilai",
    "Kalyan P.G College, Bhilai",
    "English Medium Middle School, Sector -7, Bhilai",
    "M.G.M. School, Sector-6 Bhilai",
    "Maharshi Dayanand Arya Vidyalaya, Sector - 6 Bhilai",
    "Galibh Mem School, Sector-6 Bhilai",
    "Gurunanak English Medium School, Sector-6 Bhilai",
    "Bhilai Ispat Vidyalaya Sector-6, Bhilai",
    "English Medium Middle School Sector -5 Bhilai",
    "Saraswati Sishu Mandir, Sector-4, Bhilai",
    "S.N.G Vidya Bhavan, Sector - 4, Bhilai",
    "Senior Secondary School, Sector - 4, Bhilai",
    "English Medium Middle School, Sector - 4, Bhilai",
    "Bhilai Vidyalaya, Sector-2, Bhilai",
    "Vivekanada Vidayalaya, Sector-2, Bhilai",
    "English Medium Middle School, Sector - 2, Bhilai",
    "English Medium Middle School, Sector - 1, Bhilai",
    "Forebell's Public School, Khursipar",
    "Jyoti Vidyalaya, Charoda",
    "Sharda Vidyalaya, No-1 Vaishali Nagar, Bhilai",
    "Shakuntala Vidyalaya, Ramnagar, Bhilai",
    "Shiva Public School, Radhika Nagar, Bhilai",
    "Nalanda School, Industrial Area, Jamul, Bhilai",
    "DAV Public School, Jamul, Bhilai",
    "Indian Public School, Jamul, Bhilai",
    "Milestone, Junwani (Junior), Bhilai",
    "Delhi Public School, Junwani, Durg",
    "Milestone, Junwani (Senior), Bhilai",
    "Happy Public School, Shanti Nagar, Bhilai",
    "Mar Baselos Vidya Bhavan, Shanti Nagar, Bhilai",
    "St. Xavier School, Shanti Nagar, Bhilai",
    "Indu IT School, Kokha, Bhilai",
    "Rungta Public School, Kohka, Bhilai",
    "M.J. School, Kohka, Bhilai",
    "Kamla Public School, Camp-2, Bhilai",
    "S.G.M Public School, Camp -2, Bhilai",
    "Radhana Public School Camp-2, Surya Nagar, Bhilai",
    "K.D. International School, Kailash Nagar, Jamul Bhilai",
    "Krishna Public School, Nehru Nagar, Bhilai",
    "Saraswati Sishu Mandir, Nehru Nagar, Bhilai",
    "Maharshi Vidya Mandir, Smriti Nagar, Bhilai",
    "Heritage. International School Bypass, Durg",
    "Dream Indias School, Durg",
    "Shree Mahaveer Jain Public School, Sikshak Nagar, Durg",
    "Vishwadeep Senior Secondary School, Padamnabhpur, Durg",
    "Khalsa Public School, Durg",
    "APS, Dhanora Road, Bhilai",
    "Krishna Public School, Sundar Nagar, Durg",
    "Kendriya Vidyalaya, Durg",
    "K.H. Memorial School, Jawhar Nagar Durg",
    "Delhi Public School, Durg",
    "Sarsaswati Vidya Peeth, No-1, Sankar Nagar Durg",
    "Bhat Khande Sangeet Shiksha Kendra Durg",
    "Saraswati M.S. School, Durg",
    "Dayanand Girls School, Durg",
    "DAV Model School, Durg",
    "Krishna Public School, Sindhya Nagar, Durg",
    "Dev Sansakrit School, Chikhali, Dhamdha Road, Durg",
    "Krishna Public School, Pulgaon, Durg",
    "Sun Public School, Chandkhuri",
    "Yugantar Public School, Rajnandgaon",
    "Delhi Public School, Rajnandgaon",
    "Neeraj Public School, Rajnandgaon",
    "Sanskar International School, Rajnandgaon",
    "JLM Gayatri Vidya Peeth CG English Medium, Kailash Nagar, Rajnandgaon",
    "Wesleyan English medium h.s. School, Tanka Para, Rajnandgaon",
    "Weidner Memorial English Medium Senior Secondary School, Lal bagh Rajnandgaon",
    "Bal Bharti Public School, Baldeo Bagh, Rajnandgaon",
    "Shri Gurunanak Higher Secondary School, Anupam nagar, Rajnandgaon",
    "J.M.J. Navjeevan School, Basantpur, Rajnadgaon",
    "Gujrati Higher Secondary School, Basantpur Rajnandgaon",
    "Krishna Public School, Rajnandgaon",
    "Sanskar City International School, Basantpur Rajnandgaon",
    "Neeraj Bajpayee International School, Bori Rajnandgaon",
    "NEERAJ PARENTS PRIDE School, Baldeo Bagh Rajnandgaon",
    "Kendriya Vidyalaya, Pendri Rajnandgaon",
    "Durga Vidyalay, Power House, Bhilai",
    "Vivekanand Sanskar Public School, Chhuikhadan",
    "JLM Public School, Gunderdehi",
    "Sky Internation School, Dhamdha",
    "Rise N Shine School, Dhamdha",
    "Good Shefferd Higher Secondary School, Dhamdha",
    "Gyan Public School, Bhilai -3",
    "Shiva Public School, Bhilai-3",
    "Mansarovar English Medium School, Janjgir",
    "Shalini Convent School, Raigarh",
    "Century Cement Senior Secondary School, Baikunth",
    "FOUNDATION KINDERGARTEN, HUDCO, BHILAI",
    "FOUNDATION KINDERGARTEN, NEHRU NAGAR, BHILAI",
    "FOUNDATION KINDERGARTEN, RISALI, BHILAI",
    "BUMBLE BEE PRE SCHOOL, NEHRU NAGAR, BHILAI",
    "EUROKIDS, SMRITI NAGAR BHILAI",
    "EUROKIDS, RISALI, BHILAI",
    "FIRSTCRY INTELLITOTS, NEHRU NAGAR, BHILAI",
    "JOY FOUNDATION, RISALI, BHILAI",
    "ANGEL VALLY SCHOOL, HUDCO, BHILAI",
    "DAKSH STEPPING STONE, VAISHALI NAGAR, BHILAI",
    "SCRIBBLE PRE SCHOOL, PADMANABHPUR, DURG",
    "MILE STONE ACADEMY, JUNWANI, DURG",
    "THE FIRST STEP NURSERY SCHOOL, PADMANABHPUR, DURG",
    "STEPPING STONE SCHOOL, PADMANABHPUR, DURG",
    "CAMBRIDGE MONTESSORI PRESCHOOL, NEHRU NAGAR, BHILAI",
    "LITTLE MEADOWS SCHOOL, DURG",
    "HELLO KIDS - BUNNY SUNNY PRE SCHOOL, PADMANABHPUR, DURG",
    "APOLLO KINDERGARTEN SCHOOL, SUBHAS NAGAR, DURG",
    "MAPLE BEAR CANADIAN PRE SCHOOL, ADARSH NAGAR, DURG",
    "RUNGTA PLAY SCHOOL, MALVIYA NAGAR, DURG",
    "ORCHID PLAY SCHOOL, PANCHSHEEL NAGAR, DURG",
    "SHANTI JUNIOR PRE SCHOOL, SMRITI NAGAR, BHILAI",
    "LITTLE MILLENNIUM SCHOOL, NEHRU NAGAR, BHILAI",
    "SHAMROKK CHILD GLORY, UMDA ROAD",
    "KIDZEE, SHANTI NAGAR, BHILAI",
    "BLUE BELL SCHOOL, SECTOR-6, BHILAI",
    "ROYAL KIDS CONVENT, RAJNANDGAON",
    "BACHPAN PLAY SCHOOL, RAJNANDGAON",
    "LITTLE ICONS PLAY SCHOOL, RISALI, BHILAI",
    "LITTLE MILLENNIUM SCHOOL, VAISHALI NAGAR, BHILAI",
    "FIRSTCRY INTELLITOTS AADARSH NAGAR, DURG",
    "FIRSTCRY INTELLITOTS, RAJNANDGAON",
    "JUNIOR'S PLANET PRE SCHOOL, SMRITI NAGAR, BHILAI",
    "TWINKLE KIDS SCHOOL, MOHAN NAGAR, DURG",
    "Other",
  ];

  // List of categories
  const categories = [
    { code: 'A', label: 'Nursery' },
    { code: 'B', label: 'Class 1 to Class 4' },
    { code: 'C', label: 'Class 5 to Class 7' },
    { code: 'D', label: 'Class 8 to Class 10' },
    { code: 'E', label: 'Class 11 and Class 12' },
    { code: 'F', label: 'Above 18+ ages (Open to all)' },
    { code: 'S', label: 'Solo Participant' },
    { code: 'G', label: 'Group Participants' },
  ];

  // Activities by category
  const activitiesByCategory = {
    A: [
      'Light Dance',
      'Coloring',
      'Puranic Costumes',
      'Rhymes',
      'Story Telling',
      'Gita Sloka Chanting',
      'Instrumental Music (Keyboard)',
      'Instrumental Music (Percussion)',
      'Vocal Music (Hindustani-Classical)',
    ],
    B: [
      'Bharatnatyam',
      'Classical Dance Others',
      'Light Dance',
      'Coloring',
      'Painting',
      'Pencil Shading',
      'Cookery',
      'Flower Decoration',
      'Rangoli',
      'Salad Decoration',
      'Puranic Costumes',
      'Essay Writing English',
      'Essay Writing Hindi',
      'Rhymes',
      'Story Telling',
      'Gita Sloka Chanting',
      'Instrumental Music (Keyboard)',
      'Instrumental Music (Percussion)',
      'Vocal Music (Hindustani-Classical)',
    ],
    C: [
      'Bharatnatyam',
      'Classical Dance Others',
      'Semi Classical Dance',
      'Coloring',
      'Painting',
      'Pencil Shading',
      'Canvas Painting',
      'Cookery',
      'Flower Decoration',
      'Rangoli',
      'Salad Decoration',
      'Essay Writing English',
      'Essay Writing Hindi',
      'Story Telling',
      'Gita Sloka Chanting',
      'Instrumental Music (Keyboard)',
      'Instrumental Music (Percussion)',
      'Vocal Music (Hindustani-Classical)',
    ],
    D: [
      'Bharatnatyam',
      'Classical Dance Others',
      'Semi Classical Dance',
      'Painting',
      'Pencil Shading',
      'Canvas Painting',
      'Cookery',
      'Flower Decoration',
      'Rangoli',
      'Salad Decoration',
      'Essay Writing English',
      'Essay Writing Hindi',
      'Story Telling',
      'Gita Sloka Chanting',
      'Instrumental Music (Keyboard)',
      'Instrumental Music (Percussion)',
      'Vocal Music (Hindustani-Classical)',
    ],
    E: [
      'Bharatnatyam',
      'Classical Dance Others',
      'Semi Classical Dance',
      'Painting',
      'Pencil Shading',
      'Canvas Painting',
      'Cookery',
      'Flower Decoration',
      'Rangoli',
      'Salad Decoration',
      'Gita Sloka Chanting',
      'Instrumental Music (Keyboard)',
      'Instrumental Music (Percussion)',
      'Vocal Music (Hindustani-Classical)',
    ],
    F: [
      'Classical Dance Others',
      'Semi Classical Dance',
      'Light Dance',
      'Painting',
      'Pencil Shading',
      'Canvas Painting',
      'Rangoli',
      'Puranic Costumes',
      'Vocal Music (Hindustani-Classical)',
    ],
    S: [
      'Bharatnatyam',
      'Classical Dance Others',
      'Semi Classical Dance',
      'Light Dance',
      'Coloring',
      'Painting',
      'Pencil Shading',
      'Canvas Painting',
      'Cookery',
      'Flower Decoration',
      'Rangoli',
      'Salad Decoration',
      'Puranic Costumes',
      'Essay Writing English',
      'Essay Writing Hindi',
      'Rhymes',
      'Story Telling',
      'Gita Sloka Chanting',
      'Instrumental Music (Keyboard)',
      'Instrumental Music (Percussion)',
      'Vocal Music (Hindustani-Classical)',
    ],
    G: [
      'Bharatnatyam',
      'Classical Dance Others',
      'Semi Classical Dance',
      'Light Dance',
      'Coloring',
      'Painting',
      'Pencil Shading',
      'Canvas Painting',
      'Cookery',
      'Flower Decoration',
      'Rangoli',
      'Salad Decoration',
      'Puranic Costumes',
      'Essay Writing English',
      'Essay Writing Hindi',
      'Rhymes',
      'Story Telling',
      'Gita Sloka Chanting',
      'Instrumental Music (Keyboard)',
      'Instrumental Music (Percussion)',
      'Vocal Music (Hindustani-Classical)',
    ],
  };

  // Generate unique registration ID
  const generateRegistrationId = (): string => {
    const date = new Date();
    const dateString = date.toISOString().slice(0, 10).replace(/-/g, '');
    const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `HERITAGE-${dateString}-${randomString}`;
  };

  // Set initial registration ID on component mount
  useEffect(() => {
    const newRegistrationId = generateRegistrationId();
    setFormData((prev) => ({ ...prev, registrationId: newRegistrationId }));
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      if (name === 'schoolName') {
        setShowCustomSchoolInput(value === 'Other');
        if (value !== 'Other') {
          updatedData.customSchoolName = '';
        }
      }
      if (name === 'category') {
        updatedData.activities = [];
      }
      return updatedData;
    });
  };

  // Handle activity checkbox changes
  const handleActivityChange = (activity: string) => {
    setFormData((prev) => {
      const activities = prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity];
      return { ...prev, activities };
    });
  };

  // Handle payment simulation
  const handlePayment = () => {
    const amount = 500;
    setSubmitStatus({
      success: null,
      message: `Initiating payment of Rs ${amount}...`,
    });
    setTimeout(() => {
      const txnId = `TXN-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      setRegistrationPaymentStatus('completed');
      setFormData((prev) => ({ ...prev, regTxnId: txnId }));
      setSubmitStatus({
        success: true,
        message: `Payment of Rs ${amount} completed successfully!`,
      });
    }, 1000);
  };

  // Handle form submission
const [error, setError] = useState<string | null>(null);
const [success, setSuccess] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setSuccess(null);
  setIsSubmitting(true);

  // Prepare the data to send
  const submissionData = {
    registrationId: formData.registrationId,
    name: formData.name,
    gender: formData.gender,
    dateOfBirth: formData.dateOfBirth,
    category: formData.category,
    contactNumber: formData.contactNumber,
    email: formData.email,
    address: formData.address,
    schoolName: formData.schoolName === 'Other' ? formData.customSchoolName : formData.schoolName,
    guardianName: formData.guardianName,
    guardianContactNumber: formData.guardianContactNumber,
    activities: formData.activities,
    regTxnId: formData.regTxnId,
  };

  // Basic validation
  if (!submissionData.regTxnId) {
    setError('Please complete the registration payment');
    setIsSubmitting(false);
    return;
  }

  if (submissionData.activities.length === 0) {
    setError('Please select at least one activity');
    setIsSubmitting(false);
    return;
  }

  try {
    const response = await fetch('/api/heritage-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit registration');
    }

    setSuccess(result.message || 'Registration submitted successfully!');
    
    // Reset form
    setFormData({
      registrationId: generateRegistrationId(),
      name: '',
      gender: '',
      dateOfBirth: '',
      category: '',
      contactNumber: '',
      email: '',
      address: '',
      schoolName: '',
      customSchoolName: '',
      guardianName: '',
      guardianContactNumber: '',
      activities: [],
      regTxnId: '',
    });
    setRegistrationPaymentStatus('pending');
    setShowCustomSchoolInput(false);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};

  // Log formData changes for debugging
  useEffect(() => {
    console.log('formData changed:', formData);
  }, [formData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 font-inter">
      <header className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756fd443d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15"></div>
        <h1 className="text-7xl font-extrabold relative z-10">Heritage Program Registration</h1>
        <p className="mt-4 text-2xl relative z-10 text-amber-100">Hare Krishna Movement, Bhilai</p>
      </header>
      <main className="max-w-6xl mx-auto p-8 space-y-16">
        <section className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">
            Heritage Program Registration Form (वैष्णव सांस्कृतिक विरासत कार्यक्रम पंजीकरण फॉर्म)
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="registrationId" className="block text-gray-700 font-semibold mb-2">
                  Registration ID *
                </label>
                <input
                  id="registrationId"
                  type="text"
                  name="registrationId"
                  value={formData.registrationId}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name (नाम) *
                </label>
                <input
                  id="name"
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
                <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">
                  Gender (लिंग) *
                </label>
                <select
                  id="gender"
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
                <label htmlFor="dateOfBirth" className="block text-gray-700 font-semibold mb-2">
                  Date of Birth (जन्म तिथि) *
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.code} value={cat.code}>
                      {cat.code} - {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="schoolName" className="block text-gray-700 font-semibold mb-2">
                  School Name (स्कूल के नाम) *
                </label>
                <select
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select School</option>
                  {schools.map((school) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                </select>
                {showCustomSchoolInput && (
                  <input
                    id="customSchoolName"
                    type="text"
                    name="customSchoolName"
                    value={formData.customSchoolName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter School Name"
                    required
                  />
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guardianName" className="block text-gray-700 font-semibold mb-2">
                  Guardian's Name (अभिभावक का नाम) *
                </label>
                <input
                  id="guardianName"
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Guardian's Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="guardianContactNumber" className="block text-gray-700 font-semibold mb-2">
                  Guardian's Contact Number (अभिभावक का संपर्क नंबर) *
                </label>
                <input
                  id="guardianContactNumber"
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
            </div>
            {formData.category && activitiesByCategory[formData.category as keyof typeof activitiesByCategory] ? (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Select Activities (गतिविधियाँ चुनें) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activitiesByCategory[formData.category as keyof typeof activitiesByCategory].map((activity) => (
                    <label key={activity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.activities.includes(activity)}
                        onChange={() => handleActivityChange(activity)}
                        className="mr-2 h-5 w-5"
                      />
                      {activity}
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Please select a category to view activities.</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                  Address (पता) *
                </label>
                <textarea
                  id="address"
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
                  <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">
                    Contact Number (संपर्क नंबर) *
                  </label>
                  <input
                    id="contactNumber"
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
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email ID (ईमेल-आईडी) *
                  </label>
                  <input
                    id="email"
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
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">For Any Queries, Please Contact:</h3>
              <p className="text-gray-700">
                <strong>HARE KRISHNA MOVEMENT - BHILAI</strong><br />
                Akshaya Patra Campus, Sector - 6, Bhilai, Durg - 490006.<br />
                <strong>Phone:</strong> 0788 - 2285736<br />
                <strong>Mobile:</strong> 97550 98618, 90392 1522<br />
                <strong>Email:</strong> pvkdasa@gmail.com
              </p>
            </div>
            {submitStatus.message && (
              <div
                className={`p-4 rounded-lg flex items-center justify-between ${
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`py-3 px-8 rounded-full text-xl font-semibold text-white ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'
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
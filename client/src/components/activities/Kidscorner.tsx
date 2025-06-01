import { Link } from 'react-router-dom';

const KidsCorner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 font-poppins">
      <header className="bg-blue-700 text-white py-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598908315932-6a8c4e4f3786?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <h1 className="text-5xl font-bold relative z-10 animate-fade-in">Kids Corner</h1>
        <p className="mt-3 text-xl relative z-10 text-blue-100">Hare Krishna Movement, Bhilai</p>
      </header>
      <main className="max-w-5xl mx-auto p-8 space-y-16">
        <section className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Welcome to Kids Corner</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Join us at Hare Krishna Movement, Bhilai, for enriching experiences that nurture
            children's character and creativity through spiritual and cultural activities.
          </p>
          <img
            src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80"
            alt="Kids enjoying activities"
            className="mx-auto rounded-lg shadow-md h-64 object-cover"
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md card-hover">
            <img
              src="https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&w=500&q=80"
              alt="Gopal Sakha Club"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Gopal Sakha Club</h3>
            <p className="text-gray-600 mb-4">
              A nurturing environment to foster Krishna conscious education and character building.
            </p>
            <Link
              to="/GopalSakha"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md btn-hover"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md card-hover">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
              alt="Cultural Fest"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Cultural Fest</h3>
            <p className="text-gray-600 mb-4">
              A vibrant summer camp with slokas, stories, bhajans, crafts, and fun games.
            </p>
            <Link
              to="/CulturalFest"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md btn-hover"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md card-hover">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80"
              alt="Heritage Fest"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Heritage Fest</h3>
            <p className="text-gray-600 mb-4">
              A cultural carnival celebrating India's traditions with contests for all ages.
            </p>
            <Link
              to="/HeritageFest"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md btn-hover"
            >
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KidsCorner;
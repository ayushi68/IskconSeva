import React from 'react';

const Akshaypatra: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Akshaya Patra Foundation</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Feeding Underprivileged Children with Wholesome Meals
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">The Inexhaustible Vessel</h2>
          <p className="text-lg leading-relaxed mb-4">
            The “Akshaya Patra”, an inexhaustible glorious vessel, was awarded to Draupadi, the wife of the Pandavas, to feed many sages and saints during their exile. In today’s world, The Akshaya Patra Foundation, bearing this sacred name, has taken up the mission to feed underprivileged school children, living up to its legacy of boundless nourishment.
          </p>
          <p className="text-lg leading-relaxed">
            Inspired by Srila Prabhupada’s ardent desire that “No one within a 10-mile radius of an ISKCON temple should go hungry,” The Akshaya Patra Foundation began its operations in June 2000 in Bangalore, serving wholesome school lunches to 1,500 underprivileged children. Since then, it has grown into the world’s largest NGO-run Mid-Day Meal Program, earning success, awards, and recognition for its tireless efforts.
          </p>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Impact and Achievements</h2>
          <p className="text-lg leading-relaxed mb-4">
            The Akshaya Patra Foundation serves over 1.6 million children across more than 13,636 schools in twelve states, ensuring that children attend school daily to enjoy tempting, wholesome, and nutritious meals. The program’s impact is profound, encouraging education and alleviating hunger.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Awards and Recognition</h3>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Padma Shri Award to Chairman H G Madhu Pandit Dasa on the 67th Republic Day</li>
                <li>Heralded by President Barack Obama as “an imaginative approach” with global potential</li>
                <li>Winner of the 2009 Tech Award in the Education Category</li>
                <li>Top five finalist in the 2008 American Express Members Project</li>
                <li>Featured at the Clinton Global Initiative in 2007 and 2008</li>
                <li>Winner of the ICAI Gold Shield Award for best financial reporting</li>
                <li>2008 CNBC-TV India Business Leader Award for Social Enterprise of the Year</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Mega Kitchens</h3>
              <p className="text-lg">
                The Foundation’s mega kitchens are a marvel of innovation, equipped with state-of-the-art machinery. Chapati-making machines produce 60,000 chapatis per hour, and rice cookers prepare meals for 1,200 children in just 15 minutes. The advanced technology ensures food is cooked, stored, and delivered hot and fresh, earning admiration from government and private organizations alike.
              </p>
            </div>
          </div>
        </section>

        {/* Bhilai Operations */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Akshaya Patra in Bhilai</h2>
          <p className="text-lg leading-relaxed">
            The Akshaya Patra Foundation in Bhilai began its operations on [date to be filled] and has since been serving numerous schools every single school day. The cooking process starts as early as 2:30 AM, with workers tirelessly preparing meals with smiles, dedicated to serving school children far and wide. Through public-private partnerships, the Foundation aims to enhance its services, enabling more children to enjoy schooling with a peaceful mind and body.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-200 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Support Our Mission</h2>
          <p className="text-lg mb-4">
            Join us in our sacred mission to ensure no child goes hungry. Your support can help us feed more children and promote education through nourishment.
          </p>
          <p className="text-lg">
            For queries or to make a donation, contact us at: 
            <a href="tel:+919755098615" className="text-blue-600 hover:underline"> +91-97550 98615</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>The Akshaya Patra Foundation - Nourishing Minds, Feeding Futures</p>
      </footer>
    </div>
  );
};

export default Akshaypatra;
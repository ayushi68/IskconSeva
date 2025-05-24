import React from "react";

interface BlogPost {
  title: string;
  image: string;
  link: string;
  date?: string; // Added for recent blogs section
}

const blogPosts: BlogPost[] = [
  {
    title: "GLORIES OF EKADASHI",
    image: "/annadana.jpg",
    link: "#",
    date: "May 20, 2025",
  },
  {
    title: "GURU",
    image: "/cp1.jpg",
    link: "#",
    date: "May 18, 2025",
  },
  {
    title: "Q&A",
    image: "/dc2.jpg",
    link: "#",
    date: "May 15, 2025",
  },
  {
    title: "BHAKTI YOGA",
    image: "/festivalpuja.jpg",
    link: "#",
    date: "May 10, 2025",
  },
  {
    title: "DEVOTIONAL SERVICE",
    image: "Gaudiya1.jpg",
    link: "#",
    date: "May 5, 2025",
  },
  {
    title: "HARI KATHA",
    image: "Gaudiya2.jpg",
    link: "#",
    date: "April 30, 2025",
  },
  {
    title: "ACHARYA",
    image: "/np1.jpg",
    link: "#",
    date: "April 25, 2025",
  },
  {
    title: "KRISHNA CONSCIOUSNESS",
    image: "/np2.jpg",
    link: "#",
    date: "April 20, 2025",
  },
  {
    title: "TIRTHA YATRA",
    image: "/np3.jpg",
    link: "#",
    date: "April 15, 2025",
  },
  {
    title: "INVOCATION PRAYERS",
    image: "/np4.jpg",
    link: "#",
    date: "April 10, 2025",
  },
  {
    title: "RECIPES",
    image: "/np5.jpg",
    link: "#",
    date: "April 5, 2025",
  },
  {
    title: "VRATAS",
    image: "/np6.jpg",
    link: "#",
    date: "April 1, 2025",
  },
];

const Bloglp: React.FC = () => {
  // Get the 3 most recent blog posts (assuming sorted by date)
  const recentBlogs = blogPosts.slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-lg md:text-xl mb-6">
            Discover insights, updates, and inspiration on your spiritual journey.
          </p>
          <a
            href="#blogs"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-100 transition duration-300"
          >
            Explore Blogs
          </a>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentBlogs.map((post, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                <a
                  href={post.link}
                  className="text-indigo-600 mt-3 inline-block font-semibold hover:underline"
                >
                  → Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Blogs Section */}
      <section id="blogs" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">All Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                <a
                  href={post.link}
                  className="text-indigo-600 mt-3 inline-block font-semibold hover:underline"
                >
                  → Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bloglp;
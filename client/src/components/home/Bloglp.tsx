import React, { useState } from "react";

interface BlogPost {
  title: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "GLORIES OF EKADASHI",
    image: "/annadana.jpg",
    link: "#",
  },
  {
    title: "GURU",
    image: "/cp1.jpg",
    link: "#",
  },
  {
    title: "Q&A",
    image: "/dc2.jpg",
    link: "#",
  },
  {
    title: "BHAKTI YOGA",
    image: "/festivalpuja.jpg",
    link: "#",
  },
  {
    title: "DEVOTIONAL SERVICE",
    image: "Gaudiya1.jpg",
    link: "#",
  },
  {
    title: "HARI KATHA",
    image: "Gaudiya2.jpg",
    link: "#",
  },
  {
    title: "ACHARYA",
    image: "/np1.jpg",
    link: "#",
  },
  {
    title: "KRISHNA CONSCIOUSNESS",
    image: "/np2.jpg",
    link: "#",
  },
  {
    title: "TIRTHA YATRA",
    image: "/np3.jpg",
    link: "#",
  },
  {
    title: "INVOCATION PRAYERS",
    image: "/np4.jpg",
    link: "#",
  },
  {
    title: "RECIPES",
    image: "/np5.jpg",
    link: "#",
  },
  {
    title: "VRATAS",
    image: "/np6.jpg",
    link: "#",
  },
];

const Bloglp: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-10 bg-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Blogs</h2>
        <p className="text-gray-500 mt-2">Explore our latest insights and updates</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <a
                href={post.link}
                className="text-blue-500 mt-3 inline-block font-semibold"
              >
                → LEARN MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglp;


import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Photo Gallery",
    category: "Daily Darshan | Festivals | Events",
    image: "/annadana.jpg",
    link: "/Photo",
  },
  {
    title: "Video Gallery",
    category: "Video",
    image: "/download.jpg",
    link: "/Video",
  },
  {
    title: "Audio Gallery",
    category: "Audio",
    image: "/vigraha.jpg",
    link: "/Audio",
  },
  {
    title: "Media Downloads",
    category: "Calendar | Newsletter | Wallpaper",
    image: "/gaushala.jpg",
    link: "/MediaDownloads",
  },
];

const Media = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center pt-16 pb-12">
        <h2 className="uppercase text-blue-600 text-sm font-semibold tracking-widest mb-4">
          Media
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
          Medias
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          Dive into our latest outreach, spiritual, and community service initiatives. From sacred festivals to innovative digital seva, each project reflects ISKCON's mission to share Krishna consciousness with compassion and creativity.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group"
            >
              {/* Image Section */}
              <div className="relative h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-0 grayscale group-hover:scale-110"
                />
                {/* Arrow Icon */}
                <Link href={project.link}>
                  <a className="absolute top-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 hover:bg-blue-700">
                    <span className="text-white text-xl font-bold animate-pulse">↗</span>
                  </a>
                </Link>
              </div>

              {/* Text Section Overlapping Bottom of Image */}
              <div className="-mt-8 mx-4 bg-blue-800 text-white p-5 rounded-lg shadow-xl relative z-10">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm mt-2 text-blue-200">{project.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
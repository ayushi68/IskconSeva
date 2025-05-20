import React from "react";
import { Card } from "@/components/ui/card";

type Project = {
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Photo Gallery ",
    category: "Daily Darshan | Festivals | Events",
    image: "/annadana.jpg",
  },
  {
    title: "Video Gallery",
    category: "Video",
    image: "/download.jpg",
  },
  {
    title: "Audio Gallery ",
    category: "Audio",
    image: "/vigraha.jpg",
  },
  {
    title: "Media Downloads",
    category: "Calendar | Newsletter | Wallpaper ",
    image: "/gaushala.jpg",
  },
];

const Media = () => {
  return (
    <div className="px-4 sm:px-10 py-16 bg-white">
      {/* Header section */}
      <div className="text-center mb-10">
        <h2 className="uppercase text-blue-600 text-sm font-semibold tracking-wide mb-3">
          Media
        </h2>
        <h1 className="text-5xl font-black leading-none mb-6 text-black tracking-tight">
          Medias
        </h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto pb-6 border-b border-gray-200">
        Dive into our latest outreach, spiritual, and community service initiatives. From sacred festivals to innovative digital seva, each project reflects ISKCON's mission to share Krishna consciousness with compassion and creativity.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300">
            {/* Image section */}
            <div className="relative group h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:grayscale group-hover:scale-105"
              />

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">↗</span>
              </div>
            </div>

            {/* Text section overlapping bottom of image */}
            <div className="-mt-6 mx-4 bg-blue-800 text-white p-4 rounded-lg shadow-xl relative z-10">
              <div className="text-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm mt-1 text-blue-200">{project.category}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Media;

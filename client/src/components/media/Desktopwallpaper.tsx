import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const wallpapers2025 = [
  {
    month: "January 2025",
    title: "New Year Blessings",
    description: "Beautiful calendar featuring Krishna's winter patterns with devotional quotes.",
    resolution: "1920×1080",
    imageUrl: "/images/wallpapers/2025/jan.jpg",
  },
  {
    month: "February 2025",
    title: "Divine Love",
    description: "Radha Krishna theme celebrating divine love with February calendar dates.",
    resolution: "1920×1080",
    imageUrl: "/images/wallpapers/2025/feb.jpg",
  },
  {
    month: "March 2025",
    title: "Holi Festival",
    description: "Vibrant Holi celebration with Krishna playing with colors and spring calendar.",
    resolution: "1920×1080",
    imageUrl: "/images/wallpapers/2025/mar.jpg",
  },
];

const wallpapers2024 = [
  {
    month: "Dec 2024",
    title: "Winter Devotion",
    imageUrl: "/images/wallpapers/2024/dec.jpg",
  },
  {
    month: "Nov 2024",
    title: "Autumn Blessings",
    imageUrl: "/images/wallpapers/2024/nov.jpg",
  },
  {
    month: "Oct 2024",
    title: "Seasonal Devotion",
    imageUrl: "/images/wallpapers/2024/oct.jpg",
  },
  {
    month: "Sep 2024",
    title: "Community Unity",
    imageUrl: "/images/wallpapers/2024/sep.jpg",
  },
  {
    month: "Aug 2024",
    title: "Divine Music",
    imageUrl: "/images/wallpapers/2024/aug.jpg",
  },
  {
    month: "Jul 2024",
    title: "Summer Serenity",
    imageUrl: "/images/wallpapers/2024/jul.jpg",
  },
];

export default function Desktopwallpaper() {
  const [activeFilter, setActiveFilter] = useState<"all" | "2025" | "2024" | "calendar">("all");

  const handleFilterClick = (filter: "all" | "2025" | "2024" | "calendar") => {
    setActiveFilter(filter);
  };

  // Filter wallpapers based on activeFilter
  const filteredWallpapers2025 = activeFilter === "all" || activeFilter === "2025" || activeFilter === "calendar" 
    ? wallpapers2025 
    : [];
  const filteredWallpapers2024 = activeFilter === "all" || activeFilter === "2024" || activeFilter === "calendar" 
    ? wallpapers2024 
    : [];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-amber-100 to-white min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[url('/images/desktopwallpaper-bg.jpg')] bg-cover bg-center text-white text-center py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Sacred <span className="text-yellow-400">Desktop</span> Wallpapers
          </h1>
          <p className="mt-3 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience every month with divine imagery and spiritual themes
          </p>
          <p className="text-sm mt-2 font-medium text-yellow-200">High Resolution - Multiple Formats</p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 flex-wrap">
            <Button
              variant={activeFilter === "all" ? "default" : "secondary"}
              className={`${
                activeFilter === "all"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-orange-100 text-orange-600 hover:bg-orange-200"
              } rounded-full px-6 py-2 font-semibold transition-all duration-300`}
              onClick={() => handleFilterClick("all")}
            >
              All Wallpapers
            </Button>
            <Button
              variant={activeFilter === "2025" ? "default" : "outline"}
              className={`${
                activeFilter === "2025"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border-orange-300 text-orange-600 hover:bg-orange-100"
              } rounded-full px-6 py-2 font-semibold transition-all duration-300`}
              onClick={() => handleFilterClick("2025")}
            >
              2025
            </Button>
            <Button
              variant={activeFilter === "2024" ? "default" : "outline"}
              className={`${
                activeFilter === "2024"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border-orange-300 text-orange-600 hover:bg-orange-100"
              } rounded-full px-6 py-2 font-semibold transition-all duration-300`}
              onClick={() => handleFilterClick("2024")}
            >
              2024
            </Button>
            <Button
              variant={activeFilter === "calendar" ? "default" : "outline"}
              className={`${
                activeFilter === "calendar"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border-orange-300 text-orange-600 hover:bg-orange-100"
              } rounded-full px-6 py-2 font-semibold transition-all duration-300`}
              onClick={() => handleFilterClick("calendar")}
            >
              Calendar
            </Button>
          </div>
          <div className="relative w-full sm:w-auto">
            <Input
              className="max-w-sm pl-10 pr-4 py-3 rounded-full border border-gray-200 shadow-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              placeholder="Search wallpapers..."
            />
            <svg
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        {/* 2025 Collection */}
        {filteredWallpapers2025.length > 0 && (
          <>
            <h2 className="text-center mt-16 text-2xl font-semibold text-gray-800 tracking-tight">2025 Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredWallpapers2025.map((wallpaper, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <img
                    src={wallpaper.imageUrl}
                    alt={wallpaper.title}
                    className="rounded-t-2xl h-56 w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full font-medium">
                        {wallpaper.month}
                      </span>
                      <span className="text-gray-500 font-medium">{wallpaper.resolution}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{wallpaper.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{wallpaper.description}</p>
                    <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600 rounded-full py-3 font-semibold transition-all duration-300">
                      Download HD
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* 2024 Collection */}
        {filteredWallpapers2024.length > 0 && (
          <>
            <h2 className="text-center mt-16 text-2xl font-semibold text-gray-800 tracking-tight">2024 Collection</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
              {filteredWallpapers2024.map((wallpaper, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <img
                    src={wallpaper.imageUrl}
                    alt={wallpaper.title}
                    className="rounded-t-2xl h-32 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      {wallpaper.month}
                    </span>
                    <h4 className="text-sm font-semibold text-gray-800 mt-2 mb-3">{wallpaper.title}</h4>
                    <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full py-2 text-sm font-semibold transition-all duration-300">
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-b from-amber-100 via-amber-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-orange-200 to-yellow-200">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Hare Krishna <span className="text-orange-600">Quarterly</span>
        </h1>
        <p className="mt-3 text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Discover spiritual wisdom and community updates in our quarterly newsletter, published on every sacred Ekadashi
        </p>
        <Button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-md">
          Next Issue: Putrada Ekadashi 2025
        </Button>
      </div>

      {/* Search Section */}
      <div className="max-w-3xl mx-auto px-4 mt-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search newsletters by title, date, or content..."
            className="pl-12 pr-4 py-4 border border-gray-200 rounded-full shadow-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          />
          <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        </div>
      </div>

      {/* Archive Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Newsletter Archive</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
          Browse our collection of spiritual newsletters featuring teachings, community events, and devotional insights
        </p>
      </div>

      {/* 2025 Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-8">2025</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Divine Blessings & New Beginnings",
              date: "Jan/Feb 2025",
              tags: ["Putrada Ekadashi"],
              image: "https://via.placeholder.com/300x180/111111/FFFFFF",
            },
            {
              title: "Spring Festival Celebrations",
              date: "Mar/Apr 2025",
              tags: ["Vamana Ekadashi"],
              image: "https://via.placeholder.com/300x180/cccccc/000000",
            },
            {
              title: "Summer Devotion & Service",
              date: "May/Jun 2025",
              tags: ["Mokshada Ekadashi"],
              image: "https://via.placeholder.com/300x180/99cc99/000000",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 text-sm text-orange-600 font-medium mb-3">
                  <span className="bg-orange-100 rounded-full px-4 py-1.5">{item.date}</span>
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-yellow-100 rounded-full px-4 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h4>
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full py-3 flex items-center justify-center gap-2 transition-all duration-300">
                  <Download className="w-5 h-5" /> Download PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2024 Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-8">2024</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Nirjala Ekadashi",
              date: "Nov/Dec 2024",
              desc: "Winter Selections",
            },
            {
              title: "Yogini Ekadashi",
              date: "Sept/Oct 2024",
              desc: "Autumn Celebrations",
            },
            {
              title: "Kamika Ekadashi",
              date: "Jul/Aug 2024",
              desc: "Monsoon Devotion",
            },
            {
              title: "Apara Ekadashi",
              date: "May/Jun 2024",
              desc: "Summer Satsangh",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center p-6 transform hover:-translate-y-1"
            >
              <div className="text-sm text-orange-600 font-semibold mb-2">{item.date}</div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full py-3 flex items-center justify-center gap-2 transition-all duration-300">
                <Download className="w-5 h-5" /> Download
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Connected Section */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">Stay Connected</div>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Subscribe to receive our quarterly newsletter directly in your inbox on every sacred Ekadashi
        </p>
        <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-4 rounded-full border border-gray-200 shadow-md focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          />
          <Button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-md">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
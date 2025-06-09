import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Send,
  MessageSquareText,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    message: "",
    temple: "", // Default value for dropdown
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status);

      const text = await res.text(); // Get raw text first
      console.log("Raw response text:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Failed to parse JSON response");
        alert("Invalid server response.");
        return;
      }

      console.log("Parsed response JSON:", data);

      if (res.ok) {
        alert("Submitted successfully!");
        setFormData({ name: "", email: "", contact: "", dob: "", message: "", temple: "" });
      } else {
        alert("Error: " + (data.message || "Unknown error"));
        console.error("Backend error response:", data);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Contact us</h1>
          <p className="text-gray-600 mb-8">
            Give us a call or drop by anytime. We endeavour to answer all enquiries within
            24 hours on business days. We will be happy to answer your questions.
          </p>
          <div className="space-y-6">
            {/* Bhilai */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-lg">Bhilai Address:</h3>
                <p className="text-gray-700">
                  HARE KRISHNA MOVEMENT - BHILAI<br />
                  Akshaya Patra Campus, Sector - 6,<br />
                  Bhilai, Durg - 490006.
                </p>
                <p className="text-gray-700 mt-1"><strong>Phone:</strong> 0788 - 2284699</p>
              </div>
            </div>

            {/* Raipur */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-lg">Raipur Address:</h3>
                <p className="text-gray-700">
                  HARE KRISHNA MOVEMENT - RAIPUR<br />
                  A - 2, VIP Estate, Shankar Nagar,<br />
                  Raipur - 492007.
                </p>
                <p className="text-gray-700 mt-1"><strong>Phone:</strong> 0771 - 4056774</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-2">Connect with us:</h3>
              <div className="flex items-center gap-4 text-2xl">
                <a
                  href="https://www.facebook.com/HKMBHLRPR/"
                  className="text-blue-600 hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="http://bit.ly/hkmbhlrpr"
                  className="text-red-600 hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
                <a
                  href="https://www.youtube.com/@harekrishnabhlrpr/featured"
                  className="text-red-600 hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                >
                  <Youtube size={28} />
                </a>
                <a
                  href="https://tinyurl.com/HKMTelegram"
                  className="text-blue-500 hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <Send size={28} />
                </a>
                <a
                  href="https://tinyurl.com/HKMWhatsapp01"
                  className="text-green-600 hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageSquareText size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-10 rounded-md shadow-md text-white">
          <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-sm mb-4">Your email address will not be published. Required fields are marked *</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md text-black"
              required
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number *"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 rounded-md text-black"
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth *"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 rounded-md text-black"
              required
            />
            <select
              name="temple"
              value={formData.temple}
              onChange={handleChange}
              className="w-full p-3 rounded-md text-black"
              required
            >
              <option value="Bhilai Temple">Bhilai Temple</option>
              <option value="Raipur Temple">Raipur Temple</option>
            </select>
            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md text-black"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-100"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Map Section - Bhilai and Raipur */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Bhilai Map */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Bhilai Location</h3>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.315966004602!2d81.3760!3d21.218761985896645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzA3LjUiTiA4McKwMjInMzMuNiJF!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>

        {/* Raipur Map */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Raipur Location</h3>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.964389784614!2d81.6276!3d21.2352518858854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzA2LjkiTiA4McKwMzgnMDMuNCJF!5e0!3m2!1sen!2sin!4v1698765432110!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
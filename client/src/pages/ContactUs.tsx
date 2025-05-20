import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Send,
  MessageSquareText,
} from "lucide-react"

export default function ContactPage() {
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
                  href="https://www.instagram.com/hkm_bhilai_raipur/"
                  className="text-pink-500 hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
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
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full p-3 rounded-md text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full p-3 rounded-md text-black"
              required
            />
            <textarea
              placeholder="Message..."
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

      {/* Map Section */}
      <div className="w-full h-[500px] mt-10">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1e-WqN8Aa0UWhwJZD7MICluBUPwZkxM0&ehbc=2E312F"
        width="100%"
        height="500"
        allowFullScreen
        loading="lazy"
        className="border-0"
      />
      </div>
    </div>
  );
}

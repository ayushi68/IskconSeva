import { useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  MapPin,
  LocateFixed,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      
      const text = await res.text();  // get raw text first
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
        setFormData({ name: "", mobile: "", email: "", dob: "", message: "" });
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
    <footer className="bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#662d91] text-white pt-12 pb-0"> 
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/hkm-logo.jpg" alt="Logo" className="h-10" />
            </div>
            <p className="text-gray-300 mb-3 text-justify">
              Joy can only be experienced when we offer our love to Krishna.
              All happiness in the material world has a beginning and an end, but happiness in Krishna is unlimited, and there is no end.
              Please Come and join us!!!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/HKMBHLRPR/" className="text-white hover:text-secondary transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/hkm_bhilai_raipur/" className="text-white hover:text-secondary transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@harekrishnabhlrpr/featured" className="text-white hover:text-secondary transition" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="https://t.me/YourTelegramLink" className="text-white hover:text-secondary transition" aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.036 16.57l-.398 4.56c.57 0 .816-.246 1.113-.54l2.664-2.537 5.526 4.03c1.014.558 1.74.264 2.016-.934l3.654-17.13h-.001c.372-1.755-.638-2.44-1.63-2.01L1.836 10.204c-1.714.664-1.692 1.63-.3 2.07l4.716 1.47 10.92-6.87c.516-.318.984-.144.6.204z" />
                </svg>
              </a>
              <a href="https://tinyurl.com/HKMWhatsapp01" className="text-white hover:text-secondary transition" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.556-5.338 11.89-11.893 11.89-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.656zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.893-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.668.15-.198.297-.768.967-.941 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.668-1.611-.916-2.207-.242-.579-.487-.501-.668-.51l-.57-.01c-.198 0-.522.074-.792.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
            {/* QR Codes */}
            <div className="flex gap-4 mt-4">
              <img
                src="/QR.png"
                alt="WhatsApp QR"
                className="w-88 h-88 object-contain"
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">REACH US</h3>
            {/* Bhilai */}
            <div className="mb-6">
              <h4 className="font-bold text-base mb-2">HARE KRISHNA MOVEMENT - BHILAI</h4>
              <div className="flex items-center gap-3 mb-1">
                <MapPin size={18} className="text-secondary" />
                <a
                  href="https://goo.gl/maps/ij5vAX6kse1Qiosf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline text-blue-300"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="flex items-start gap-3 mb-1">
                <LocateFixed size={18} className="text-secondary mt-0.5" />
                <p className="text-sm leading-snug">
                  Akshaya Patra Campus,<br />
                  Sector - 6, Bhilai, Durg - 490006.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-1">
                <Phone size={18} className="text-secondary" />
                <p className="text-sm">0788 - 2284699</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <p className="text-sm">hkmbhilai@gmail.com</p>
              </div>
            </div>
            {/* Raipur */}
            <div>
              <h4 className="font-bold text-base mb-2">HARE KRISHNA MOVEMENT - RAIPUR</h4>
              <div className="flex items-center gap-3 mb-1">
                <MapPin size={18} className="text-secondary" />
                <a
                  href="https://goo.gl/maps/G8boMfTfPPqDRvS28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline text-blue-300"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="flex items-start gap-3 mb-1">
                <LocateFixed size={18} className="text-secondary mt-0.5" />
                <p className="text-sm leading-snug">
                  A - 2, VIP Estate, Shankar Nagar, Raipur<br />
                  Raipur - 492006
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <p className="text-sm">0771 - 4056774</p>
              </div>
            </div>
          </div>
          
          <div>
            <ul className="space-y-2">
              <li>
                <a href="/terms-and-services" className="text-gray-300 hover:text-secondary transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-secondary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/donation-cancel" className="text-gray-300 hover:text-secondary transition">
                  Cancellation & Refund Policy
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-300 hover:text-secondary transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/Donation" className="text-gray-300 hover:text-secondary transition">
                  Offer Seva
                </a>
              </li>
              <li>
                <a href="/Festival" className="text-gray-300 hover:text-secondary transition">
                  Festivals
                </a>
              </li>
              <li>
                <a href="/Activitieslp" className="text-gray-300 hover:text-secondary transition">
                  Activities
                </a>
              </li>
              <li>
                <a href="/TempleSchedule" className="text-gray-300 hover:text-secondary transition">
                  Temple Schedule
                </a>
              </li>
              <li>
                <a href="/all-events" className="text-gray-300 hover:text-secondary transition">
                  Vaishnava Calendar
                </a>
              </li>
              <li>
                <a href="/Bloglp" className="text-gray-300 hover:text-secondary transition">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-bold text-lg mb-4">STAY IN TOUCH</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                    required
                  />
                  <input
                    name="mobile"
                    type="text"
                    placeholder="Mobile Number*"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                    required
                  />
                  <input
                    name="dob"
                    type="date"
                    placeholder="Date of Birth*"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                  rows={4}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-secondary text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition"
                >
                  GET INSPIRED
                </button>
              </form>
            </div>
            <div className="space-y-2">
              <a
                href="https://t.me/hkmbhlrpr_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                Join Us On Telegram
              </a><br/>
              <a
                href="https://chat.whatsapp.com/JX34XfCdquW6UBDFbZWF5N"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                Join Us On WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative px-6 py-4 mx-auto w-[95%] md:w-[85%] xl:w-[80%] bg-white border-t border-gray-300 rounded-t-xl shadow-lg text-gray-700 text-sm flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left mt-0">
            © {new Date().getFullYear()} ISKCON Bhilai. All rights reserved.
          </p>
          <p className="text-center md:text-right mt-2 md:mt-0">
            Read our <a href="/terms-and-services" className="underline cursor-pointer">Terms & Conditions</a> and <a href="/privacy-policy" className="underline cursor-pointer">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
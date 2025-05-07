import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "ayushi315645@gmail.com",
          subject: `Contact Us Form Submission from ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        We would love to hear from you! Reach out to us using the form below or through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Get in Touch</h2>
          <p className="text-gray-700 mb-4">Feel free to contact us for any queries or assistance.</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-blue-600 mr-3" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-3" />
              <span>ayushi315645@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-3" />
              <span>123 Temple Street, City, Country</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Send Us a Message</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
          {status && <p className="text-center text-sm mt-4 text-gray-600">{status}</p>}
        </form>
      </div>
    </div>
  );
}
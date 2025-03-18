import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="text-center bg-amber-300 py-20 px-6">
      <h2 className="text-5xl font-bold text-black mb-12">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 transition hover:shadow-2xl">
          <h3 className="text-3xl font-bold text-black mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full p-3 border border-gray-400 rounded-lg h-40 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-lg w-full text-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
            {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 transition hover:shadow-2xl">
          <h3 className="text-3xl font-bold text-black mb-6">Contact Information</h3>
          <p className="text-lg font-medium text-black mb-4">
            📍 <strong>Address:</strong> Kondi, NH 65, Solapur - Pune Hwy, near Hotel Sunil, Solapur, Maharashtra 413255
          </p>
          <p className="text-lg font-medium text-black mb-2">
            📞 <strong>Phone:</strong> +91 88885 18876
          </p>
          <p className="text-lg font-medium text-black mb-4">
            👤 <strong>Owner:</strong> Vinay More
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:scale-110 transition">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-3xl hover:scale-110 transition">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl hover:scale-110 transition">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

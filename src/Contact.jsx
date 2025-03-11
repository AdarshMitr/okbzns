import React, { useState } from "react";
import { motion } from "framer-motion";



const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch("https://formspree.io/f/xyzeywrr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending message. Please try again later.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 py-12 text-center"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-600 mb-8"
        >
          Contact Us
        </motion.h2>
        
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded" value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded" rows="6" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
          </form>
          {status && <p className="mt-4 text-green-600">{status}</p>}
        </div>
        
        {/* Google Map Integration */}
        <div className="mt-12">
          <iframe
            title="Google Map"
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83920795396!2d77.06889954370364!3d28.527352269011235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d8e5c5e5b57%3A0x9b62dbe6b2e97b2c!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1633023000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        
        {/* WhatsApp Chat Button */}
        <a href="https://wa.me/9992928544" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
          WhatsApp Chat
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;

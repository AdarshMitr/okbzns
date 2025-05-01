import React from "react";
import { motion } from "framer-motion";

const WebDev = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-600 mb-8"
        >
          Web Development
        </motion.h1>

        <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
          At OKBZNS, we build high-performance, user-friendly, and responsive websites tailored to your business goals. Whether you need an e-commerce platform, corporate website, or a custom application, our web development services ensure clean code, scalable architecture, and seamless user experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/600x400?text=Frontend+Development"
              alt="Frontend Development"
              className="w-full h-auto rounded"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Frontend Development</h2>
            <p className="text-gray-600 mt-2">
              We build sleek, responsive interfaces using modern frameworks like React, Tailwind CSS, and Next.js to ensure smooth user interaction and visual appeal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/600x400?text=Website+Design"
              alt="Website Design"
              className="w-full h-auto rounded"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Custom UI/UX Design</h2>
            <p className="text-gray-600 mt-2">
              We create intuitive, visually appealing designs that focus on seamless navigation, brand alignment, and conversion optimization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/600x400?text=Backend+Development"
              alt="Backend Development"
              className="w-full h-auto rounded"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Robust Backend Development</h2>
            <p className="text-gray-600 mt-2">
              Our developers use secure, scalable backend frameworks and APIs to power your business logic, data processing, and integration needs.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-gray-600 mt-2">
            Let's bring your ideas to life with a cutting-edge website built by OKBZNS.
          </p>
          <a
            href="mailto:contact@okbzns.com"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDev;

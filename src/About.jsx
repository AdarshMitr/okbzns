import React from 'react'
import Mission from './img/mission-okbzns.jpg'
import Vision from './img/vision-okbzns.jpg'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 py-12"
    >
      <div className="container mx-auto px-6">
        {/* Company Overview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600">About Okbzns</h2>
          <p className="text-lg text-gray-700 mt-4">
            Okbzns is a dynamic platform dedicated to empowering businesses with cutting-edge digital solutions. 
            We focus on providing innovative tools and strategies that drive success and growth in the competitive market.
          </p>
        </motion.div>
        
        {/* Mission & Vision Section with Images */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              To provide businesses with innovative digital tools and marketing strategies, ensuring sustainable growth and success.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 bg-gray-300 h-40 flex items-center justify-center"
          >
            <span className="text-gray-500"><img src={Mission}/></span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 bg-gray-300 h-40 flex items-center justify-center"
          >
            <span className="text-gray-500"><img src={Vision}/></span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
            <p className="text-gray-700 mt-2">
              To become the go-to platform for businesses seeking modern, effective, and scalable solutions in the digital era.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section - Full Width & Colored */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 mt-12 text-center"
        >
          <h3 className="text-3xl font-semibold">Why Choose Okbzns?</h3>
          <ul className="mt-6 space-y-4 max-w-4xl mx-auto">
            <li className="flex items-center p-4 bg-white text-gray-900 rounded-lg shadow-md"><span className="text-blue-600 font-bold mr-2">✔</span> Cutting-edge business tools and strategies</li>
            <li className="flex items-center p-4 bg-white text-gray-900 rounded-lg shadow-md"><span className="text-blue-600 font-bold mr-2">✔</span> Comprehensive digital marketing solutions</li>
            <li className="flex items-center p-4 bg-white text-gray-900 rounded-lg shadow-md"><span className="text-blue-600 font-bold mr-2">✔</span> Customizable and scalable services</li>
            <li className="flex items-center p-4 bg-white text-gray-900 rounded-lg shadow-md"><span className="text-blue-600 font-bold mr-2">✔</span> A commitment to innovation and client success</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
  
}

export default About
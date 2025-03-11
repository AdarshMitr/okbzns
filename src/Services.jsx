import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router";

import Marketing from "./img/marketing.jpg"
import Seo from "./img/seo.jpg"
import WebDevelopment from "./img/Web-Development.jpg"
import CustomSolutions from "./img/custom-solutions.jpg"


const services = [
  {
    image: Marketing,
    title: "Marketing Solutions",
    description: "We offer comprehensive digital marketing services, including social media campaigns, brand management, paid advertising, and lead generation. Our expert team ensures that your business gets the visibility it deserves through targeted strategies tailored to your audience.",
    link: "/marketing-tools"
  },
  {
    image: Seo,
    title: "SEO Optimization",
    description: "Enhance your online presence with our cutting-edge SEO solutions. We specialize in keyword optimization, link building, technical SEO audits, and content strategy to help your website rank higher on search engines and attract more organic traffic.",
    link: "/seo"
  },
  {
    image: WebDevelopment,
    title: "Web Development",
    description: "We create high-performance, user-friendly, and responsive websites tailored to your business needs. Our web development services include e-commerce solutions, corporate websites, and custom web applications that drive engagement and conversions.",
    link: "/web-development"
  },
  {
    image: CustomSolutions,
    title: "Customized Engg. Solutions",
    description: "Every business has unique needs, and we provide tailor-made solutions to improve efficiency and streamline operations. From automation tools to data analytics platforms, we develop innovative solutions that align with your business goals.",
    link: "/engg-solutions"
  }
];

const Services = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 py-12"
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-600 mb-8 text-center"
        >
          Our Services
        </motion.h2>
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} bg-white p-6 rounded-lg shadow-lg`}
            >
              <img src={service.image} alt={service.title} className="w-full md:w-1/2 h-60 object-cover rounded-md" />
              <div className="md:w-1/2 md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-blue-600 mt-4 md:mt-0">{service.title}</h3>
                <p className="text-gray-700 mt-2">{service.description}</p>
                <Link to={service.link} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">Learn More →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Services
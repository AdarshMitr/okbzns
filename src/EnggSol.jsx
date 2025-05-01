import React from "react";
import { motion } from "framer-motion";
import ExperienceCentre from "./img/Experience_Centre.png";
import AutomationSolutions from "./img/Automation_Solutions.png";
import CAD from "./img/CAD_Designing.png";
import CustomHardware from "./img/Custom_Hardware.png"

const engineeringItems = [
  {
    title: "Automation Solutions",
    description:
      "Design and development of automated systems tailored for industrial and commercial efficiency. We integrate smart technology with real-world applications.",
    image: AutomationSolutions,
  },
  {
    title: "CAD Design & Prototyping",
    description:
      "Our CAD specialists convert your ideas into detailed technical blueprints, enabling rapid prototyping and faster product development cycles.",
    image: CAD,
  },
  {
    title: "Custom Hardware Integration",
    description:
      "We build hardware-software integrated systems from scratch, offering complete control, monitoring, and analytics over your engineering workflows.",
    image: CustomHardware,
  },
  
  {
    title: "Experience Centre Design",
    description:
      "From conceptual layouts to immersive installations, we design experience centres that demonstrate innovation and showcase your product or service journey in a compelling way.",
    image: ExperienceCentre,
  }
];

const EnggSol = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-600 mb-8"
        >
          Customized Engineering Solutions
        </motion.h1>

        <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
          At OKBZNS, we deliver innovative engineering solutions customized to your industrial challenges—combining technical expertise with practical execution.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {engineeringItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[600px] h-[400px] object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4 text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Let's Engineer Your Next Innovation
          </h2>
          <p className="text-gray-600 mt-2">
            Reach out to OKBZNS for bespoke engineering services that turn complexity into functionality.
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




export default EnggSol
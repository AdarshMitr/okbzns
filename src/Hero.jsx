import { motion } from "framer-motion";
import { Link } from "react-router";

 function Hero (){
    return (
      <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 py-20 text-center"
    >
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-blue-600"
        >
          Sharing Success, Grow Together
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-gray-700 mt-4"
        >
          Empowering businesses with the right tools for sustainable growth.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 mt-2"
        >
          Leverage technology and strategy to scale new heights.
        </motion.p>
        
        <div className="mt-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-4 hover:bg-blue-700"
          >
            <Link to="/contact" >Get Started</Link>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
    );
  };
  
  export default Hero;
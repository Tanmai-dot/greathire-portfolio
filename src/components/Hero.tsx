import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center min-h-screen pt-20 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-300 rounded-full blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="mb-6 text-primary-800">
              Strategic Staffing That Powers Global Business Success
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Connecting organizations with high-impact talent across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a href="#contact" className="btn btn-primary">
                Hire Talent
                <ChevronRight size={20} className="ml-1" />
              </a>
              <a href="#services" className="btn btn-outline">
                Discover Our Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="https://images.pexels.com/photos/7654125/pexels-photo-7654125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Business professionals in a meeting"
              className="object-cover w-full h-auto max-w-lg rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
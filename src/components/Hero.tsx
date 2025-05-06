import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CursorEffect from './CursorEffects'; // adjust path if needed


const Hero: React.FC = () => {
  
  return (
    <section 
      id="home" 
      className="relative flex justify-center items-center content-center min-h-screen pt-20 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      {/* <CursorEffect />  */}
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity bg-blue-700">
        {/* <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl"></div> */}
        {/* <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-300 rounded-full blur-3xl"></div> */}
      </div>

      {/* Hero content */}
      <div className="absolute w-[80%] h-[70%] bg-secondary-200 rounded-[100%] blur-3xl opacity-[60%] z-0" />
      <div className="container relative z-10 mx-auto ">
      <div className="grid justify-center items-center text-center grid-cols-1 gap-12">
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-center md:text-center"
          >
            <h1 className="mb-6 text-black content-center justify-center align-middle font-[oswald]">
              GREAT<span className='text-blue-700'>HIRE</span> BUSINESS SOLUTIONS
            </h1>
            <p className="mb-8 text-lg text-white">
              Connecting organizations with highly talented individuals across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-center">
              <a href="#contact" className="btn btn-primary">
                Hire Talent
                <ChevronRight size={20} className="ml-1" />
              </a>
              <a href="#services" className="btn btn-outline text-white border border-white">
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
            {/* <img
              src="https://img.freepik.com/free-vector/software-developers-coding-composition-with-creative-decisions-algorithmic-complexity-documentation-by-programming-languages-isometric_1284-33290.jpg?t=st=1746423493~exp=1746427093~hmac=7ce9ed78b841f636885d674716b739e8a464acaa8eddf6fd17b47533997adb97&w=826"
              alt="Business professionals in a meeting"
              className="object-cover w-full h-auto max-w-lg rounded-lg shadow-xl"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
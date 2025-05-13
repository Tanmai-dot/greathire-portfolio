import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
// import BackgroundAnimation from '../assets/BackgroundAnimation.mp4'
import BackgroundAnimation_2 from '../assets/BackgroundAnimation_2.mp4'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center content-center min-h-[79.86vh] px-4 pt-20 md:pt-24 lg:pt-28 bg-gradient-to-r from-gray-50 to-gray-100">
      <video 
        autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0 " 
        style={{
           filter: 'brightness(50%)',
           backgroundColor:'black',
          // opacity:'95%'

         }}
         >
        <source src={BackgroundAnimation_2} type="video/mp4" style={{ filter: 'none' }}/>
      </video>

      {/* Blur effect background shape */}
      {/* <div className="absolute w-[80%] h-[70%] bg-secondary-200 rounded-[100%] blur-3xl opacity-[60%] z-0" /> */}

      <div className="container relative z-10 mx-auto bottom-8">
        <div className="grid justify-center items-center text-center grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-center md:text-center"
          >
            {/* Hologram-like text */}
            <h1 
            className="mb-5 text-black content-center justify-center align-middle font-orbitron text-5xl md:text-6xl tracking-wide drop-shadow-lg" 
            style={{
              textShadow: `
                0 0 10px rgba(135, 206, 235, 0.8), 
                0 0 20px rgba(135, 206, 235, 0.6), 
                0 0 30px rgba(135, 206, 235, 0.4)`
            }}
            
            >
              <span className=''>GREAT</span><span className='text-blue-800'>HIRE</span> BY BABDE PVT. LTD
            </h1>
            {/* Original smaller heading */}
            {/* <h1 className="mb-6 text-black content-center justify-center align-middle font-[oswald] text-4xl md:text-5xl">
              GREAT<span className='text-blue-700'>HIRE</span> BY BABDE PVT. LTD
            </h1> */}

            <p className="mb-8 mt-0 text-lg text-white">
              Connecting Organizations with highly talented individuals across industries.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:justify-center">
              <a href="#contact" className="btn btn-primary bg-blue-800 text-trans hover:bg-blue-700">
                Hire Talent
                <ChevronRight size={20} className="ml-1" />
              </a>
              <a href="#services" className="btn btn-outline text-white border border-white  hover:bg-blue-800">
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
            {/* You can re-add the image here if needed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

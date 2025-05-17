import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
// import BackgroundVideo from '../assets/VID-20250514-WA0008.mp4';
import Animation_1 from '../assets/Animation_1.mp4'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex justify-start items-center min-h-[79.86vh] px-4 pt-20 md:pt-24 lg:pt-28"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: 'brightness(70%) contrast(110%)',
          pointerEvents: 'none',
        }}
      >
        <source src={Animation_1} type="video/mp4" />
      </video>

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 gap-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h1 className="mb-5 text-white font-pobbins text-5xl md:text-6xl tracking-wide uppercase">
              GREAT<span className="text-white">HIRE</span> <span className="normal-case text-xl md:text-3xl font-sans tracking-normal">BY BABDE PVT. LTD</span>

            </h1>

            <p className="mb-8 text-lg text-white">
              Connecting Organizations with highly talented individuals across industries.
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <a href="#contact" className="btn btn-primary bg-blue-800 text-white hover:bg-blue-700">
                Hire Talent
                <ChevronRight size={20} className="ml-1" />
              </a>
              <a href="#services" className="btn btn-outline text-white border border-white hover:bg-blue-800">
                Discover Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

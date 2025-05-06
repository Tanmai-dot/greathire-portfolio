import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GreatHireLogo from '../assets/GreatHireLogoHd.png'

type PreloaderProps = {
  children: React.ReactNode;
};

const Preloader: React.FC<PreloaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800); // show for 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   
      <AnimatePresence>
        {isLoading && (
            <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-700"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            >
            <div className="absolute w-[60%] h-[60%] bg-secondary-100 rounded-[100%] blur-3xl opacity-[60%] z-0" />
            
            <motion.img
              src={GreatHireLogo} // Change this to your logo path
              alt="Logo"
              className="w-[600px] h-auto z-20 relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <motion.h1
              className="mt-4 text-3xl font-bold text-gray-800 z-10 font-[oswald]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              WELCOME TO GREAT<span className='text-blue-700'>HIRE</span> 
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && children}
      
    </>
  );
};

export default Preloader;

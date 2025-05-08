import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Users } from 'lucide-react';

const slides = [
  {
    image: 'https://lh3.googleusercontent.com/p/AF1QipO90Pnpuy9XvJuvapKEdmm3lQ1K60Vlcw_YFTaT=s1360-w1360-h1020-rw',
    heading: 'What we Are',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus ea, atque voluptatum modi assumenda nisi voluptates a autem laborum tenetur numquam in cumque fugit ipsa tempora facilis deserunt! Aperiam.',
  },
  {
    image: 'https://lh3.googleusercontent.com/p/AF1QipMR-CJa-HUn2WB8_8t_7z6_T5D-AmbIDWcbfN1i=s1360-w1360-h1020-rw',
    heading: 'What we do',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus ea, atque voluptatum modi assumenda nisi voluptates a autem laborum tenetur numquam in cumque fugit ipsa tempora facilis deserunt! Aperiam.',
  },
  {
    image: 'https://lh3.googleusercontent.com/p/AF1QipNODwbnr56puwSNPCSqxyTsFtol3shHDaLs2zHM=s1360-w1360-h1020-rw',
    heading: 'What makes us different',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus ea, atque voluptatum modi assumenda nisi voluptates a autem laborum tenetur numquam in cumque fugit ipsa tempora facilis deserunt! Aperiam.',
  },
];

const About: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((index + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const changeSlide = (newIndex: number) => {
    setShow(false);
    setTimeout(() => {
      setIndex(newIndex);
      setShow(true);
    }, 400); // Match with exit duration
  };

  const handlePrev = () => {
    changeSlide((index - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    changeSlide((index + 1) % slides.length);
  };

  return (
    <section id="about" className="section bg-white">
      <h1 className="flex justify-center relative bottom-12 text-4xl font-semibold text-primary-800">About GreatHire</h1>
      <p className="flex justify-center relative bottom-12 py-3 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla hic sit rem!</p>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Text Section */}
          <AnimatePresence mode="wait">
            {show && (
              <motion.div
                key={`text-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >

                <h2 className="text-3xl font-bold text-primary-800">{slides[index].heading}</h2>
                <p className="text-gray-600">{slides[index].text}</p>
                <a href="https://greathire.in/about" className="inline-block btn btn-primary">Learn More</a>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Image Section */}
          <AnimatePresence mode="wait">
            {show && (
              <motion.img
                key={`image-${index}`}
                src={slides[index].image}
                alt="Slide"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="object-cover w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </AnimatePresence>

        </div>
      </div>
                <div className="flex gap-4  justify-center relative top-12">
                  <button onClick={handlePrev} className="btn btn-outline">Previous</button>
                  <button onClick={handleNext} className="btn btn-outline">Next</button>
                </div>
    </section>
  );
};

export default About;

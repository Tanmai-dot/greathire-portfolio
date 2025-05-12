import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Users } from 'lucide-react';

const slides = [
  {
    image: 'https://lh3.googleusercontent.com/p/AF1QipO90Pnpuy9XvJuvapKEdmm3lQ1K60Vlcw_YFTaT=s1360-w1360-h1020-rw',
    heading: 'What we Are',
    text: `We are a purpose-driven talent solutions company committed to aligning people with purpose and organizations with growth. With deep industry expertise and a human-centric approach, we serve diverse sectors and roles. At GreatHire, we’re more than recruiters—we’re enablers of progress, driven by integrity, innovation, and long-term partnership.
`,
  },
  {
    image: 'https://lh3.googleusercontent.com/p/AF1QipMR-CJa-HUn2WB8_8t_7z6_T5D-AmbIDWcbfN1i=s1360-w1360-h1020-rw',
    heading: 'What We do',
    text: `At GreatHire, we go beyond recruitment to build careers and empower businesses with top-tier talent. We provide tailored hiring solutions including executive search, staffing, campus hiring, and HR consulting. Combining technology with human insight, we streamline hiring and ensure cultural fit, helping companies from startups to global enterprises build high-performing teams.
`,
  },
  {
    image: 'https://lh3.googleusercontent.com/p/AF1QipNODwbnr56puwSNPCSqxyTsFtol3shHDaLs2zHM=s1360-w1360-h1020-rw',
    heading: 'What makes us different',
    text: `GreatHire stands out by treating hiring as a transformational journey, not a transaction. We act as strategic partners, focusing on cultural alignment, long-term impact, and quality over quantity. Using AI, analytics, and deep understanding of client needs, we offer a personalized, performance-driven hiring experience that delivers sustainable success.
`,
  },
];

const About: React.FC = () => {
  const [index, setIndex] = useState(0);


  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((index + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const changeSlide = (newIndex: number) => {
    setIndex(newIndex);
  };

  const handlePrev = () => {
    changeSlide((index - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    changeSlide((index + 1) % slides.length);
  };

  return (
    <section id="about" className="section bg-white">
      <div className="max-w-4xl mx-auto text-center relative bottom-12">
        <h1 className="text-4xl font-semibold text-primary-800">About GreatHire</h1>
        <p className="py-3 text-gray-700">GreatHire Business Solutions provides strategic staffing and workforce solutions tailored to meet diverse business needs. We specialize in connecting companies with top-tier talent, driving efficiency, productivity, and long-term success through our expert recruitment services.</p>
      </div>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Text Section */}
          <AnimatePresence mode="wait">

          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 min-h-[250px] bg-white p-6 rounded-lg shadow-lg border border-gray-200" // added card styling
          >

                <h2 className="text-3xl font-bold text-primary-800">{slides[index].heading}</h2>
                <p className="text-gray-600">{slides[index].text}</p>
                <a href="https://greathire.in/about" className="inline-block btn btn-primary">Learn More</a>

              </motion.div>

          </AnimatePresence>

          {/* Image Section */}
          <AnimatePresence mode="wait">

          <motion.img
            key={`image-${index}`}
            src={slides[index].image}
            alt="Slide"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available'; // fallback placeholder image URL
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="object-cover w-full h-[300px] rounded-lg shadow-lg" // 👈 fixed height
          />

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

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Animation variants for the image to fade and slide in */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNODwbnr56puwSNPCSqxyTsFtol3shHDaLs2zHM=s1360-w1360-h1020-rw" 
              alt="Business professionals collaborating"
              className="object-cover w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6"> {/* Corrected placement of closing tag */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
              <Users size={24} className="text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-primary-800">Who We Are</h2>
            <p className="text-gray-600">
              GreatHire Business Solutions provides strategic staffing and 
              workforce solutions tailored to meet diverse business needs. We 
              specialize in connecting companies with top-tier talent, driving
              efficiency, productivity, and long-term success through our expert
              recruitment services.
            </p>
            <p className="text-gray-600">
              With years of industry experience, our team understands the 
              unique challenges businesses face when searching for the right talent.
              We pride ourselves on our ability to identify not just skilled
              professionals, but individuals who align with your company culture
              and long-term objectives.
            </p>
            <a href="#services" className="inline-block btn btn-primary">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
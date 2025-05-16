import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Building2, Bot, Banknote, Store, Cpu, Stethoscope } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const CaseStudyCard: React.FC<{ study: CaseStudy; index: number }> = ({ study, index }) => {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.02} transitionSpeed={1000}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full transition-transform duration-300 hover:rotate-6">
            {study.icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{study.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{study.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {study.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`${getTagColor(tag)} text-xs font-medium px-3 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium"
        >
          View Case Study <ChevronRight size={16} className="ml-1" />
        </a>
      </motion.div>
    </Tilt>
  );
};

const getTagColor = (tag: string) => {
  switch (tag) {
    case 'AI/ML':
      return 'bg-purple-100 text-purple-700';
    case 'Retail':
      return 'bg-pink-100 text-pink-700';
    case 'Healthcare':
      return 'bg-red-100 text-red-700';
    case 'Finance':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-blue-100 text-blue-700';
  }
};

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Fortune 500 Leadership Team',
      description: 'Built complete C-suite for a multinational corporation across 5 countries.',
      tags: ['Executive Search', 'Global Hiring', 'Leadership'],
      icon: <Building2 size={28} />,
    },
    {
      id: 2,
      title: 'AI Startup Team',
      description: 'Recruited complete technical team for Series A funded AI startup.',
      tags: ['Tech Recruitment', 'AI/ML', 'Startup'],
      icon: <Bot size={28} />,
    },
    {
      id: 3,
      title: 'Healthcare Expansion',
      description: 'Staffed 200+ positions for hospital network expansion in 6 months.',
      tags: ['Bulk Hiring', 'Healthcare', 'Rapid Scaling'],
      icon: <Stethoscope size={28} />,
    },
    {
      id: 4,
      title: 'Financial Services Transformation',
      description: 'Digital transformation hiring for legacy financial institution.',
      tags: ['Tech Recruitment', 'Digital Transformation', 'Finance'],
      icon: <Banknote size={28} />,
    },
    {
      id: 5,
      title: 'Retail Expansion',
      description: 'National hiring campaign for retail chain opening 50 new locations.',
      tags: ['Bulk Hiring', 'Retail', 'Multi-location'],
      icon: <Store size={28} />,
    },
    {
      id: 6,
      title: 'Semiconductor Talent Pipeline',
      description: 'Established ongoing talent pipeline for semiconductor manufacturer.',
      tags: ['Tech Recruitment', 'Engineering', 'Talent Pipeline'],
      icon: <Cpu size={28} />,
    },
  ];

  return (
    <section id="case-studies" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-primary-800 text-3xl font-bold">Success Stories</h2>
          <p className="text-gray-600">
            See how we've helped organizations overcome their staffing challenges
            and achieve their business objectives through strategic talent acquisition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#contact" className="inline-flex items-center btn btn-primary">
            Read More Success Stories
            <ChevronRight size={20} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

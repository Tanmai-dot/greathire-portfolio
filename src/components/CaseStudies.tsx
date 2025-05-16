import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BriefcaseBusiness, BrainCircuit, HeartPulse, TrendingUp, ShoppingBag, CircuitBoard } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  detailedDescription: string;
}

const CaseStudyCard: React.FC<{
  study: CaseStudy;
  index: number;
}> = ({ study, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state on click
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-primary-600 border border-blue-600 shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow text-white"  // Slightly darken blue content
    >
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-4 rounded-full transition-transform duration-300 hover:rotate-6">
          {study.icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-navy-900 mb-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>{study.title}</h3>
      <p className="text-navy-900 mb-4 text-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>{study.description}</p>
      {isExpanded && (
        <div className="text-navy-900 text-sm mb-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>{study.detailedDescription}</p>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-2 mb-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
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
        className="inline-flex items-center text-blue-200 hover:underline text-sm font-medium"
        onClick={(e) => {
          e.preventDefault();
          handleCardClick(); // Toggle the expanded state on click
        }}
      >
        {isExpanded ? 'Hide Case Study' : 'View Case Study'}
        <ChevronRight size={16} className="ml-1" />
      </a>
    </motion.div>
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
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Fortune 500 Leadership Team',
      description: 'Built complete C-suite for a multinational corporation across 5 countries.',
      detailedDescription:
        'We helped a global corporation build their leadership team from the ground up, expanding across 5 countries. The process included executive search, interviews, and leadership assessment.',
      tags: ['Executive Search', 'Global Hiring', 'Leadership'],
      icon: <BriefcaseBusiness size={28} className="text-blue-600" />,
    },
    {
      id: 2,
      title: 'AI Startup Team',
      description: 'Recruited complete technical team for Series A funded AI startup.',
      detailedDescription:
        'This AI startup required a specialized team for their product development. We successfully recruited data scientists, machine learning engineers, and other technical staff.',
      tags: ['Tech Recruitment', 'AI/ML', 'Startup'],
      icon: <BrainCircuit size={28} className="text-purple-600" />,
    },
    {
      id: 3,
      title: 'Healthcare Expansion',
      description: 'Staffed 200+ positions for hospital network expansion in 6 months.',
      detailedDescription:
        'In collaboration with a large hospital network, we filled over 200 positions for new facilities and expansion. This rapid staffing process was crucial to meeting the tight timelines.',
      tags: ['Bulk Hiring', 'Healthcare', 'Rapid Scaling'],
      icon: <HeartPulse size={28} className="text-red-600" />,
    },
    {
      id: 4,
      title: 'Financial Services Transformation',
      description: 'Digital transformation hiring for legacy financial institution.',
      detailedDescription:
        'We helped a traditional financial institution transition into the digital age by hiring professionals skilled in technology, digital strategies, and data analysis.',
      tags: ['Tech Recruitment', 'Digital Transformation', 'Finance'],
      icon: <TrendingUp size={28} className="text-green-600" />,
    },
    {
      id: 5,
      title: 'Retail Expansion',
      description: 'National hiring campaign for retail chain opening 50 new locations.',
      detailedDescription:
        'For this national retailer, we executed a recruitment campaign for 50 new store locations, covering a range of positions from management to staff.',
      tags: ['Bulk Hiring', 'Retail', 'Multi-location'],
      icon: <ShoppingBag size={28} className="text-pink-600" />,
    },
    {
      id: 6,
      title: 'Semiconductor Talent Pipeline',
      description: 'Established ongoing talent pipeline for semiconductor manufacturer.',
      detailedDescription:
        'We worked with a leading semiconductor manufacturer to build a continuous talent pipeline for both engineering and production roles, ensuring they meet their future needs.',
      tags: ['Tech Recruitment', 'Engineering', 'Talent Pipeline'],
      icon: <CircuitBoard size={28} className="text-blue-600" />,
    },
  ];

  return (
    <section id="case-studies" className="section bg-gradient-to-r from-white to-blue-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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

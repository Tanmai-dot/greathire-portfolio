import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

const CaseStudyCard: React.FC<{ study: CaseStudy; index: number }> = ({ study, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden bg-white rounded-lg shadow-lg"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={study.image}
          alt={`${study.client} case study`}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-primary-800">{study.client}</h3>
        <div className="mb-3">
          <h4 className="text-sm font-medium text-gray-500">The Challenge</h4>
          <p className="text-gray-700">{study.challenge}</p>
        </div>
        <div className="mb-3">
          <h4 className="text-sm font-medium text-gray-500">Our Solution</h4>
          <p className="text-gray-700">{study.solution}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">The Result</h4>
          <p className="text-gray-700">{study.result}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: "XYZ Corporation",
      challenge: "Needed a fast-paced tech team for a project launch.",
      solution: "We identified top engineers and developers within two weeks.",
      result: "The project was delivered on time, and client satisfaction increased by 25%.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      client: "ABC Healthcare",
      challenge: "Struggled with high turnover in specialized medical roles.",
      solution: "Implemented a customized retention-focused recruitment strategy.",
      result: "Reduced turnover by 40% and improved candidate quality scores.",
      image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      client: "Global Finance Inc.",
      challenge: "Needed to scale their analytics team rapidly for market expansion.",
      solution: "Provided a dedicated recruitment team with finance-specific expertise.",
      result: "Hired 15 specialized analysts in 30 days, enabling successful market entry.",
      image: "https://images.pexels.com/photos/7681098/pexels-photo-7681098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
          <h2 className="mb-4 text-primary-800">Success Stories</h2>
          <p className="text-gray-600">
            See how we've helped organizations overcome their staffing challenges
            and achieve their business objectives through strategic talent acquisition.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
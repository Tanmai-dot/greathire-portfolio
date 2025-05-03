import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, BarChart2, Users, TrendingUp, Award } from 'lucide-react';

interface ReasonProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const Reason: React.FC<ReasonProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex"
    >
      <div className="flex-shrink-0 p-2 mr-4 text-white bg-primary-600 rounded-lg">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-primary-100">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Award,
      title: 'Proven Talent Matchmaking',
      description: 'Our proprietary matching algorithm ensures the perfect fit for your organization.',
    },
    {
      icon: Users,
      title: 'Industry Expertise',
      description: 'Specialized recruiters with deep knowledge in various industry sectors.',
    },
    {
      icon: Clock,
      title: 'Fast Time-to-Hire',
      description: 'Reduce your hiring cycle by up to 40% with our streamlined process.',
    },
    {
      icon: TrendingUp,
      title: 'High Retention Rate',
      description: '92% of our placements stay with companies for more than two years.',
    },
    {
      icon: BarChart2,
      title: 'Scalable Solutions',
      description: 'Flexible staffing options for businesses of all sizes, from startups to enterprises.',
    },
  ];

  return (
    <section id="whyus" className="section bg-primary-700 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 opacity-20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-white">Why GreatHire?</h2>
          <p className="text-primary-100">
            We are your strategic partner in talent acquisition. Here's why MNCs trust us:
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reason
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import image files instead of icons
import AgileDevelopment from '../assets/WhyUsIcons/AgileDevelopment.png';
import AnnualMaintenancePlans from '../assets/WhyUsIcons/AnnualMaintenancePlans.png';
import ClientNeeds from '../assets/WhyUsIcons/ClientNeeds.png';
import CompetitiveRates from '../assets/WhyUsIcons/CompetitiveRates.png';
import CompleteEndToEndSolutions from '../assets/WhyUsIcons/CompleteEndToEndSolutions.png';
import DedicatedResourceElocation from '../assets/WhyUsIcons/DedicatedResourceElocation.png';
import DilerentBusinessModels from '../assets/WhyUsIcons/DilerentBusinessModels.png';
import GlobalKnowHow from '../assets/WhyUsIcons/GlobalKnowHow.png';
import NDAsOwnershipTransfer from '../assets/WhyUsIcons/NDAsOwnershipTransfer.png';
import TechExperts from '../assets/WhyUsIcons/TechExperts.png';
import TruePartners from '../assets/WhyUsIcons/TruePartners.png';
import ValueForYourInvestment from '../assets/WhyUsIcons/ValueForYourInvestment.png';

interface ReasonProps {
  image: string;
  title: string;
  index: number;
}

const Reason: React.FC<ReasonProps> = ({ image, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-[200px] h-[200px] flex flex-col items-center justify-center border border-blue-900 border-solid bg-cyan-100 rounded-xl transition-all hover:shadow-3xl"
      >
      <img src={image} alt={title} className="w-[90px] ha-auto object-contain mb-3" />
      <h3 className="text-center text-white text-sm font-semibold">{title}</h3>
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
      image: DedicatedResourceElocation,
      title: (
        <p className='text-blue-900 text-lg'>
        Dedicated Resource Allocation
        </p>
      ),
    },
    {
      image: DilerentBusinessModels,
      title: (
        <p  className='text-blue-900 text-lg'>
         Dilerent Business Models
        </p>
      ),
    },
    {
      image: CompetitiveRates,
      title:(
        <p className='text-blue-900 text-lg'>
          Competitive Rates<br/> for Best Services
        </p>
      ),
    },
    {
      image: NDAsOwnershipTransfer,
      title:(
        <p className='text-blue-900 text-lg'>
          NDA & Ownership Transfer
        </p>
      ),
    },
    {
      image: CompleteEndToEndSolutions,
      title:(
        <p className='text-pink-700 text-lg'>
        Complete End to <br />End Solutions
        </p>
      ) 
    },
    {
      image: AnnualMaintenancePlans,
      title:(
        <p className='text-pink-700 text-lg'>
        Annual Plans for<br /> Maintenance
        </p>
      ) 
    },
    {
      image: TechExperts,
      title:(
        <p className='text-pink-700 text-lg'>
        Tech Experts on Board
        </p>
      ) 
    },
    {
      image: AgileDevelopment,
      title:(
        <p className='text-pink-700 text-lg'>
        Agile Development <br />& Fast Deployment
        </p>
      ) 
    },
    {
      image: ValueForYourInvestment,
      title:(
        <p className='text-green-600 text-lg'>
        Value for Your Investment
        </p>
      )
    },
    {
      image: ClientNeeds,
      title:(
        <p className='text-green-600 text-lg'>
        Respect Client <br /> Needs & Culture
        </p>
      )
    },
    {
      image: GlobalKnowHow,
      title:(
        <p className='text-green-600 text-lg'>
        Global Know How
        </p>
      ) 
    },
    {
      image: TruePartners,
      title:(
        <p className='text-green-600 text-lg'>
        True Partners
        </p>
      ) 
    },
    
  ];

  return (
    <section id="whyus" className="section bg-blue-600 relative">
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">

          {reasons.map((reason, index) => (
            <Reason
              key={index}
              image={reason.image}
              title={reason.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

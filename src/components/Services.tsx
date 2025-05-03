import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserCheck, Users, Briefcase, LineChart, Building } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
}

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      title: 'Permanent Hiring',
      description: 'Finding long-term, dedicated talent to fit your business.',
      icon: UserCheck,
      imageUrl: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Executive Search',
      description: 'Identifying top leadership for executive positions.',
      icon: Users,
      imageUrl: 'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Contract Staffing',
      description: 'Providing temporary or contract workers to meet project needs.',
      icon: Briefcase,
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Workforce Consulting',
      description: 'Guiding your business to optimize workforce planning.',
      icon: LineChart,
      imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Industry-Specific Hiring',
      description: 'Specializing in hiring for sectors like IT, Engineering, Healthcare, etc.',
      icon: Building,
      imageUrl: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-primary-800">Our Expertise</h2>
          <p className="text-gray-600">
            We offer comprehensive staffing solutions tailored to your specific industry needs.
            Our expertise spans across multiple sectors to ensure the perfect match for your organization.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#contact" className="btn btn-primary">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
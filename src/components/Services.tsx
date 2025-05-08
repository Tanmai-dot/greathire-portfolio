import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserCheck, Users, Briefcase, LineChart, Building, X } from 'lucide-react';
import ServiceCard from './ServiceCard';

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl?: string;
  detailedDescription: string; // Add detailedDescription property
}

// Keep the useInView hook if you want the initial fade-in animation for the section title
const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState<Service | null>(null); // State to manage the selected service for detailed view

  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Building responsive, fast, and secure websites.',
      icon: Briefcase,
      imageUrl: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'Our web development services focus on creating high-performance, secure, and scalable websites tailored to your business needs. We utilize the latest technologies to build responsive and user-friendly web applications that provide an excellent experience across all devices. From custom web development to e-commerce solutions, our team delivers innovative digital experiences.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Leveraging AI and ML for intelligent solutions.',
      icon: Briefcase,
      imageUrl: 'https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'We specialize in developing cutting-edge AI and Machine Learning solutions to help businesses automate processes, gain valuable insights from data, and make intelligent decisions. Our services include predictive analytics, natural language processing, computer vision, and custom AI model development to transform your operations and drive innovation.',
    },
    {
      title: 'App Development',
      description: 'Creating user-friendly mobile applications.',
      icon: Users,
      imageUrl: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'Our app development expertise covers both iOS and Android platforms. We build intuitive, feature-rich, and high-performing mobile applications that provide seamless user experiences. From concept to deployment, we handle the entire app development lifecycle, ensuring your app meets your business goals and resonates with your target audience.',
    },
    {
      title: 'Cloud Computing',
      description: 'Empowering scalability through cloud-based solutions.',
      icon: Building,
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'We help businesses leverage the power of cloud computing for enhanced scalability, flexibility, and cost-efficiency. Our services include cloud migration, infrastructure management, cloud-native application development, and cloud security solutions across major platforms like AWS, Azure, and Google Cloud. Transition to the cloud seamlessly with our expert guidance.',
    },
    {
      title: 'Cybersecurity',
      description: 'Protecting digital assets from threats.',
      icon: Briefcase,
      imageUrl: 'https://images.pexels.com/photos/265336/pexels-photo-265336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'In today\'s digital landscape, robust cybersecurity is paramount. We offer comprehensive cybersecurity services to protect your business from evolving threats. This includes vulnerability assessments, penetration testing, security audits, incident response planning, and implementing advanced security protocols to safeguard your digital assets and ensure compliance.',
    },
    {
      title: 'Data Analytics',
      description: 'Extracting insights from data for informed decisions.',
      icon: LineChart,
      imageUrl: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'Unlock the potential of your data with our data analytics services. We help you collect, process, and analyze your data to extract meaningful insights that drive informed business decisions. Our services include data warehousing, business intelligence, data visualization, and predictive analytics to optimize your operations and gain a competitive edge.',
    },
    {
      title: 'Digital Marketing',
      description: 'Improving online visibility through strategic campaigns.',
      icon: LineChart,
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'Our digital marketing services are designed to enhance your online presence, attract your target audience, and drive conversions. We offer a range of services including Search Engine Optimization (SEO), Search Engine Marketing (SEM), social media marketing, content marketing, email marketing, and analytics to create effective digital campaigns.',
    },
    {
      title: 'Permanent Hiring',
      description: 'Finding long-term, dedicated talent to fit your business.',
      icon: UserCheck,
      imageUrl: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'Our permanent hiring services are focused on identifying and securing long-term, dedicated talent that aligns with your company culture and strategic goals. We manage the entire recruitment process, from sourcing and screening to offer negotiation, ensuring you find the best fit for your team.',
    },
    {
      title: 'Executive Search',
      description: 'Identifying top leadership for executive positions.',
      icon: Users,
      imageUrl: 'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'We specialize in executive search to help you find top-tier leadership and C-suite executives who can drive your business forward. Our discreet and targeted approach ensures we identify candidates with the right experience, skills, and vision to lead your organization to success.',
    },
    {
      title: 'Contract Staffing',
      description: 'Providing temporary or contract workers to meet project needs.',
      icon: Briefcase,
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'Our contract staffing solutions provide you with flexible access to skilled professionals for specific projects, seasonal demands, or temporary needs. We quickly connect you with qualified contractors who can hit the ground run and contribute to your projects from day one.',
    },
    {
      title: 'Workforce Consulting',
      description: 'Guiding your business to optimize workforce planning.',
      icon: LineChart,
      imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'We offer workforce consulting services to help you optimize your workforce planning and management strategies. Our consultants provide insights and recommendations on talent acquisition, retention, performance management, and organizational structure to build a high-performing workforce.',
    },
    {
      title: 'Industry-Specific Hiring',
      description: 'Specializing in hiring for sectors like IT, Engineering, Healthcare, etc.',
      icon: Building,
      imageUrl: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 detailedDescription: 'Our industry-specific hiring expertise allows us to understand the unique demands and nuances of various sectors, including IT, Engineering, Healthcare, Finance, and more. We have specialized recruiters who can identify and attract top talent within your specific industry.',
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

      {/* Grid of Service Cards - Always Rendered */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      {/* Detailed View Section - Conditionally Rendered */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-4 md:mx-auto relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-50"
            >
              <X size={24} />
            </button>
            <div className="flex items-center justify-center mb-6">
              {/* Type guard ensures selectedService is not null */}
              {selectedService.icon && (
                <selectedService.icon size={48} className="text-primary-500" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 text-left whitespace-pre-wrap">
              {selectedService.detailedDescription}
            </p>
          </div>
        </motion.div>
      )}
    </div> {/* ✅ container div closed */}
  </section>
);
};
export default Services;
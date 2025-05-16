// Services.tsx
import React, { useState } from 'react';
import ServiceCarousel from './ServiceCarousel';

import AIMLImg from "../../assets//AIML.png";
import WebdevelopmentImg from "../../assets//Webdevelopment.png";

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl?: string;
  detailedDescription: string;
}

const Services: React.FC = () => {
  const [isLastCardReached, setIsLastCardReached] = useState(false);

  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Building responsive, fast, and secure websites.',
      icon: 'icon-placeholder',
      imageUrl: 'src/assets/webdevelopment.png',
      detailedDescription: 'Detailed description for web development.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Leveraging AI and ML for intelligent solutions.',
      icon: 'icon-placeholder',
      imageUrl: 'src/assets/AIML.png',
      detailedDescription: 'Detailed description for AI and ML.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Leveraging AI and ML for intelligent solutions.',
      icon: 'icon-placeholder',
      imageUrl: 'image-url-placeholder',
      detailedDescription: 'Detailed description for AI and ML.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Leveraging AI and ML for intelligent solutions.',
      icon: 'icon-placeholder',
      imageUrl: 'image-url-placeholder',
      detailedDescription: 'Detailed description for AI and ML.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Leveraging AI and ML for intelligent solutions.',
      icon: 'icon-placeholder',
      imageUrl: 'image-url-placeholder',
      detailedDescription: 'Detailed description for AI and ML.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Leveraging AI and ML for intelligent solutions.',
      icon: 'icon-placeholder',
      imageUrl: 'image-url-placeholder',
      detailedDescription: 'Detailed description for AI and ML.',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Leveraging AI and ML for intelligent solutions.',
      icon: 'icon-placeholder',
      imageUrl: 'image-url-placeholder',
      detailedDescription: 'Detailed description for AI and ML.',
    },
    // Add more services here...
  ];

  const handleLastCardReached = () => {
    setIsLastCardReached(true);
  };

  return (
    <section id="services" className="section bg-blue-300">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-primary-800">Our Expertise</h2>
          <p className="text-gray-600">
            We offer comprehensive staffing solutions tailored to your specific industry needs.
            Our expertise spans across multiple sectors to ensure the perfect match for your organization.
          </p>
        </div>

        <div className="w-full h-[400px]">
          <ServiceCarousel services={services} onLastCardReached={handleLastCardReached} />
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from './Services';

interface ServiceCardProps {
  service: Service;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isActive, onClick }) => {
  const { title, description, icon: Icon, imageUrl } = service;

  const zIndex = isActive ? 'z-10' : 'z-0';
  const opacity = isActive ? 1 : 0.6;
  const scale = isActive ? 1 : 0.8;
  const rotateY = (index - 1) * 30; // Spread the inactive cards around

  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      animate={{ opacity, scale }}
      transition={{ duration: 0.5 }}
      className={`relative flex-shrink-0 transition-all duration-300 transform-gpu w-[280px] h-[400px] mx-4 cursor-pointer ${zIndex}`}
      style={{
        transform: `rotateY(${rotateY}deg) translateZ(500px)`,
      }}
      onClick={onClick}
    >
      <div className="relative p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 text-white bg-primary-600 rounded-lg">
            <Icon size={24} />
          </div>
          <div className="w-16 h-16 overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-primary-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

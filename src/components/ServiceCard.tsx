import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  imageUrl, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg group hover:shadow-xl"
    >
      <div className="relative p-6">
        <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-gradient-to-b from-primary-50 to-primary-100 group-hover:opacity-100"></div>
        
        <div className="relative z-10">
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
      </div>
    </motion.div>
  );
};

export default ServiceCard;
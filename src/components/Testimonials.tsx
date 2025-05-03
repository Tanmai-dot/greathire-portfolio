import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialSlide: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="px-4">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-4 text-primary-500">
          <Quote size={32} />
        </div>
        <p className="mb-6 text-lg italic text-gray-700">{testimonial.content}</p>
        <div>
          <h4 className="text-lg font-semibold text-primary-800">{testimonial.name}</h4>
          <p className="text-gray-600">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "GreatHire provided us with a seamless recruitment experience, helping us find top-tier talent in record time.",
      name: "John Doe",
      title: "HR Director",
      company: "XYZ Corporation",
    },
    {
      id: 2,
      content: "Their ability to understand our specific needs and deliver the right candidates is unmatched.",
      name: "Jane Smith",
      title: "CEO",
      company: "ABC Solutions",
    },
    {
      id: 3,
      content: "We've worked with several recruitment firms, but GreatHire stands out for their attention to detail and quality of candidates.",
      name: "Michael Johnson",
      title: "CTO",
      company: "Tech Innovations",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="section bg-gray-100">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-primary-800">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with GreatHire.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <TestimonialSlide testimonial={testimonials[currentIndex]} />
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 text-primary-600 transition-colors duration-300 border border-primary-600 rounded-full hover:bg-primary-600 hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 text-primary-600 transition-colors duration-300 border border-primary-600 rounded-full hover:bg-primary-600 hover:text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-primary-200'
                }`}
              />
            ))}
          </div>

          {/* Client logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
            {['XYZ Corporation', 'ABC Solutions', 'Tech Innovations', 'Global Enterprises', 'Future Systems'].map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-12 px-6 py-4 bg-white rounded-lg shadow-sm"
              >
                <p className="font-semibold text-gray-400">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
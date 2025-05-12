import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from './Services';
import ServiceCard from './ServiceCard';

interface CarouselProps {
  services: Service[];
  onLastCardReached: () => void;
}

const SCROLL_DELAY = 800; // ms

const ServiceCarousel: React.FC<CarouselProps> = ({ services, onLastCardReached }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [carouselCompleted, setCarouselCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastDirectionRef = useRef(0); // For scroll direction throttling

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        // Fix 2: Reactivate carousel if user scrolls back and entire section is visible
        if (entry.isIntersecting && carouselCompleted) {
          const rect = entry.target.getBoundingClientRect();
          const fullyVisible =
            rect.top >= 0 && rect.bottom <= window.innerHeight;
          if (fullyVisible) {
            setCarouselCompleted(false);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [carouselCompleted]);

  // Fix 3: Handle mouse wheel scroll with direction throttling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const direction = e.deltaY > 0 ? 1 : -1;
  
      // 👇 Handle scroll unlock conditions first
      if (
        (direction === 1 && currentIndex === services.length - 1) || // Down on last card
        (direction === -1 && currentIndex === 0)                     // Up on first card
      ) {
        // Let normal scrolling resume
        document.body.style.overflow = 'auto';
        return;
      }
  
      // 👇 Else: lock scroll and handle card navigation
      if (!isInView || scrolling) return;
  
      e.preventDefault(); // Lock scroll inside carousel
  
      lastDirectionRef.current = direction;
      setScrolling(true);
  
      if (direction === 1 && currentIndex < services.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (direction === -1 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
  
      setTimeout(() => {
        setScrolling(false);
      }, SCROLL_DELAY);
    };
  
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, scrolling, isInView, services.length]);
  
  

  // Fix 1: Re-enable carousel if user scrolls back into it
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
  
      const rect = containerRef.current.getBoundingClientRect();
  
      // 👇 Trigger only if user is scrolling back up into the carousel
      if (
        carouselCompleted &&
        rect.top > 0 &&
        rect.top < window.innerHeight * 0.8
      ) {
        setCarouselCompleted(false);
        // Optional: setCurrentIndex(0); // Only if you want to reset
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [carouselCompleted]);

  // Lock body scroll while carousel is active
  useEffect(() => {
    if (isInView && !carouselCompleted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isInView, carouselCompleted]);

  // Trigger last card logic if we reach end
  useEffect(() => {
    if (currentIndex === services.length - 1 && !carouselCompleted) {
      setCarouselCompleted(true);
      setTimeout(() => {
        onLastCardReached();
      }, SCROLL_DELAY);
    }
  }, [currentIndex, services.length, onLastCardReached, carouselCompleted]);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center h-full overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0.4,
              scale: index === currentIndex ? 1 : 0.8,
              x: (index - currentIndex) * 300,
              zIndex: services.length - Math.abs(index - currentIndex),
            }}
            transition={{ duration: 0.1, 
              
            }}
            className="absolute w-[320px] max-w-[90vw]"
          >
            <ServiceCard
          service={service}
          index={index}
          onClick={() => {}}
          isActive={index === currentIndex} // ✅ Add this
        />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

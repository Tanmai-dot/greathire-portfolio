import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Service } from './Services';
import ServiceCard from './ServiceCard';

interface CarouselProps {
  services: Service[];
  onLastCardReached: () => void;
}

const AUTO_SCROLL_SPEED = 100; // increased speed for faster motion
const CARD_WIDTH = 360; // width of card including margin

const ServiceCarousel: React.FC<CarouselProps> = ({ services, onLastCardReached }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const lastHighlightedIndex = useRef(0);

  const totalWidth = CARD_WIDTH * services.length;

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      let currentX = x.get();
      currentX -= AUTO_SCROLL_SPEED * (1 / 60); // assuming 60fps

      if (currentX < -totalWidth) {
        currentX += totalWidth;
      } else if (currentX > 0) {
        currentX -= totalWidth;
      }

      x.set(currentX);

      // Calculate index of card closest to center using rounding
      const centerPosition = -currentX + window.innerWidth / 2;
      const index = Math.round(centerPosition / CARD_WIDTH) % services.length;

      if (index !== lastHighlightedIndex.current) {
        lastHighlightedIndex.current = index;
        setHighlightedIndex(index);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [x, totalWidth, services.length]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-[460px]">
      <motion.div
        className="flex"
        style={{ x }}
      >
        {services.concat(services).map((service, index) => {
          const isHighlighted = index % services.length === highlightedIndex;
          return (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[340px] mx-4"
              animate={{ scale: isHighlighted ? 1.2 : 1 }}
              transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
            >
              <ServiceCard
                service={service}
                index={index % services.length}
                onClick={() => {}}
                isActive={isHighlighted}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServiceCarousel;

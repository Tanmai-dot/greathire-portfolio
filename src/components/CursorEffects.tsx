// components/CursorEffect.tsx
import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 mix-blend-difference">
      <div
        className="absolute w-40 h-40 rounded-full bg-white opacity-20 blur-[30%]"
        style={{
          transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
          transition: 'transform 0.04s linear',
        }}
      />
    </div>
  );
};

export default CursorEffect;

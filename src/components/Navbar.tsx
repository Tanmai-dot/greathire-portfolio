import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GreatHireLogo from '../assets/GreatHireLogoHd.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setIsActive(link.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 transition-all duration-300">
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <div className="relative translate-x-2">
            <img src={GreatHireLogo} alt="Logo" className="w-auto h-12 z-20 relative" />
            <div className="absolute inset-0 blur-xl opacity-[75%] bg-blue-200 rounded-full z-0" />
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsActive(link.href)}
              className={`relative text-sm font-medium transition-all duration-300
              ${isActive === link.href ? 'text-blue-700' : 'text-black'}
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300
              after:origin-center hover:after:w-full ${isActive === link.href ? 'after:w-full' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

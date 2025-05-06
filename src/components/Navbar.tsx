import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GreatHireLogo from '../assets/GreatHireLogoHd.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('#home'); // Assuming default active is #home

  useEffect(() => {
    const handleScroll = () => {
      // This logic is for updating the active section based on scroll
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + section.offsetHeight;
  
          if (scrollPosition >= top && scrollPosition < bottom) {
            setIsActive(navLinks[index].href);
          }
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-2" // Set a default background and padding
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <div className='relative'>
          <img src={GreatHireLogo} alt="" className='w-auto h-12 z-20 relative' />
          <div className="absolute inset-0 blur-md opacity-[90%] bg-secondary-100 rounded-[100%] z-0" />
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsActive(link.href)}
              className={`relative text-sm font-medium transition-all duration-300
                text-black {/* Always black now */}
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:h-[2px] after:bg-current after:transition-all after:duration-300
                after:origin-center
                ${isActive === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary px-4 py-2"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu size={24} className="text-gray-800" />
          )}
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
                className="block text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full btn btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
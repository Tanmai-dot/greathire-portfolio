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
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${isActive === '#home' ? 'py-1' : 'py-0'}`}>
      <div className="container flex items-center justify-center">
        <a href="#home" className="flex items-center space-x-2">
          {/* <div className="relative translate-x-2 "> 
            <img src={GreatHireLogo} alt="Logo" className="w-auto h-12 z-20 relative" />
            <div className="absolute inset-0 blur-xl opacity-[45%] bg-blue-200  z-0" />
          </div> */}
        </a>

        {/* Desktop navigation */}
        <div 
        className="hidden md:flex md:items-center md:space-x-6 mx-auto bg-white border border-blue-700 px-4 py-2 rounded-full shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsActive(link.href)}
              className={`relative text-md font-medium transition-all duration-300 z-20
              ${isActive === link.href ? 'text-blue-700' : 'text-blue-800'}
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300
              after:origin-center hover:after:w-full ${isActive === link.href ? 'after:w-full' : ''}`}
              style={{
                textShadow: `
                0 0 10px rgba(135, 206, 235, 0.8), 
                0 0 20px rgba(135, 206, 235, 0.6), 
                0 0 30px rgba(135, 206, 235, 0.4)`
              }}
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

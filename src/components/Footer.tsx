import React from 'react';
import { Users, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <Users size={24} className="text-primary-400" />
              <span className="text-xl font-bold text-white">GreatHire</span>
            </div>
            <p className="mb-4">
              Strategic staffing and workforce solutions tailored to meet diverse business needs.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary-400">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400">About Us</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-primary-400">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary-400">Permanent Hiring</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400">Executive Search</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400">Contract Staffing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400">Workforce Consulting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400">Industry-Specific Hiring</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="flex-shrink-0 mr-3 text-primary-400" />
                <span>123 Business Avenue, Suite 100<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex">
                <Phone size={20} className="flex-shrink-0 mr-3 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={20} className="flex-shrink-0 mr-3 text-primary-400" />
                <span>info@greathire.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4 text-sm text-center text-gray-500 border-t border-gray-800">
        <div className="container">
          <p>
            © {new Date().getFullYear()} GreatHire Business Solutions. All rights reserved.
          </p>
          <p className="flex items-center justify-center mt-2">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>for businesses worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
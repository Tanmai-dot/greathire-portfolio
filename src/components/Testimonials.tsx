<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Logos from assets folder
import a1townshipImg from "../assets/a1township.png";
import accenflairImg from "../assets/accenflair.webp";
import aiedgeImg from "../assets/aiedge.jpeg";
import alkalineImg from "../assets/alkaline.png";
import baklavaImg from "../assets/baklava.avif";
import bandharyglassImg from "../assets/bandharyglass.png";
import clevernestImg from "../assets/clevernest.jpg";
import dadusImg from "../assets/dadus.avif";
import dwlabsImg from "../assets/dwlabs.jpeg";
import genericsolImg from "../assets/genericsol.jpeg";
import hrhImg from "../assets/hrh.jpeg";
import kotaklifeImg from "../assets/kotaklife.jpg";
import smfibersImg from "../assets/smfibers.svg";
import sriramfinanceImg from "../assets/sriramfinance.jpg";
import techmahindraImg from "../assets/techmahindra.png";
import googleImg from "../assets/Google.png";
import teleperformanceImg from "../assets/teleperformance.png";
import vortalsoftImg from "../assets/vortalsoft.jpg";
import wiproImg from "../assets/Wipro.svg"; 
import zeelmediaImg from "../assets/zeelmedia.png";      
import ravirajImg from "../assets/Raviraj.svg";
import eeshanyaImg from "../assets/eeshanya.png";
import tataImg from "../assets/tata.png";
>>>>>>> efe508976994abce12e90d525a0c57d0510de524

const clientReviews = [
  {
    text: "The team delivered a tailor-made solution that streamlined our operations and improved our customer experience significantly. Their ability to understand our business needs and translate them into a functional application was impressive.",
    author: "Sarah Mitchell, Operations Director",
  },
  {
    text: "Since partnering with them, our software uptime has consistently remained above 99.9%. Their proactive monitoring and quick response times are a game-changer.",
    author: "Anita Desai, Systems Lead",
  },
  {
    text: "Thanks to Great Hire’s deep understanding of AI and cloud technologies, we were able to scale our software development team quickly and cost-effectively.",
    author: "VP of Engineering, Healthcare Software Company",
  },
  {
    text: "Their recruitment team understands both the tech and the culture fit. Our AI R&D center wouldn’t be where it is today without their support.",
    author: "Ananth, Director of Innovation",
  },
  {
    text: "From DevOps engineers to AI product managers, Great Hire delivered high-caliber professionals that matched our specific needs across multiple continents.",
    author: "Kushal, Hiring Manager",
  },
  {
    text: "We needed a hybrid team of cloud engineers and AI researchers for a confidential innovation project. Great Hire ensured fast, discreet, and top-quality placements.",
    author: "Sarath, CEO/Director",
  },
  {
    text: "We were looking for developers experienced in large language models and generative AI — Great Hire delivered outstanding talent in record time.",
    author: "Head of Product",
  },
  {
    text: "As a fast-growing fintech, we needed full-stack developers with experience in AI-driven risk modeling. Great Hire exceeded our expectations.",
    author: "Hiring Manager",
  },
  {
    text: "Their team understood the nuances of our tech stack, culture, and urgency. We hired six exceptional software engineers in one quarter.",
    author: "Engineering Manager, IoT Software Company",
  },
];


const candidateReviews = [
  {
    text: "Joining GREATHIRE gave me the opportunity to work on cutting-edge AI projects with top-tier clients. The leadership truly understands tech talent and matches us with roles that challenge and grow our skills.",
    author: "Priya N., Machine Learning Engineer",
  },
  {
    text: "As a full-stack developer placed by GREATHIRE, I’ve had consistent support, career guidance, and access to high-impact SaaS companies. They’re more than recruiters — they're career partners.",
    author: "Jake L., Software Developer",
  },
  {
    text: "Working on GREATHIRE’s internal chatbot to streamline recruitment queries taught me practical NLP integration. The team encouraged experimentation, and I gained hands-on experience with Python, Transformers, and real user feedback.",
    author: "Priya M.",
  },
  {
    text: "Interning at GreatHire has been a turning point for me. I worked on a full-stack web application using React and Node.js, and received daily mentoring that helped me level up my coding and problem-solving skills. The tech leads really care about helping us grow.",
    author: "Ayesha M., B.Tech Student",
  },
  {
    text: "My project involved building REST APIs and integrating third-party services into a CRM platform. The team followed Agile methodology, and I learned how professional software development works from planning to deployment.",
    author: "Sneha T., Final Year CSE Student",
  },
  {
    text: "As a software developer intern at GreatHire, I've had the opportunity to work on real-world projects from day one. The mentorship here is amazing — my skills in React and Python have grown tremendously in just a few months.",
    author: "Priya R., Summer Intern",
  },
  {
    text: "GreatHire doesn't treat you like just an intern. I was part of client meetings, sprint planning, and code reviews. I've learned more here than in any classroom.",
    author: "David M., Backend Developer Intern",
  },
  {
    text: "The team culture at GreatHire is collaborative and empowering. My input was valued, and I even led a module implementation for one of our internal tools. This experience gave me the confidence to pursue full-time roles after graduation.",
 author: "Sara T., Full-Stack",
  },
  {
    text: "The exposure to modern tools like GitHub Actions, Docker, and AWS was a game-changer. I now feel industry-ready thanks to GreatHire's hands-on approach.",
    author: "Jayden L.",
  },
  {
    text: "I joined with a basic understanding of web development, and now I'm proficient in REST APIs, Git workflows, and even containerization with Docker. GreatHire's structured mentorship and live projects accelerated my learning beyond expectations.",
    author: "Lavanya S.",
  },
  {
    text: "Grateful to Tanmai Ma'am for her guidance and support throughout my internship at GreatHire. Thanks to Sanket Babde Sir for fostering an innovative learning environment. This experience has strengthened my skills in AI and software development — I'm excited to apply what I've learned as I grow in my career!",
    author: "",
  },
  {
    text: "Grateful to Tanmai Ma'am and Sanket Sir for a valuable learning experience at GreatHire that boosted my AI and dev skills.",
  }
  
  
];


const ReviewCarousel = ({
  reviews,
  cardHeight = 235.2, // default height for clients
}: {
  reviews: { text: string; author: string }[];
  cardHeight?: number;
}) => {
  return ( 
    <div className="relative overflow-hidden py-6">
      {/* Gradient edges */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Scroll animation */}
      <div className="flex w-max animate-scroll">
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-lg p-4 mx-4 border border-gray-200 flex flex-col justify-between shadow-lg"
            style={{
              width: '336px',
              height: `${cardHeight}px`,
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Quotation Mark */}
            <span className="absolute top-2 left-4 text-6xl text-gray-300 opacity-75 font-serif">
              &ldquo;
            </span>
            <p className="mt-[8%] text-sm text-gray-800 mb-2 italic">{review.text}</p>
            {/* Author and Rating Container */}
            <div className="mt-auto"> {/* mt-auto pushes this container to the bottom */}
              <p className="text-xs text-blue-700 font-semibold">{review.author}</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.427 8.267 1.201-5.973 5.823 1.416 8.235L12 18.688l-7.378 3.883 1.416-8.235-5.973-5.823 8.267-1.201L12 .587z" /></svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default function Testimonial() {
=======

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clientLogos = [
    { name: "Tata", logo: tataImg },
    { name: "Tech Mahindra", logo: techmahindraImg },
    { name: "Wipro", logo: wiproImg },
    { name: "Teleperformance", logo: teleperformanceImg },
    { name: "Google", logo: googleImg },
    { name: "Kotak Life", logo: kotaklifeImg },
    { name: "DWLabs", logo: dwlabsImg },
    { name: "Voralsoft", logo: vortalsoftImg },
    { name: "Sriram Finance", logo: sriramfinanceImg },
    { name: "Raviraj", logo: ravirajImg },
    { name: "A1 Township", logo: a1townshipImg },
    { name: "SM Fibers", logo: smfibersImg },
    { name: "Zeel Media", logo: zeelmediaImg },
    { name: "Accenflair", logo: accenflairImg },
    { name: "Generic Sol", logo: genericsolImg },
    { name: "Bandhary Glass", logo: bandharyglassImg },
    { name: "Alkaline", logo: alkalineImg },
    { name: "AI Edge", logo: aiedgeImg },
    { name: "Clever Nest", logo: clevernestImg },
    { name: "Baklava", logo: baklavaImg },
    { name: "HRH", logo: hrhImg },
    { name: "Dadus", logo: dadusImg },
    { name: "Eeshanya", logo: eeshanyaImg },
  ];

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
  }, []);

>>>>>>> efe508976994abce12e90d525a0c57d0510de524
  return (
    <div className="w-full bg-gray-50 px-4 py-8 overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 font-[Oswald]">
        Our Client Reviews
      </h2>

<<<<<<< HEAD
      {/* Client Review Cards */}
      <div className="mt-4">
        <ReviewCarousel reviews={clientReviews} />
=======
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
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                }}
                className="py-4"
              >
                {clientLogos.map((client, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center h-24 bg-white rounded-lg shadow-sm p-4">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
>>>>>>> efe508976994abce12e90d525a0c57d0510de524
      </div>

<<<<<<< HEAD
      {/* Employee Reviews Heading with spacing from above */}
      <h2 className="text-2xl font-bold text-center text-blue-900 mt-12 mb-6 font-[Oswald]">
        Our Employee Reviews
      </h2>

      {/* Add more top margin to separate heading and cards */}
      <div className="mt-12">
        <ReviewCarousel reviews={candidateReviews} />
      </div>

      {/* Keyframes for scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { 
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Translate by half to loop through the duplicated set */
          }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite; /* Modify this to ensure a continuous loop */
        }
      `}</style>
    </div>
  );
}
=======
export default Testimonials;
>>>>>>> efe508976994abce12e90d525a0c57d0510de524

import React from "react";

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
export default function Testimonial() {
  return (
    <div className="w-full bg-gray-50 px-4 py-8 overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 font-[Oswald]">
        Our Client Reviews
      </h2>

      {/* Client Review Cards */}
      <div className="mt-4">
        <ReviewCarousel reviews={clientReviews} />
      </div>

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

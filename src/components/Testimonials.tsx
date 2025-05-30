import React from "react";


{/*import imgs from assets*/}

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


const clientReviews = [
  {
    text: "The team delivered a tailor-made solution that streamlined our operations and improved our customer experience significantly.Their ability to understand our business needs and translate them into a functional application was impressive.",
    author: "Sarah Mitchell, Operations Director",
  },
  {
    text: "Since partnering with them, our software uptime has consistently remained above 99.9%.Their proactive monitoring and quick response times are a game-changer.",
    author: "Anita Desai, Systems Lead",
  },
  {
    text: "Thanks to Great Hire’s deep understanding of AI and cloud technologies, we were able to scale our software development team quickly and cost-effectively.",
    author: "VP of Engineering,Healthcare Software Company",
  },
  {
    text: "Their recruitment team understands both the tech and the culture fit.Our AI R&D center wouldn’t be where it is today without their support.",
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
    author: "SHIVU-Head of Product",
  },
  {
    text: "As a fast-growing fintech, we needed full-stack developers with experience in AI-driven risk modeling. Great Hire exceeded our expectations.",
    author: "KIRAN-Hiring Manager",
  },
  {
    text: "Their team understood the nuances of our tech stack, culture, and urgency. We hired six exceptional software engineers in one quarter.",
    author: "Satish-Engineering Manager, IoT Software Company",
  },
  // --------
  {
    text: "The digital ad campaigns and local SEO optimizations helped us reach more patients in our area. Appointments doubled in just six weeks. We were amazed by the professionalism and data-driven approach",
    author: "Dr. Robert Patel, Director",
  },
  {
    text: "Partnering with GreatHire for our digital marketing talent was a game-changer. The professionals they placed helped us double our ROI on paid ads within three months. They truly understand the digital landscape and our business goals",
    author: "Sarah T., Marketing Director",
  },
  {
    text: "The digital marketing team we’ve built through GreatHire has completely transformed our online visibility. SEO, paid campaigns,content—every area has improved with their talent onboard.",
    author: "Laura J.,CMO ",
  },
  {
    text: "GreatHire helped us find a digital ad specialist who restructured our entire PPC campaign. Within 60 days, we saw a 45% decrease in cost-per-lead. They made hiring efficient and stress-free.",
    author: "Elena V.,VP of Growth",
  },
  {
    text: "GreatHire quickly connected us with a skilled digital strategist who reshaped our online campaigns.We saw better engagement within the first month Our website traffic doubled in 90 days thanks to the SEO specialist we hired through GreatHire.",
    author: "Nitish.,CEO",
  },
  {
    text: "The content strategist GreatHire connected us with brought a fresh voice to our brand.Blog traffic and newsletter engagement have soared since she joined.Their recruitment process was seamless and fast We launched our eCommerce site with a full marketing team from GreatHire.",

    author:"Raj.,P-Hiring Manager",
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
    author: "Priya R.,Summer Intern",
  },
  {
    text: "GreatHire doesn't treat you like just an intern. I was part of client meetings, sprint planning, and code reviews. I've learned more here than in any classroom.",
    author: "David M.,Backend Developer Intern",
  },
  {
    text: "The team culture at GreatHire is collaborative and empowering. My input was valued, and I even led a module implementation for one of our internal tools. This experience gave me the confidence to pursue full-time roles after graduation.",
    author: "Sara T.,Full-Stack",
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
    author: "Nazir",
  },
  {
    text: "GreatHire didn’t just give me an internship—they gave me a career path.The real-world exposure, resume-building support, and mock interviews made all the difference.I’m now working at a top-tier firm with a great salary, all thanks to the wonderful team at GreatHire!",
    author: "Sai Kiran.,-Marketing Analyst",
  },
  // --------------------------------------------------------------------------------------------------------------------------------
  {
    text: "Joining GreatHire as a digital marketing intern was a turning point in my career. The hands-on experience with real client projects and the constant support from senior marketers helped me grow rapidly.I gained skills in SEO, content creation, Google Ads,and analytics—all within just a few months!",
    author: "Ritika Sharma.,Digital Marketing Intren",
  },
  {
    text: "Starting as a digital marketing intern at GreatHire was the turning point in my career.The hands-on experience,guidance,and real-world exposure helped me secure a full-time role with an impressive package.Thank you,GreatHire team,for believing in me!",
    author: "Ravi K.,Digital Marketing Executive",
  },
  {
    text: "I joined GreatHire as a digital marketing intern with no prior experience.The mentorship and practical training I received here gave me the confidence and skills to land a job offer immediately after the internship.Forever grateful to the GreatHire team!",
    author: "Sneha M.,SEO Analyst",
  },
  {
    text: "From intern to full-time professional—GreatHire made it happen!Their digital marketing training is top-notch, and the placement support was exceptional.Thank you for setting the foundation for my career.",
    author: "Priya.S.,-Digital Marketing",
  },
  {
    text: "GreatHire’s internship program not only taught me valuable digital marketing skills but also helped me build a strong portfolio.I’m now working in a top agency with a competitive salary—none of this would’ve been possible without GreatHire’s support",
    author: "Aman R.,Content Strategist.",
  },
  {
    text: "Starting my career as an intern at GreatHire was the best decision I made.The team mentored me throughout the internship,helping me build both technical and soft skills.Thanks to their guidance and placement support,I secured a full-time role with an excellent package. Forever grateful to the GreatHire team!",
    author: "Aarav M.",
  },
];

const clientLogos = [
  
  { logo: accenflairImg, name: "Accenflair" },
  { logo: aiedgeImg, name: "AI Edge" },
  { logo: alkalineImg, name: "Alkaline" },
  { logo: baklavaImg, name: "Baklava" },
  { logo: bandharyglassImg, name: "Bandhary Glass" },
  { logo: clevernestImg, name: "CleverNest" },
  { logo: dadusImg, name: "Dadus" },
  { logo: dwlabsImg, name: "DWLabs" },
  { logo: genericsolImg, name: "Generic Solutions" },
  { logo: hrhImg, name: "HRH" },
  { logo: kotaklifeImg, name: "Kotak Life" },
  { logo: smfibersImg, name: "SM Fibers" },
  { logo: sriramfinanceImg, name: "Sriram Finance" },
  { logo: techmahindraImg, name: "Tech Mahindra" },
  { logo: googleImg, name: "Google" },
  { logo: teleperformanceImg, name: "Teleperformance" },
  { logo: vortalsoftImg, name: "VortalSoft" },
  { logo: wiproImg, name: "Wipro" },
  { logo: zeelmediaImg, name: "Zeel Media" },
  { logo: ravirajImg, name: "Raviraj" },
  { logo: eeshanyaImg, name: "Eeshanya" },
  { logo: tataImg, name: "Tata" },
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
              width: '400px',
              height: `${cardHeight}px`,
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Quotation Mark */}
            <span className="absolute top-2 left-4 text-6xl text-gray-300 opacity-75 font-serif">
              &ldquo;
            </span>


{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

            <p className="mt-[8%] text-sm text-gray-800 mb-2 italic">{review.text}</p>             {/* Change the font style in this className */}

{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}


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

      {/* Client Logo Carousel */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Companies</h2>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll space-x-8">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-24 bg-white rounded-lg shadow-sm p-4"
                  style={{ minWidth: '150px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for scroll animation */}
      <style>{`
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

import React, { useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Service = {
  id: number;
  title: string;
  animationUrl: string;
  description: string;
  subDescription: string;
};

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Job Postings",
      animationUrl:
        "https://lottie.host/fac14f9b-e374-491d-b1a8-930ec3b216bc/FcQJtV0P89.lottie",
      description: "We help companies find the best talent.",
      subDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia maxime quae maiores explicabo reiciendis mollitia deleniti, dignissimos placeat asperiores optio architecto ipsum nisi fuga!",
    },
    {
      id: 2,
      title: "Web Development",
      animationUrl:
        "https://lottie.host/5e343f28-acc6-421a-b29a-604a0d75bed8/987UBsYwAw.lottie",
      description: "Building high-quality modern websites.",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non luctus leo. Integer dapibus, quam nec finibus malesuada, justo turpis bibendum libero, a cursus ante nulla nec lorem.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      animationUrl:
        "https://lottie.host/5ad23d75-3ea5-4ff6-8d7d-73f68fb62d33/4vf8hJSGa7.lottie",
      description: "Crafting clean and intuitive interfaces.",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt voluptatibus culpa modi libero officia fugit. Voluptates alias quas doloribus, deleniti quis nihil explicabo neque velit!",
    },
    {
      id: 4,
      title: "SEO Optimization",
      animationUrl:
        "https://lottie.host/c113ab42-be3f-4c5c-90cd-c3415d091157/CFDgOTspUx.lottie",
      description: "Boost your visibility on search engines.",
      subDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corrupti aliquid, eos ipsa, exercitationem repellendus culpa voluptas voluptatibus pariatur quos debitis consequatur excepturi?",
    },
    {
      id: 5,
      title: "Content Writing",
      animationUrl:
        "https://lottie.host/d8910849-1242-4ab8-bfc7-839295c33fd7/hu6UKmclbp.lottie",
      description: "Engaging and SEO-friendly content writing.",
      subDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quae ad iure exercitationem maiores, cum soluta deleniti tenetur iusto. Modi illum labore hic quos sequi omnis explicabo odit!",
    },
    {
      id: 6,
      title: "Email Marketing",
      animationUrl:
        "https://lottie.host/62691aad-be70-40cd-afd3-f5051a3d3164/9fAczqaJCx.lottie",
      description: "Drive traffic and engagement via email.",
      subDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur corrupti in molestias, tempora, ea laboriosam voluptate optio. Sed assumenda voluptas minus iusto nisi!",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 360;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="p-6 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">My Services</h2>

      <div className="flex items-center">
        {/* Scroll Left */}
        <button
          onClick={() => scroll("left")}
          className="p-3 px-4 bg-gray-200 rounded-l hover:bg-gray-300"
        >
          ◀
        </button>

        {/* Scrollable Card Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {services.map(({ id, title, animationUrl, description, subDescription }) => (
            <div
              key={id}
              className={`min-w-[450px] max-w-[450px] h-[520px] bg-white p-6 rounded-xl shadow-lg flex-shrink-0 transition-all duration-300 transform scroll-snap-align-start
                ${hoveredCard === id ? "scale-105 shadow-xl" : "scale-100"}`}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-xl font-bold text-center mb-3">{title}</h3>

                <p className="text-sm text-gray-800 text-center mt-4">{description}</p>
              <div className="relative w-auto h-80 overflow-hidden">
                {/* Lottie Animation */}
                <div
                  className={`absolute inset-0 transition-all duration-500 transform ${
                    hoveredCard === id ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                  }`}
                >
                  <DotLottieReact src={animationUrl} loop autoplay />
                </div>

                {/* Sub-description */}
                <div
                  className={`absolute inset-0 flex items-center justify-center px-4 transition-all duration-500 transform ${
                    hoveredCard === id ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-700 text-left">{subDescription}</p>
                </div>
              </div>

              {/* Main Description */}
            </div>
          ))}
        </div>

        {/* Scroll Right */}
        <button
          onClick={() => scroll("right")}
          className="p-3 px-4 bg-gray-200 rounded-r hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Services;

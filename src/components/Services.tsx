import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Service = {
  id: number;
  title: string;
  animationUrl: string;
  description: string;
};

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Job Postings",
      animationUrl:
        "https://lottie.host/fac14f9b-e374-491d-b1a8-930ec3b216bc/FcQJtV0P89.lottie",
      description: "I help improve your website’s visibility on search engines.",
    },
    {
      id: 2,
      title: "Web Development",
      animationUrl:
        "https://lottie.host/5e343f28-acc6-421a-b29a-604a0d75bed8/987UBsYwAw.lottie",
      description: "I build responsive and user-friendly websites.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      animationUrl:
        "https://lottie.host/5ad23d75-3ea5-4ff6-8d7d-73f68fb62d33/4vf8hJSGa7.lottie",
      description: "I design sleek and intuitive user interfaces.",
    },
    {
      id: 4,
      title: "SEO Optimization",
      animationUrl:
        "https://lottie.host/c113ab42-be3f-4c5c-90cd-c3415d091157/CFDgOTspUx.lottie",
      description: "I help improve your website’s visibility on search engines.",
    },
    {
      id: 5,
      title: "Content Writing",
      animationUrl:
        "https://lottie.host/d8910849-1242-4ab8-bfc7-839295c33fd7/hu6UKmclbp.lottie",
      description: "I help improve your website’s visibility on search engines.",
    },
    {
      id: 6,
      title: "Email Marketing",
      animationUrl:
        "https://lottie.host/62691aad-be70-40cd-afd3-f5051a3d3164/9fAczqaJCx.lottie",
      description: "I help improve your website’s visibility on search engines.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="p-4  relative">
      <h2 className="text-2xl font-bold mb-4 text-center">My Services</h2>

      <div className="flex items-center">
        {/* Previous Button */}
        <button
          onClick={() => scroll("left")}
          className="p-2 px-4 bg-gray-200 rounded-l hover:bg-gray-300"
        >
          ◀
        </button>

        {/* Card Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-2"
        >
          {services.map(({ id, title, animationUrl, description }) => (
            <div
              key={id}
              className="min-w-[250px] bg-white p-4 rounded-lg shadow hover:shadow-lg flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-center">{title}</h3>
              <div className="h-32  mb-2">
              <p className="text-sm text-gray-600 text-center mt-1">
                {description}
              </p>
                <DotLottieReact src={animationUrl} loop autoplay />
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll("right")}
          className="p-2 px-4 bg-gray-200 rounded-r hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Services;

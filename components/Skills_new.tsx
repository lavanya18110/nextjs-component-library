"use client";

import { skills } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Word cloud layout with different sizes and positions
  const skillsWithLayout = skills.map((skill, index) => ({
    ...skill,
    // Assign different sizes based on importance/category
    size: index < 5 ? 'text-5xl' : index < 12 ? 'text-4xl' : index < 20 ? 'text-3xl' : 'text-2xl',
    // Assign positions (grid-based with calculated spacing)
    position: {
      top: `${10 + (Math.floor(index / 5) * 13)}%`,
      left: `${10 + ((index % 5) * 18)}%`,
    },
  }));

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden border-t border-orange-500/50">
      {/* Starfield background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-20 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          {/* Word Cloud */}
          <div className="relative h-[700px] md:h-[800px]">
            {skillsWithLayout.map((skill, index) => (
              <div
                key={skill.name}
                className={`absolute transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  top: skill.position.top,
                  left: skill.position.left,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span
                  className={`${skill.size} font-semibold text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 cursor-default whitespace-nowrap`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

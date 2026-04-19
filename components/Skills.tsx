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

  // Duplicate skills array for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden border-t border-orange-500/50">
      {/* Starfield background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => {
          const floatAnimations = ['float', 'float2', 'float3'];
          const randomFloat = floatAnimations[i % 3];
          const duration = Math.random() * 10 + 15;
          const delay = Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 'px',
                height: Math.random() * 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.2,
                animation: `${randomFloat} ${duration}s ease-in-out infinite, twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Tech I Use <span className="text-4xl">⚡</span>
          </h2>

          {/* Auto-scrolling Carousel */}
          <div className="relative overflow-hidden py-10">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="flex animate-scroll-left">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-28 h-28 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/30 flex flex-col items-center justify-center gap-2 hover:border-purple-400 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    <span className="text-4xl">{skill.icon}</span>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

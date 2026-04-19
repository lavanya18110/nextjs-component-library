"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: "💼",
      title: "5+ Years Experience",
      description: "Building modern web applications",
    },
    {
      icon: "🚀",
      title: "50+ Projects",
      description: "Successfully delivered and deployed",
    },
    {
      icon: "🎯",
      title: "100% Client Satisfaction",
      description: "Committed to excellence",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Crafting Digital Experiences with Passion
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                I&apos;m a passionate Frontend Developer with a keen eye for design and a love for creating 
                seamless user experiences. My journey in web development started with a curiosity about 
                how websites work, and it has evolved into a fulfilling career.
              </p>
              <p>
                I specialize in building responsive, performant, and accessible web applications using 
                modern technologies like React, Next.js, and TypeScript. I believe in writing clean, 
                maintainable code and following best practices.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-3">
              {[
                "🎨 Pixel-perfect UI implementation",
                "⚡ Performance optimization enthusiast",
                "🔧 Clean code advocate",
                "🌟 Continuous learner",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-2xl">{point.split(" ")[0]}</span>
                  <span className="text-lg">{point.substring(point.indexOf(" ") + 1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Looking for My Next Role</h4>
              <p className="text-blue-100 mb-4">
                I&apos;m seeking opportunities to join innovative teams where I can contribute my skills, 
                grow as a developer, and help build products that make a difference.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { projects } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSelectProject = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden border-t border-orange-500/50">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Three Cards Display - Side by Side with smooth transitions */}
          <div className="relative w-full max-w-6xl mx-auto min-h-[650px] flex items-center justify-center overflow-visible">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {projects.map((project, index) => {
                // Calculate position relative to active index
                let position = index - activeIndex;
                
                // Handle wrapping (circular behavior)
                if (position > projects.length / 2) {
                  position -= projects.length;
                } else if (position < -projects.length / 2) {
                  position += projects.length;
                }
                
                // IMPORTANT: Only show 3 cards at a time (left, center, right)
                // Hide all other cards - they'll appear when user navigates
                if (Math.abs(position) > 1) return null;
                
                const isActive = position === 0;
                
                // Calculate horizontal offset based on position
                // Left card: -500px, Center: 0px, Right: +500px
                const translateX = position * 500;
                const scale = isActive ? 1 : 0.8;
                const opacity = isActive ? 1 : 0.9; // Side cards 50% visible
                const blur = isActive ? 0 : 3; // Light blur on side cards
                const zIndex = isActive ? 20 : 10;
                
                return (
                  <div
                    key={project.id}
                    onClick={() => !isActive && handleSelectProject(index)}
                    className={`absolute left-1/2 top-1/2 transition-all duration-700 ease-in-out ${
                      !isActive ? 'cursor-pointer hover:opacity-50' : ''
                    }`}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      filter: `blur(${blur}px)`,
                      zIndex,
                    }}
                  >
                    <ProjectCard project={project} isActive={isActive} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSelectProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-pink-500 to-orange-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: typeof projects[0];
  isActive: boolean;
}

function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <div className={`w-[280px] md:w-[350px] lg:w-[450px] transition-all duration-700 ${
      isActive ? 'shadow-[0_0_50px_rgba(168,85,247,0.5)]' : ''
    }`}>
      {/* Project Card */}
      <div className={`bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
        isActive ? 'border-purple-400' : 'border-purple-500/50'
      }`}>
        {/* Project Image */}
        <div className="relative h-48 md:h-56 lg:h-64 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
          {/* Placeholder gradient image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-white/20">
              {project.title.substring(0, 2).toUpperCase()}
            </div>
          </div>
          {/* Overlay - Always visible on active card */}
          {isActive && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-300 mb-4 text-sm md:text-base line-clamp-3">{project.description}</p>

          {/* Tech Stack Icons/Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-md flex items-center gap-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

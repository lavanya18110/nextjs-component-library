"use client";

import { useEffect, useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  icon: string;
  technologies: string[];
  projects: string[];
}

export default function Experience() {
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

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences: Experience[] = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      period: "August 2022 - current",
      icon: "VR",
      technologies: [
        "JavaScript",
        "Python",
        "C#",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Unity",
        "Azure",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Redux",
        "Three.js",
        "Vitest",
        "Jest",
        "Vite",
        "CI/CD",
        "Docker",
        "Jenkins",
        "Figma",
      ],
      projects: [
        "Built modern web applications",
        "Successfully delivered and deployed",
        "Worked with cross-functional teams",
      ],
    },
    {
      title: "AR/VR Software Developer (Co-op & Part-Time)",
      company: "Innovation Lab",
      period: "January 2021 - December 2021",
      icon: "C",
      technologies: [
        "C#",
        "Unity",
        "Jira",
        "Confluence",
        "BitBucket",
        "Agile",
        "Scrum",
        "3D",
        "Git",
        "Figma",
      ],
      projects: [
        "Motive Power DLX",
        "ACES DLX",
        "Machine Shop DLX",
        "Bloom DLX",
      ],
    },
    {
      title: "Mobile Application Developer (Co-op)",
      company: "College",
      period: "June 2020 - December 2020",
      icon: "C",
      technologies: [
        "Java",
        "Swift",
        "Python",
        "Figma",
        "Firebase",
        "AR",
        "Agile",
        "Scrum",
        "Git",
        "GitHub",
      ],
      projects: ["AR Mask Sizing Assistant"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden border-t border-orange-500/50">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Work Experience
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  {/* Content Card */}
                  <div className={`w-[calc(50%-4rem)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-gray-400 mb-4">{exp.company}</p>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Projects */}
                      <div className="text-left">
                        <p className="text-gray-300 font-semibold mb-2">Projects:</p>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                          {exp.projects.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gray-800 border-4 border-gray-700 rounded-full">
                    <span className="text-orange-500 font-bold text-xl">{exp.icon}</span>
                  </div>

                  {/* Date */}
                  <div className={`w-[calc(50%-4rem)] ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

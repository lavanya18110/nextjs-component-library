import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, payment integration, and responsive design.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    techStack: ["Angular", "TypeScript", "Firebase", "Material UI"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://task-manager-demo.vercel.app",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather forecasting dashboard with interactive maps, historical data visualization, and location-based alerts.",
    techStack: ["React", "Next.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://weather-dashboard-demo.vercel.app",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Real-time social media analytics platform with sentiment analysis, trend tracking, and customizable reporting dashboards.",
    techStack: ["Vue.js", "TypeScript", "D3.js", "Python", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/social-analytics",
    liveLink: "https://social-analytics-demo.vercel.app",
  },
  {
    id: 5,
    title: "Video Streaming Platform",
    description: "A video streaming service with live chat, recommendations, playlists, and adaptive bitrate streaming.",
    techStack: ["React", "Next.js", "Redis", "AWS S3", "WebRTC"],
    githubLink: "https://github.com/yourusername/video-platform",
    liveLink: "https://video-platform-demo.vercel.app",
  },
];

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "Angular", icon: "🅰️", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "JavaScript", icon: "💛", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Node.js", icon: "💚", category: "backend" },
  { name: "Express", icon: "🚂", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "backend" },
  { name: "Git", icon: "📚", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "AWS", icon: "☁️", category: "tools" },
];

export const personalInfo = {
  name: "Your Name",
  title: "Frontend Developer",
  tagline: "Building beautiful, responsive web experiences that users love",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resumeLink: "/resume.pdf",
};

# 🎨 Modern Portfolio Website

A stunning, fully responsive portfolio website built with Next.js 16, React, TypeScript, and Tailwind CSS. Features beautiful animations, dark mode, and a modern design that will impress recruiters!

## ✨ Features

- ✅ **Modern Design**: Clean, professional UI with gradient accents
- ✅ **Fully Responsive**: Perfect on all devices (mobile, tablet, desktop)
- ✅ **Dark Mode**: Toggle between light and dark themes
- ✅ **Smooth Animations**: Fade-in effects and scroll animations
- ✅ **Interactive Components**: Hover effects and transitions
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML
- ✅ **TypeScript**: Fully typed for better development experience
- ✅ **Contact Form**: Built-in contact form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### 1. Personal Information

Edit `lib/data.ts` to update your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",              // Your full name
  title: "Frontend Developer",    // Your job title
  tagline: "...",                  // Your tagline
  email: "your.email@example.com", // Your email
  linkedin: "...",                 // LinkedIn profile URL
  github: "...",                   // GitHub profile URL
  resumeLink: "/resume.pdf",       // Path to your resume
};
```

### 2. Projects

Update your projects in `lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    techStack: ["React", "Next.js", "TypeScript"],
    githubLink: "https://github.com/username/repo",
    liveLink: "https://demo.vercel.app",
  },
  // Add more projects...
];
```

### 3. Skills

Customize your skills in `lib/data.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  // Add more skills...
];
```

### 4. About Section

Edit the About section content in `components/About.tsx` to tell your story.

### 5. Resume

Place your resume PDF in the `public` folder and update the `resumeLink` in `lib/data.ts`.

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Navbar.tsx            # Navigation with dark mode
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skills section
│   ├── SkillCard.tsx         # Skill card component
│   ├── Projects.tsx          # Projects section
│   ├── ProjectCard.tsx       # Project card component
│   ├── Contact.tsx           # Contact section with form
│   └── Footer.tsx            # Footer component
├── lib/
│   └── data.ts               # Your personal data
├── types/
│   └── index.ts              # TypeScript type definitions
└── public/
    └── resume.pdf            # Your resume (add this)
```

## 🎨 Sections

1. **Hero**: Eye-catching introduction with your name, title, and CTA buttons
2. **About**: Your story, experience, and key highlights
3. **Skills**: Tech stack organized by category with visual cards
4. **Projects**: Showcase your best work with descriptions and links
5. **Contact**: Contact information and functional contact form
6. **Footer**: Social links and quick navigation

## 🌈 Color Customization

The portfolio uses a blue-to-purple gradient theme. To change colors, update the gradient classes in the components:

- `from-blue-600 to-purple-600` - Main gradient
- Modify in: Navbar, Hero, section headers, buttons, etc.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Build for Production

```bash
npm run build
npm run start
```

## 🎓 Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Geist Font** - Modern font family

## 💡 Tips for Recruiters

This portfolio is designed to:
- ✅ Load fast and perform well
- ✅ Work perfectly on all devices
- ✅ Showcase technical skills through code quality
- ✅ Demonstrate design sensibility
- ✅ Highlight projects and experience

## 📝 License

Feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to contribute? Feel free to open an issue or submit a pull request!

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

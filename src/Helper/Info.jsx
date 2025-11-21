import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { HeroImage, ProjectImage } from "./Image";

export const AuthorInfo = {
  name: "Ranocoder",
  role: "Full Stack Developer",
  image: HeroImage.Author,
  description:
    "  As a full-stack developer, I specialize in both front-end and back-end technologies. I work with frameworks like React, Node.js, and databases like MongoDB and MySQL. My expertise allows me to create seamless web applications, handling everything from user interfaces to server-side logic and database management for scalable solutions.",
  socialLinks: {
    github: "",
    linkedin: "",
    twitter: "",
  },
};

export const educationData = [
  {
    title: "M.S.C in Computer Science",
    university: "Daffodil International University",
    date: "2018 - 2022",
    icon: <GiGraduateCap />,
  },
  {
    title: "B.S.C in Computer Science",
    university: "Daffodil International University",
    date: "2018 - 2022",
    icon: <GiGraduateCap />,
  },
  {
    title: "APP Development",
    university: "Creative It Institute",
    date: "2018 - 2022",
    icon: <GiGraduateCap />,
  },
  {
    title: "MERN Stack Development",
    university: "Udemy",
    date: "2018 - 2022",
    icon: <GrTechnology />,
  },
];

export const FrontEnd = [
  { id: 1, name: "HTML", icon: <FaHtml5 /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", icon: <IoLogoJavascript /> },
  { id: 4, name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { id: 5, name: "React", icon: <FaReact /> },
];
export const BackEnd = [
  { id: 1, name: "HTML", icon: <FaHtml5 /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", icon: <IoLogoJavascript /> },
  { id: 4, name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { id: 5, name: "React", icon: <FaReact /> },
];

export const ProjectInfo = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project1,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "E-commerce Website2",
    description:
      "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project2,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project2",
    live: "https://example2.com",
  },
  {
    id: 3,
    title: "E-commerce Website3",
    description:
      "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project3,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project3",
    live: "https://example3.com",
  },
  {
    id: 4,
    title: "E-commerce Website4",
    description:
      "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project4,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project4",
    live: "https://example4.com",
  },
  {
    id: 5,
    title: "E-commerce Website5",
    description:
      "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project5,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project5",
    live: "https://example5.com",
  },
];

export const BlogInfo = [
  {
    id: 1,
    title: "Tech Insights Vol. 1",
    description:
      "Learn how to master React performance, understand the virtual DOM, and use libraries like Virtuoso for seamless scrolling.",
    fullContent:
      "In this comprehensive guide, we'll explore React performance optimization techniques that can dramatically improve your application's speed and user experience. We'll dive deep into the virtual DOM, understand how React efficiently updates the UI, and learn about powerful libraries like Virtuoso that enable smooth infinite scrolling even with thousands of items. You'll discover best practices for component optimization, memoization strategies, and how to avoid common performance pitfalls.",
    image: "https://picsum.photos/seed/10/300/200",
    date: "Nov 1, 2024",
    author: "Admin",
    category: "Dev",
    tags: ["React", "Performance", "Virtual DOM", "Virtuoso"],
  },
  {
    id: 2,
    title: "Tech Insights Vol. 2",
    description:
      "Learn how to master React performance, understand the virtual DOM, and use libraries like Virtuoso for seamless scrolling.",
    fullContent:
      "Explore advanced JavaScript patterns and modern ES6+ features that will take your coding skills to the next level. This article covers async/await, promises, destructuring, spread operators, and much more with practical examples.",
    image: "https://picsum.photos/seed/11/300/200",
    date: "Nov 2, 2024",
    author: "Admin",
    category: "Dev",
    tags: ["JavaScript", "ES6", "Programming"],
  },
  {
    id: 3,
    title: "Tech Insights Vol. 3",
    description:
      "Learn how to master React performance, understand the virtual DOM, and use libraries like Virtuoso for seamless scrolling.",
    fullContent:
      "Discover the power of Tailwind CSS and how it can revolutionize your styling workflow. Learn utility-first CSS principles, responsive design patterns, and how to create beautiful, maintainable designs quickly.",
    image: "https://picsum.photos/seed/12/300/200",
    date: "Nov 3, 2024",
    author: "Admin",
    category: "Dev",
    tags: ["CSS", "Tailwind", "Design"],
  },
  {
    id: 4,
    title: "Tech Insights Vol. 4",
    description:
      "Learn how to master React performance, understand the virtual DOM, and use libraries like Virtuoso for seamless scrolling.",
    fullContent:
      "Understanding state management in React applications. Compare different solutions like Redux, Context API, Zustand, and Recoil to find the best fit for your project.",
    image: "https://picsum.photos/seed/13/300/200",
    date: "Nov 4, 2024",
    author: "Admin",
    category: "Dev",
    tags: ["React", "State Management", "Redux"],
  },
  {
    id: 5,
    title: "Tech Insights Vol. 5",
    description:
      "Learn how to master React performance, understand the virtual DOM, and use libraries like Virtuoso for seamless scrolling.",
    fullContent:
      "Building scalable Node.js applications with best practices. Learn about microservices architecture, API design, security considerations, and deployment strategies.",
    image: "https://picsum.photos/seed/14/300/200",
    date: "Nov 5, 2024",
    author: "Admin",
    category: "Dev",
    tags: ["Node.js", "Backend", "API"],
  },
];

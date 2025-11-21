import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { ProjectImage } from "./Image";

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
    description: "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project1,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "E-commerce Website2",
    description: "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project2,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project2",
    live: "https://example2.com",
  },
  {
    id: 3,
    title: "E-commerce Website3",
    description: "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project3,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project3",
    live: "https://example3.com",
  },
  {
    id: 4,
    title: "E-commerce Website4",
    description: "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project4,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project4",
    live: "https://example4.com",
  },
  {
    id: 5,
    title: "E-commerce Website5",
    description: "Discover Brand Name, your ultimate online destination for quality products and seamless shopping experience.",
    image: ProjectImage.Project5,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/example/project5",
    live: "https://example5.com",
  },

  ]
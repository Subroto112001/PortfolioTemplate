import {
  FaExternalLinkAlt,
  FaFacebook,
  FaFileCode,
  FaGithub,
  FaHashtag,
  FaLinkedinIn,
  FaPenFancy,
  FaTwitter,
} from "react-icons/fa";
import { IoMdReturnLeft, IoMdReturnRight } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { PiStudentFill, PiToolbox } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";

export const slideBarIcon = [
  {
    id: 1,
    icon: <RiHome5Line />,
    path: "/",
  },
  {
    id: 2,
    icon: <PiStudentFill />,
    path: "/education",
  },
  {
    id: 3,
    icon: <LuBrain />,
    path: "/skill",
  },
  {
    id: 4,
    icon: <FaFileCode />,
    path: "/project",
  },
  {
    id: 5,
    icon: <FaPenFancy />,
    path: "/blog",
  },
];



export const socialIcon = [
  {
    id: 1,
    icon: <FaGithub />,
    name: "GitHub",
    url: "https://github.com/",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    url: "https://linkedin.com/",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    name: "Twitter",
    url: "https://twitter.com/",
  },
  {
    id: 4,
    icon: <FaFacebook />,
    name: "Facebook",
    url: "https://facebook.com/",
  },
];

export const ProjectIcon = {
  github: <FaGithub />,
  live: <FaExternalLinkAlt />,
  iclose: <IoClose />,
};
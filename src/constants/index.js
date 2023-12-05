import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: express,
  //   name: "Express",
  //   type: "Backend",
  // },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  // {
  //   imageUrl: mongodb,
  //   name: "MongoDB",
  //   type: "Database",
  // },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: nodejs,
  //   name: "Node.js",
  //   type: "Backend",
  // },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //   imageUrl: redux,
  //   name: "Redux",
  //   type: "State Management",
  // },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/wadhwashivam",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/wadhwashivam7877/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Bank Management System",
    description:
      "An ATM Simulator implemented in JAVA with MySQL Database. This system allows user to perform various banking operations such as depost, withdrawl, balance enquiry and a lot more.",
    link: "https://github.com/wadhwashivam/Bank-Management-System",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Chatting Application",
    description:
      "This is a simpe JAVA-based chatting application with a graphical user interface (GUI) for both server and client sides. The application allows users to send and receive messages in real-time within a local network.",
    link: "https://github.com/wadhwashivam/Chatting_Application_Java",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Dominos Pizza Order",
    description:
      "This Python-based Donmino's Pizza Ordering System allows users to interactively browse the menu, add items to their order, and place an order for delivery or pickup. The system uses the pizzapy library and integrates an API.",
    link: "https://github.com/wadhwashivam/Dominos-Pizza-Order",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Static Portfolio",
    description:
      "A Resume website built entirely from scratch using HTML, CSS, and JS. The website showcases beautiful animations and is designed to be fully responsive.",
    link: "https://github.com/wadhwashivam/Resume",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Modern Login Page",
    description:
      "This project provides a moder login page UI implemented using HTML, CSS and JS. The interface features a sign-up and sign-in form with social media icons and a toggle functionality for a seamless user experience.",
    link: "https://github.com/wadhwashivam/Modern-Login-Page",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Chat Application",
    description:
      "A chat application built using ReactJS and NodeJS, utilizing the ChatEngine.io platform to provide real-time messaging capabilities. The application is designed for chat and communication between users and features a user-friendly interface created with the 'react-chat-engine-pretty' package.",
    link: "https://github.com/wadhwashivam/Chat-App-ReactJs-NodeJs",
  },
];

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  TbBrandNextjs,
  TbBrandSupabase,
  TbBrandFramerMotion,
} from "react-icons/tb";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import {
  SiNeo4J,
  SiNeovim,
  SiPostman,
  SiGraphql,
  SiShadcnui,
  SiReact,
} from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export const personalInfo = {
  name: "Arya Bharadwaz",
  title: "Full Stack Developer",
  email: "arya.bharadwaz@gmail.com",
  linkedin: "https://linkedin.com/in/arya-gg",
  github: "https://github.com/dr-executioner",
  resumeLink: "/Aarjya_Bharadwaz_Resume.pdf",
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web.",
};

export const education = [
  {
    institution: "Gandhi Institute For Technology",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "June 2018 - May 2022",
    score: "CGPA: 8/10",
  },
  {
    institution: "LPS Public School",
    degree: "Class 12th CBSE",
    duration: "April 2017 - May 2018",
    score: "82%",
  },
  {
    institution: "LPS Public School",
    degree: "Class 10th CBSE",
    duration: "April 2015 - May 2016",
    score: "87.5%",
  },
];

export const projects = [
  {
    title: "CliChat",
    tech: ["Golang", "Websockets", "NeoVim", "BubbleTea"],
    description:
      "A lightweight CLI chat app built with Go, WebSockets, and the amazing Bubbletea TUI framework. ✨ Features Real-time messaging using WebSockets, 💬 Interactive terminal UI powered by Bubbletea & Lipgloss, 🧠 Simple architecture with hub-based broadcast model, 🔧 Built with idiomatic Go using net/http and gorilla/websocket. ",
    date: "August 2025 – September 2025",
    githubLink: "https://github.com/dr-executioner/clichat",
    liveLink: null,
    category: "Terminal Ui",
    icon: <FaGolang size={24} className="text-accent-1" />,
  },
  {
    title: "Sentiment Analysis API – Gemini Powered",
    tech: ["Typescript", "Node.js", "Express.js", "Supabase"],
    description:
      "A robust Node.js + TypeScript backend service for sentiment analysis, designed to intelligently filter and process messages from a portfolio’s “Contact Me” section. AI-powered, built with Railway cloud support, Docker-ready, and equipped with anti-abuse mechanisms for real-world deployment. 🚀 Features Google Gemini Integration: Uses Gemini generative AI to classify the usefulness and tone of incoming messages. Intelligent Filtering: Automatically screens out messages containing slang, random spam, or low-effort text before forwarding.",
    date: "October 2025 – Present",
    githubLink: "https://github.com/dr-executioner/Sa-service",
    liveLink: null,
    category: "Backend",
    icon: <FaNodeJs size={24} className="text-accent-1" />,
  },
  {
    title: "System HealthPulse",
    tech: [
      "React JS",
      "Typescript",
      "WebSockets",
      "Golang (Go)",
      "REST API",
      "Docker",
    ],
    description:
      "Built a cross-platform system health tracking solution designed for Turborepo workspaces. The platform consists of a React-based dashboard for monitoring real-time health metrics across all users. On the backend, a Golang service (functioning as a backend-for-frontend, or BFF) aggregates and manages user data. Users install a lightweight Golang application (cross-compiled for Windows, Mac, Linux) that runs as a background service. This app periodically gathers key system health information—such as CPU, memory, and uptime—and securely transmits updates every 5–10 seconds to the backend server. Incoming data is processed instantly and reflected on the dashboard, ensuring administrators always have an up-to-date view of their team's system health. This architecture enables robust, responsive monitoring for distributed teams, combining efficient Go services with a modern web frontend for actionable insights",
    date: "June 2025",
    githubLink: "https://github.com/dr-executioner/Syshealth-fe",
    liveLink: null,
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "Data Weaver",
    tech: [
      "React JS",
      "Shadcn Ui",
      "Redux Toolkit",
      "Express",
      "Neo4j",
      "Rest Api",
    ],
    description:
      "DataWeaver is a graph analysis web application that visualizes relationships between nodes using data from a Neo4j graph database. It can display thousands of nodes with smooth interactive features such as zooming, panning, filtering, and querying, enabling users to explore complex networks with ease. The frontend is built using React, incorporating react-force-graph-2d for 2D force-directed graph rendering. Efficient data fetching and caching are handled by react-query, while memoize-one optimizes performance by memoizing computation-heavy functions.",
    date: "November 2024",
    githubLink: "https://github.com/dr-executioner/data-weaver",
    liveLink: null,
    category: "Data Visualisation",
    icon: <SiReact size={24} className="text-accent-1" />,
  },
  {
    title: "FinBoard",
    tech: ["React.js", "Shadcn Ui", "Tailwind Css", "Google Apps Script"],
    description:
      "Engineered FinBoard’s core plugin from inception, using React to build a scalable, maintainable architecture for future growth. Collaborated closely with designers to convert wireframes into pixel-perfect components utilizing ShadCN-UI and Tailwind CSS, ensuring a polished user interface. Developed a REST API layer with React Query to enable caching and real-time updates, boosting performance by up to 50%. Implemented automatic data refreshes and efficient fetch strategies to optimize user experience and application responsiveness. Managed global state effectively with Redux, coordinating data flow across multiple components and features. This approach maintained consistency and simplified state updates, even as the application scaled.",
    date: "July 2023 - Sept 2023",
    githubLink: "https://github.com/dr-executioner/gsplugin-finboard",
    liveLink: null,
    category: "Fintech",
    icon: <FaDatabase size={24} className="text-accent-1" />,
  },
];

export const skills = {
  languages: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SCSS", icon: <BsFiletypeScss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Golang", icon: <FaGolang /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Material Ui", icon: <HiOutlineBuildingLibrary /> },
    { name: "Shadcn Ui", icon: <SiShadcnui /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Next JS", icon: <TbBrandNextjs /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
  ],
  databases: [
    { name: "Rest Api", icon: <TbApi /> },
    { name: "GraphQl", icon: <SiGraphql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgresSql", icon: <BiLogoPostgresql /> },
    { name: "Neo4j", icon: <SiNeo4J /> },
    { name: "Supabase", icon: <TbBrandSupabase /> },
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "NeoVim", icon: <SiNeovim /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Google Cloud Platform", icon: <DiGoogleCloudPlatform /> },
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
  ],
};

export const leadershipAndInvolvement = [
  {
    role: "Software Engineer",
    organization: "Software SImulations and Cyberspace - Singapore",
    duration: "Jan 2024 - Nov 2025",
    points: [
      "Tech Stack: React, TypeScript, Tailwind CSS, SCSS, Radix Ui, REST APIs, Microfrontend Architecture",
      "Built and maintained a microfrontend-based enterprise application using React, TypeScript, and Tailwind CSS",
      "Integrated a report dashboard with a trend analysis app via messageBus, improving modularity and real-time data consistency",
      "Implemented interactive graph visualizations using @antv/g6 and react-force-graph-2d for scalable analytics",
      "Contributed to the Backend for Frontend (BFF) layer using Node.js, designing REST endpoints and optimizing performance.",
      "Designed document schemas in MongoDB for stateful components and app configurations",
    ],
  },
  {
    role: "Software Engineer",
    organization: "HappyMonk Ai Labs - Bengaluru",
    duration: "July 2022 - Jan 2024",
    points: [
      "Tech Stack: Tech Stack: Typescript, NextJs, Material Ui, GraphQl, React-Query",
      "Fullstack development of an interactive graph analysis web app, designing a Next.js + Apollo Client frontend integrated with a Go + SQL backend to serve structured relationship data for seamless, data-rich visualizations.",
      "Developed a real-time logging module with persistent storage in MongoDB",
      "Implemented server-side rendering and optimized data-fetching, improving load speeds by 40%",
    ],
  },
  {
    role: "Software Engineer Intern",
    organization: "HappyMonk Ai Labs - Bengaluru",
    duration: "Jan 2022 - Jun 2022",
    points: [
      "Tech Stack: Typescript, NextJs, Material Ui, GraphQl",
      "Implemented URQL for GraphQL data fetching, enhancing blog section performance by reducing load times by 40% and increasing user interaction efficiency",
      "Integrated URQL for GraphQL data fetching, improving performance of blog section by 20%.",
      "Built interactive maps using Mapbox GL and implemented real-time styling logic based on userinteractions",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};

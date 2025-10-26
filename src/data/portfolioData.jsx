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
import { TbBrandNextjs, TbBrandSupabase, TbBrandFramerMotion } from "react-icons/tb";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import {
  SiNeo4J,
  SiNeovim,
  SiPostman,
  SiGraphql,
  SiShadcnui,
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
    title: "AgriSure",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Improved financial access for over 12,000 farmers boosting microloan approvals by 35% via CIBIL-based lending, integrating AI insights, and Hindi support via Google Translation. Engineered the full-stack system, handling frontend UI, backend API and database management.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/aditiarya37/AgriSure",
    liveLink: null,
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "BuildBridge",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/aditiarya37/BuildBridge", // Replace with actual link
    liveLink: "https://build-bridge-seven.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "FarmConnect",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.",
    date: "Feb 2025 – Present",
    githubLink: "https://github.com/aditiarya37/FarmConnect",
    liveLink: "https://farm-connect-iota-psi.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "WealthWise",
    tech: ["React JS", "Node JS", "Firebase", "API Integration"],
    description:
      "Enhanced financial literacy and user engagement by 40% through an interactive fintech platform integrating gamification. Developed an engaging React UI with gamified elements ensuring smooth user interactions.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/aditiarya37/WealthWise",
    liveLink: "https://wealthwisefinance.vercel.app/",
    category: "Fintech",
    icon: <SiFirebase size={24} className="text-accent-1" />,
  },
  {
    title: "Blood Shortage Survey and Dashboard",
    tech: ["React.js", "Node.js", "MongoDB"],
    description:
      "Increased efficiency of blood shortage tracking for healthcare organizations by 60% through a real-time analytics dashboard. Built an intuitive React.js dashboard with real-time charts and data visualizations.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/aditiarya37/BloodLink",
    liveLink: null,
    category: "Healthcare",
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
    role: "Junior Partner",
    organization: "The Apex Circle (TAC)",
    duration: "Jan 2025 – Present",
    points: [
      "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
      "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
    ],
  },
  {
    role: "Technical Executive",
    organization: "Computer Society of India, CU Student Branch",
    duration: "Nov 2024 – Present",
    points: [
      "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
      "Coordinated with faculty and industry experts to bring technical opportunities to students.",
    ],
  },
  {
    role: "AMCAT 2nd Rank Holder",
    organization: "Chandigarh University",
    duration: "Sept 2024",
    points: [
      "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
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

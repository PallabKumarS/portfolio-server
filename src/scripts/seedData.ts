/* eslint-disable no-console */
import mongoose from "mongoose";
import AboutModel from "../app/modules/about/about.model";
import config from "../app/config";
import SkillModel from "../app/modules/skill/skill.model";

const aboutData = {
  image:
    "https://res.cloudinary.com/dchqfpvjb/image/upload/v1747655595/IMG_4772_zpba90.heic", // Replace with your actual image URL
  name: "Pallab Kumar Sarker",
  title: "MERN Stack Web Developer",
  bio: "As a B.Sc. student studying in Electrical and Electronic Engineering, I am currently exploring web development. I am proficient in HTML, CSS, Tailwind CSS, React, Mongoose and Node js. I also have done some projects with my current skill in web development. I am currently also exploring Next js and Redux js. I am willing to dive deep into the realm of web development. My ambition is to evolve into a versatile Full Stack Developer.",
  education: [
    {
      degree: "Bsc in Engineering",
      institution: "Begum Rokeya University, Rangpur",
      department: "Department of Electrical and Electronic Engineering",
    },
    {
      degree: "HSC",
      institution: "Cantonment Public School & College, Rangpur",
    },
    {
      degree: "SSC",
      institution: "Cantonment Public School & College, Rangpur",
    },
  ],
  experience: [], // Empty for now, can be filled later
  address: "Rangpur, Bangladesh",
  resumeLink:
    "https://drive.usercontent.google.com/download?id=1hnE3GFeSiVtfh2n5R_KMj_--raSzQK1k&export=download&authuser=0&confirm=t&uuid=8f17ab0c-1f24-40b0-9f2c-1ba609dd1d42&at=APZUnTWrynxXKIR0lPQwR-8DI6Rr:1702369481015",
};

const skills = [
  // Frontend skills
  {
    category: "frontend",
    name: "Next.js",
    icon: "SiNextdotjs",
    proficiency: 90,
  },
  { category: "frontend", name: "React", icon: "FaReact", proficiency: 85 },
  { category: "frontend", name: "HTML5", icon: "FaHtml5", proficiency: 95 },
  { category: "frontend", name: "CSS3", icon: "FaCss3Alt", proficiency: 90 },
  {
    category: "frontend",
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    proficiency: 85,
  },
  {
    category: "frontend",
    name: "JavaScript",
    icon: "RiJavascriptFill",
    proficiency: 85,
  },
  {
    category: "frontend",
    name: "TypeScript",
    icon: "SiTypescript",
    proficiency: 80,
  },

  // Backend skills
  { category: "backend", name: "Node.js", icon: "FaNodeJs", proficiency: 85 },
  {
    category: "backend",
    name: "Express.js",
    icon: "SiExpress",
    proficiency: 80,
  },
  {
    category: "backend",
    name: "JavaScript",
    icon: "RiJavascriptFill",
    proficiency: 85,
  },
  {
    category: "backend",
    name: "TypeScript",
    icon: "SiTypescript",
    proficiency: 80,
  },
  { category: "backend", name: "JWT", icon: "/jwt.png", proficiency: 75 },

  // Tools & Platforms
  { category: "tools", name: "MongoDB", icon: "SiMongodb", proficiency: 85 },
  { category: "tools", name: "Firebase", icon: "SiFirebase", proficiency: 80 },
  { category: "tools", name: "Vercel", icon: "SiVercel", proficiency: 90 },
  { category: "tools", name: "GitHub", icon: "FaGithub", proficiency: 85 },
];

const seedAboutData = async () => {
  try {
    // Connect to the database
    await mongoose.connect(config.database_url as string);
    console.log("Database connection established for seeding About data");

    // Delete existing data
    // await AboutModel.deleteMany({});
    // console.log("Previous About data deleted");

    // Create new seed data

    // Insert the seed data
    // const result = await AboutModel.create(aboutData);
    // console.log("About data seeded successfully:", result);

    // Delete existing data
    // await SkillModel.deleteMany({});
    // console.log("Previous skill data deleted");

    // Create new seed data

    // Insert the seed data
    // const result = await SkillModel.insertMany(skills);
    // console.log("skill data seeded successfully:", result);




    // Disconnect from the database
    await mongoose.disconnect();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding About data:", error);
  }
};

// Execute the seed function
seedAboutData();

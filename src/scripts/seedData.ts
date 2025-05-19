/* eslint-disable no-console */
import mongoose from "mongoose";
import { AboutModel } from "../app/modules/about/about.model";
import config from "../app/config";

const seedAboutData = async () => {
  try {
    // Connect to the database
    await mongoose.connect(config.database_url as string);
    console.log("Database connection established for seeding About data");

    // Delete existing data
    await AboutModel.deleteMany({});
    console.log("Previous About data deleted");

    // Create new seed data
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

    // Insert the seed data
    const result = await AboutModel.create(aboutData);
    console.log("About data seeded successfully:", result);

    // Disconnect from the database
    await mongoose.disconnect();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding About data:", error);
  }
};

// Execute the seed function
seedAboutData();

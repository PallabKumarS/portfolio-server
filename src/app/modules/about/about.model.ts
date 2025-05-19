import { Schema, model } from "mongoose";
import { TAbout, TEducation, TExperience } from "./about.interface";

const educationSchema = new Schema<TEducation>({
  degree: {
    type: String,
    required: [true, "Degree is required"],
  },
  institution: {
    type: String,
    required: [true, "Institution is required"],
  },
  department: {
    type: String,
  },
  year: {
    type: String,
  },
});

const experienceSchema = new Schema<TExperience>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  technologies: {
    type: [String],
  },
});

const aboutSchema = new Schema<TAbout>(
  {
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
    },
    education: {
      type: [educationSchema],
      required: [true, "Education information is required"],
    },
    experience: {
      type: [experienceSchema],
      default: [],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    resumeLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const AboutModel = model<TAbout>("About", aboutSchema);

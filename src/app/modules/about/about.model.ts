import { Schema, model } from "mongoose";
import { TAbout } from "./about.interface";

const aboutSchema = new Schema<TAbout>(
  {
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

aboutSchema.statics.isAboutExists = async function (id: string) {
  return await AboutModel.findOne({ id });
};

const AboutModel = model<TAbout>("Abouts", aboutSchema);

export default AboutModel;

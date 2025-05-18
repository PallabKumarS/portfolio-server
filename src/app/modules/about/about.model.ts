import { Schema, model, Document } from "mongoose";
import { TAbout,IAbout } from "./about.interface";

const aboutSchema = new Schema<TAbout,IAbout>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

aboutSchema.statics.isAboutExists = async function (id: string) {
  return await AboutModel.findOne({ id });
};

const AboutModel = model<TAbout,IAbout>("Abouts", aboutSchema);

export default AboutModel;
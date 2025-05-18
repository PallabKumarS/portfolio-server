import AboutModel from "./about.model";

const getAllAboutFromDB = async () => {
  const result = await AboutModel.find({});
  return result;
};

export const AboutService = { getAllAboutFromDB };
import ProjectModel from "./project.model";

const getAllProjectFromDB = async () => {
  const result = await ProjectModel.find({});
  return result;
};

export const ProjectService = { getAllProjectFromDB };
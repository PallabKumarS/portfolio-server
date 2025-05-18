import { Schema, model, Document } from "mongoose";
import { TProject,IProject } from "./project.interface";

const projectSchema = new Schema<TProject,IProject>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

projectSchema.statics.isProjectExists = async function (id: string) {
  return await ProjectModel.findOne({ id });
};

const ProjectModel = model<TProject,IProject>("Projects", projectSchema);

export default ProjectModel;
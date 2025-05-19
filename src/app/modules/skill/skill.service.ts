import { TSkill } from "./skill.interface";
import SkillModel from "./skill.model";

// get all skill
const getAllSkillFromDB = async () => {
  const result = await SkillModel.find({});
  return result;
};

// create skill
const createSkillToDB = async (payload: TSkill) => {
  const result = await SkillModel.create(payload);
  return result;
};

export const SkillService = { getAllSkillFromDB, createSkillToDB };

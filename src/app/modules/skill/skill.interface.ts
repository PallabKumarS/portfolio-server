export interface TSkill {
  _id?: string;
  __v?: number;
  createdAt?: Date;
  updatedAt?: Date;
  category: TSkillCategory;
  name: string;
  icon: string;
  proficiency: number;
}

export interface TSkillCategory {
  name: "frontend" | "backend" | "tools";
}

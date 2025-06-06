export interface TSkill {
  _id?: string;
  __v?: number;
  createdAt?: Date;
  updatedAt?: Date;
  category: "frontend" | "backend" | "tools";
  name: string;
  icon: string;
  proficiency: number;
}

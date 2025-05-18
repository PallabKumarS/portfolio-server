import { Model } from "mongoose";

export type TProject = {
  name: string;
  id?: string;
};

export interface IProject extends Model<TProject> {
  isProjectExists(id: string): Promise<TProject | null>;
}
import { Model } from "mongoose";

export type TAbout = {
  name: string;
  id?: string;
};

export interface IAbout extends Model<TAbout> {
  isAboutExists(id: string): Promise<TAbout | null>;
}
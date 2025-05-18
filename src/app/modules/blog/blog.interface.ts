import { Model } from "mongoose";

export type TBlog = {
  name: string;
  id?: string;
};

export interface IBlog extends Model<TBlog> {
  isBlogExists(id: string): Promise<TBlog | null>;
}
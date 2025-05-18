import { Schema, model, Document } from "mongoose";
import { TBlog,IBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog,IBlog>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

blogSchema.statics.isBlogExists = async function (id: string) {
  return await BlogModel.findOne({ id });
};

const BlogModel = model<TBlog,IBlog>("Blogs", blogSchema);

export default BlogModel;
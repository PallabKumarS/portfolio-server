import BlogModel from "./blog.model";

const getAllBlogFromDB = async () => {
  const result = await BlogModel.find({});
  return result;
};

export const BlogService = { getAllBlogFromDB };
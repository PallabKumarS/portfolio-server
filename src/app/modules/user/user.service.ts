import UserModel from "./user.model";

// get all users
const getAllUserFromDB = async () => {
  const result = await UserModel.find({});
  return result;
};

export const UserService = { getAllUserFromDB };

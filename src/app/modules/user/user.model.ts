import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const UserModel = model<TUser>("Users", userSchema);

export default UserModel;

import { Schema, model, Document } from "mongoose";
import { TMessage,IMessage } from "./message.interface";

const messageSchema = new Schema<TMessage,IMessage>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

messageSchema.statics.isMessageExists = async function (id: string) {
  return await MessageModel.findOne({ id });
};

const MessageModel = model<TMessage,IMessage>("Messages", messageSchema);

export default MessageModel;
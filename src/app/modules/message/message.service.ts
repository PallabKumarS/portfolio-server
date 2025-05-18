import MessageModel from "./message.model";

const getAllMessageFromDB = async () => {
  const result = await MessageModel.find({});
  return result;
};

export const MessageService = { getAllMessageFromDB };
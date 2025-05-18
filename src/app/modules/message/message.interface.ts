import { Model } from "mongoose";

export type TMessage = {
  name: string;
  id?: string;
};

export interface IMessage extends Model<TMessage> {
  isMessageExists(id: string): Promise<TMessage | null>;
}
import { Schema, model, Model } from 'mongoose';
import * as bcrypt from "bcryptjs";

interface IUser {
  name: string
  password?: string
}
export type UserModel = Model<IUser, {}>

export const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser, UserModel>('User', userSchema)
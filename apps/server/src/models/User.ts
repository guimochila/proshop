import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface UserDocument extends IUser, Document {
  checkPassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: [validator.isEmail, 'Invalid Email Address'],
    },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.checkPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export default User;

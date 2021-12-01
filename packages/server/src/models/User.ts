import { Schema, model } from 'mongoose';
import validator from 'validator';

interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = new Schema<User>(
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

const User = model('User', userSchema);

export default User;

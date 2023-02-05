import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  phone: { type: String, require: true },
  email: { type: String, require: false },
  password: { type: String, require: false },
  role: { type: String, require: false },
  Verified: { type: Boolean, require: false },
  live: { type: Boolean, require: false },
  onDuty: { type: Boolean, require: false },
  status: { type: String, require: false },
});

export interface User {
  id: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  Verified: boolean;
  live: boolean;
  onDuty: boolean;
  status: string;
}

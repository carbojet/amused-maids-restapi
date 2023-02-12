import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  phone: { type: Number, require: true },
  phoneVerified: { type: Boolean, required: false, default: false },
  email: { type: String, require: false, default: '' },
  emailVerified: { type: Boolean, required: false, default: false },
  password: { type: String, require: false, default: '' },
  role: { type: String, require: false, default: '' },
  parmanentAddress: { type: Object, required: false },
  presentAddress: { type: Object, required: false },
  Verified: { type: Boolean, require: false, default: false },
  live: { type: Boolean, require: false, default: false },
  onDuty: { type: Boolean, require: false, default: false },
  status: { type: String, require: false, default: 'Pending' },
});
export interface User {
  id: string;
  phone: number;
  phoneVerified: boolean;
  email: string;
  emailVerified: boolean;
  password: string;
  role: string;
  parmanentAddress: object;
  presentAddress: object;
  Verified: boolean;
  live: boolean;
  onDuty: boolean;
  status: string;
}

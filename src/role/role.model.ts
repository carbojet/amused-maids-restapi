//import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  roleStatus: { type: Boolean, required: false, default: true },
  name: { type: String, require: false, default: '' },
  permission: { type: Array, require: true, default: []},
  status: { type: String, require: false, default: 'Pending' },
});
export interface Role {
  roleStatus: boolean;
  name: string;
  permission: [];
  status: string;
}

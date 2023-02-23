import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from '../role.model';
import { Model } from 'mongoose';
@Injectable()
export class RolesService {
  private Roles: Role[] = [];
  constructor(@InjectModel('Role') private readonly roleModel: Model<Role>) {}

  async insertRole(dto: any, res: any) {
    try {
      const newRole = new this.roleModel(dto);
      const result = await newRole.save();
      if (result) {
        return res.status(201).json({
          message: 'Role Created Successfully',
          data: true,
          result: result,
        });
      } else {
        return res.status(409).json({
          message: 'Role Not Created. Something went wrong',
          data: false,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        data: false,
      });
    }
  }
  async getRole(id: string, res: any) {
    try {
      const result = await this.roleModel.findById({ _id: id });
      if (result) {
        return res.status(201).json({
          message: 'Role Created Successfully',
          data: true,
          result: result,
        });
      } else {
        return res.status(409).json({
          message: 'Role Not Created. went wrong',
          data: false,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        data: false,
      });
    }
  }
  async getRoles(query: any, res: any) {
    try {
      console.log(query);
      //const result = await this.roleModel.find(dto);
      const result = [];
      if (result) {
        return res.status(201).json({
          message: 'Role Created Successfully',
          data: true,
          result: result,
        });
      } else {
        return res.status(409).json({
          message: 'Role Not Created. went wrong',
          data: false,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        data: false,
      });
    }
  }
}

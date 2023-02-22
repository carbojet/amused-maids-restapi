import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user.model';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  private Users: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(dto: any, res: any) {
    try {
      const newUser = new this.userModel(dto);
      const result = await newUser.save();
      if (result) {
        return res.status(201).json({
          message: 'User Created Successfully',
          data: true,
          result: result,
        });
      } else {
        return res.status(409).json({
          message: 'User Not Created. Something went wrong',
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
  async getUser(id: string, res: any) {
    try {
      const result = await this.userModel.findById({ _id: id });
      if (result) {
        return res.status(201).json({
          message: 'User Created Successfully',
          data: true,
          result: result,
        });
      } else {
        return res.status(409).json({
          message: 'User Not Created. went wrong',
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

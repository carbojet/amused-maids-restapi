import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  private Users: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(dto: any, res: any) {
    //const userCollection = { dto };
    const newUser = new this.userModel(dto);
    const result = await newUser.save();
    if (result) {
      return res.status(201).json({
        message: 'User Created Successfully',
        result: result,
      });
    } else {
      return res.status(409).json({
        message: 'User Not Created. Something Problem',
      });
    }
  }
}

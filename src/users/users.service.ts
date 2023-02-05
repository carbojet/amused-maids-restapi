import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  private Users: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(dto: any, res: any) {
    const userCollection = {
      phone: dto.phone,
      email: dto.email,
      password: dto.password,
    };
    const newUser = new this.userModel(userCollection);
    const result = await newUser.save();
    console.log(result);
  }
}

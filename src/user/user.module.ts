import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

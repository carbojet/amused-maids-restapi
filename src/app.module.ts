import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { RolesModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    UsersModule, RolesModule,
  ],
})
export class AppModule {}

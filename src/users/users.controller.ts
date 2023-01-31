import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
    @Get('/')
    async listUsers(){
        return { 'respond': 'I got user list' };
    }
    
    @Post('/create')
    async createUser(@Body() body: CreateUserDto ){
        //console.log(body)
        return { respond: 'User Created' };
    }

    @Get('/:id')
    async getUser(@Param('id') id: string){ 
        //console.log(id)
        return { respond: 'I got user detail' };
    }

}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  Response,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import {
  ApiTags,
  ApiOperation,
  ApiConsumes,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiUnauthorizedResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import {
  Response_204,
  Response_400,
  Response_401,
  Response_409,
  Response_500,
  Response_Obj_200,
  Response_Obj_201,
} from 'src/response';
import { UsersService } from './services/user.service';
@Controller('user')
@ApiTags('user')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  //creating end point for add new user restapi/user/create
  @Post('/create')
  @ApiOperation({ summary: 'Create New Product' })
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: Response_Obj_201,
  })
  @ApiBadRequestResponse({
    description: 'Invalid payload',
    type: Response_400,
  })
  @ApiConflictResponse({
    description: 'Something want wrong while creating User',
    type: Response_409,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized token',
    type: Response_401,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: Response_500,
  })
  async createUser(
    @Body(ValidationPipe) body: CreateUserDto,
    @Request() req,
    @Response() res,
  ) {
    return await this.UsersService.insertUser(body, res);
  }
  //creating end point for get user details by providing ID restapi/user:ID
}

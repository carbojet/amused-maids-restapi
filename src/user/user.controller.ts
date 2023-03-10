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
  ApiParam,
  ApiQuery,
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
import { query } from 'express';
@Controller('user')
@ApiTags('User')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  //POST end point for add new user restapi/user/create
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
  //GET end point for get user details by providing ID restapi/user:ID
  @Get('/:id')
  @ApiOperation({ summary: ' Get User Details based ID ' })
  @ApiBadRequestResponse({
    description: 'Invalid payload',
    type: Response_400,
  })
  @ApiConflictResponse({
    description: 'Something want wrong while Fetch User',
    type: Response_409,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: Response_500,
  })
  @ApiParam({ name: 'id', required: true })
  async getuser(@Param(ValidationPipe) params, @Response() res) {
    return await this.UsersService.getUser(params.id, res);
  }
  //Get end point for get user list by payload restapi/user
  @Get('/')
  @ApiOperation({ summary: ' Get User List ' })
  @ApiBadRequestResponse({
    description: 'Invalid payload',
    type: Response_400,
  })
  @ApiConflictResponse({
    description: 'Something want wrong while Fetch User',
    type: Response_409,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: Response_500,
  })
  @ApiQuery({ name: 'phone', type: 'string', required: false })
  @ApiQuery({
    name: 'phoneVerified',
    type: 'boolean',
    required: false,
    enum: ['true', 'false'],
  })
  @ApiQuery({ name: 'email', type: 'string', required: false })
  @ApiQuery({
    name: 'emailVerified',
    type: 'boolean',
    required: false,
    enum: ['true', 'false'],
  })
  @ApiQuery({ name: 'role', type: 'string', required: false })
  @ApiQuery({
    name: 'userVerified',
    type: 'boolean',
    required: false,
    enum: ['true', 'false'],
  })
  @ApiQuery({
    name: 'live',
    type: 'boolean',
    required: false,
    enum: ['true', 'false'],
  })
  @ApiQuery({
    name: 'onDuty',
    type: 'boolean',
    required: false,
    enum: ['true', 'false'],
  })
  @ApiQuery({
    name: 'userStatus',
    type: 'string',
    required: false,
    enum: ['Pending', 'Approved', 'Suspended'],
  })
  @ApiQuery({
    name: 'presentAddressZipcode',
    type: 'string',
    required: false,
  })
  @ApiQuery({
    name: 'presentAddressCity',
    type: 'string',
    required: false,
  })
  @ApiQuery({
    name: 'presentAddressState',
    type: 'string',
    required: false,
  })
  @ApiQuery({
    name: 'premanentAddressZipcode',
    type: 'string',
    required: false,
  })
  @ApiQuery({
    name: 'premanentAddressCity',
    type: 'string',
    required: false,
  })
  @ApiQuery({
    name: 'premanentAddressState',
    type: 'string',
    required: false,
  })
  async getusers(@Query(ValidationPipe) query, @Response() res) {
    return await this.UsersService.getUsers(query, res);
  }
}

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
import { UsersService } from './users.service';
@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create New Product' })
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiCreatedResponse({
    description: 'Product created successfully',
    type: Response_Obj_201,
  })
  @ApiBadRequestResponse({
    description: 'Invalid payload',
    type: Response_400,
  })
  @ApiConflictResponse({
    description: 'Something want wrong while creating product',
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
    //console.log(body)
    return await this.UsersService.insertUser(body, res);
  }
}

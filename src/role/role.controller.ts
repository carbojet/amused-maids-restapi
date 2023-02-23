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
import { CreateRoleDto } from './dtos/createRole.dto';
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
import { RolesService } from './services/role.service';
import { query } from 'express';
@Controller('role')
@ApiTags('Role')
export class RolesController {
  constructor(private RolesService: RolesService) {}

  //POST end point for add new Role restapi/role/create
  @Post('/create')
  @ApiOperation({ summary: 'Create New Role' })
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiCreatedResponse({
    description: 'Role created successfully',
    type: Response_Obj_201,
  })
  @ApiBadRequestResponse({
    description: 'Invalid payload',
    type: Response_400,
  })
  @ApiConflictResponse({
    description: 'Something want wrong while creating Role',
    type: Response_409,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: Response_500,
  })
  async createRole(
    @Body(ValidationPipe) body: CreateRoleDto,
    @Request() req,
    @Response() res,
  ) {
    return await this.RolesService.insertRole(body, res);
  }
  //GET end point for get Role details by providing ID restapi/role:ID
  @Get('/:id')
  @ApiOperation({ summary: ' Get Role Details based ID ' })
  @ApiBadRequestResponse({
    description: 'Invalid payload',
    type: Response_400,
  })
  @ApiConflictResponse({
    description: 'Something want wrong while Fetch Role',
    type: Response_409,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: Response_500,
  })
  @ApiParam({ name: 'id', required: true })
  async getrole(@Param(ValidationPipe) params, @Response() res) {
    return await this.RolesService.getRole(params.id, res);
  }
  //Get end point for get role list by payload restapi/role
  @Get('/')
  @ApiOperation({ summary: ' Get Role List ' })
  @ApiBadRequestResponse({
    description: 'Invalid payload',
    type: Response_400,
  })
  @ApiConflictResponse({
    description: 'Something want wrong while Fetch Role',
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
  async getroles(@Query(ValidationPipe) query, @Response() res) {
    return await this.RolesService.getRoles(query, res);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
// HttpCode: 201 response code validate
// Reason: success add data
export class Response_Obj_201 {
  @IsString()
  @ApiProperty()
  messagess: string;

  @IsObject()
  @ApiProperty()
  result: Object;
}

// HttpCode: 200 response code validate
// Reason: success resposne with object data
export class Response_Obj_200 {
  @IsString()
  @ApiProperty()
  messagess: string;

  @IsObject()
  @ApiProperty()
  result: Object;
}

// HttpCode: 200 response code validate
// Reason: success response with array data
export class Response_Array_200 {
  @IsString()
  @ApiProperty()
  message: string;

  @IsArray()
  @ApiProperty()
  result: [];
}

// HttpCode: 204 response code validate
// Reason: Data not found
export class Response_204 {
  @IsString()
  @ApiProperty()
  message: string;
}

// HttpCode: 400 response code validate
// Reason: invalid payload
export class Response_400 {
  @IsNumber()
  @ApiProperty({ default: 400 })
  statusCode: number;

  @IsString()
  @ApiProperty()
  createdBy: string;

  @IsString()
  @ApiProperty()
  errorMessage: string;

  @IsObject()
  @ApiProperty()
  requiredFields: Object;

  @IsString()
  @ApiProperty()
  timestamp: string;

  @IsString()
  @ApiProperty()
  path: string;
}

// HttpCode: 401 response code validate
// Reason: unauthorized token
export class Response_401 {
  @IsNumber()
  @ApiProperty({ default: 401 })
  statusCode: number;

  @IsString()
  @ApiProperty()
  createdBy: string;

  @IsString()
  @ApiProperty()
  errorMessage: string;

  @IsObject()
  @ApiProperty()
  requiredFields: Object;

  @IsString()
  @ApiProperty()
  timestamp: string;

  @IsString()
  @ApiProperty()
  path: string;
}

// HttpCode: 409 response code validate
// Reason: Object not able to process
export class Response_409 {
  @IsString()
  @ApiProperty()
  message: string;
}

// HttpCode: 500 response code validate
// Reason: Internal server error
export class Response_500 {
  @IsNumber()
  @ApiProperty({ default: 500 })
  statusCode: number;

  @IsString()
  @ApiProperty()
  createdBy: string;

  @IsString()
  @ApiProperty()
  errorMessage: string;

  @IsString()
  @ApiProperty()
  timestamp: string;

  @IsString()
  @ApiProperty()
  path: string;
}

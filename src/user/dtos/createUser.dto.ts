import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class Latlogn {
  @IsString()
  @ApiProperty({ required: false, default: '' })
  lat: string;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  long: string;
}
export class PresentAddress {
  @IsString()
  @ApiProperty({ required: false, default: '' })
  address: string;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  city: string;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  state: string;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  zipcode: string;

  @IsObject()
  @ApiProperty({ type: Latlogn, required: false, default: Latlogn })
  @Type(() => Latlogn)
  latlong: Latlogn;
}
export class ParmanentAddress {
  @IsString()
  @ApiProperty({ required: false, default: '' })
  address: string;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  city: string;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  state: string;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  zipcode: string;
}

export class CreateUserDto {
  @IsNumber()
  @ApiProperty({ required: true })
  phone: number;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  phoneVerified: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, default: '' })
  email: string;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  emailVerified: boolean;
  
  @IsString()
  @ApiProperty({ required: false, default: '' })
  password: string;

  @IsString()
  @ApiProperty({ required: true, default: '' })
  role: string;

  @IsObject()
  @Type(() => ParmanentAddress)
  @ApiProperty({
    type: ParmanentAddress,
    required: false,
    default: {
      address: '',
      city: '',
      state: '',
      zipcode: '',
    },
  })
  parmanentAddress: ParmanentAddress;

  @IsObject()
  @Type(() => PresentAddress)
  @ApiProperty({
    type: PresentAddress,
    required: false,
    default: {
      address: '',
      city: '',
      state: '',
      zipcode: '',
    },
  })
  presentAddress: PresentAddress;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  userVerified: boolean;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  live: boolean;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  onDuty: boolean;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  userStatus: string;
  
}

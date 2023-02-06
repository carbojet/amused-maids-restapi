import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsObject,
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
  phoneverified: boolean;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  email: string;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  emailverified: boolean;

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
      latlong: {
        lat: '',
        long: '',
      }
    },
  })
  presentAddress: PresentAddress;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  userverified: boolean;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  live: boolean;

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  onDuty: boolean;

  @IsString()
  @ApiProperty({ required: false, default: '' })
  userstatus: string;
}

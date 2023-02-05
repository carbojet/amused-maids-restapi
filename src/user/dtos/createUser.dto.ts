import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';
export class Latlogn {
  @IsString()
  @ApiProperty({ required: false })
  lat: string;

  @IsString()
  @ApiProperty({ required: false })
  long: string;
}
export class PresentAddress {
  @IsString()
  @ApiProperty({ required: false })
  address: string;

  @IsString()
  @ApiProperty({ required: false })
  city: string;

  @IsString()
  @ApiProperty({ required: false })
  state: string;

  @IsString()
  @ApiProperty({ required: false })
  zipcode: string;

  @IsObject()
  @ApiProperty({ type: [Latlogn], required: false })
  @Type(() => Latlogn)
  latlong: Latlogn[];
}
export class ParmanentAddress {
  @IsString()
  @ApiProperty({ required: false })
  address: string;

  @IsString()
  @ApiProperty({ required: false })
  city: string;

  @IsString()
  @ApiProperty({ required: false })
  state: string;

  @IsString()
  @ApiProperty({ required: false })
  zipcode: string;
}
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: number;

  @IsString()
  @ApiProperty({ required: false })
  email: string;

  @IsString()
  @ApiProperty({ required: false })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  role: string;

  @IsObject()
  @Type(() => ParmanentAddress)
  @ApiProperty({ type: [ParmanentAddress], required: false })
  parmanentAddress: ParmanentAddress[];

  @IsObject()
  @Type(() => PresentAddress)
  @ApiProperty({ type: [PresentAddress], required: false })
  presentAddress: PresentAddress[];

  @IsBoolean()
  @ApiProperty({ required: false })
  Verified: boolean;

  @IsBoolean()
  @ApiProperty({ required: false })
  live: boolean;

  @IsBoolean()
  @ApiProperty({ required: false })
  onDuty: boolean;

  @IsString()
  @ApiProperty({ required: false })
  status: string;
}

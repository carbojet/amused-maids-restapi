import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';
export class Latlogn {
  @IsString()
  @ApiProperty()
  lat: string;

  @IsString()
  @ApiProperty()
  long: string;
}
export class PresentAddress {
  @IsString()
  @ApiProperty()
  address: string;

  @IsString()
  @ApiProperty()
  city: string;
  
  @IsString()
  @ApiProperty()
  state: string;
  
  @IsString()
  @ApiProperty()
  zipcode: string;
  
  @IsObject()
  @ApiProperty({ type: [Latlogn], required: false })
  @Type(() => Latlogn)
  latlong: Latlogn[];
}
export class ParmanentAddress {
  @IsString()
  @ApiProperty()
  address: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  state: string;

  @IsString()
  @ApiProperty()
  zipcode: string;
}
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @IsString()
  @ApiProperty({ required: false })
  email: string;

  @IsString()
  @ApiProperty({ required: false })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  role: string;
  
  @IsObject()
  @Type(() => ParmanentAddress)
  @ApiProperty({ type: [ParmanentAddress], required: false })
  parmanentAddress: ParmanentAddress[];

  @IsObject()
  @Type(() => PresentAddress)
  @ApiProperty({ type: [PresentAddress], required: true })
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

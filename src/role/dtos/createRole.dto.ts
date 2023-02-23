import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsBoolean()
  @ApiProperty({ required: false, default: true })
  roleStatus: boolean;

  @IsString()
  @ApiProperty({ required: true, default: 'Admin' })
  name: string;

  @IsArray()
  @ApiProperty({ required: true })
  permission: [];

  @IsString()
  @ApiProperty({ required: false })
  status: string;
}

import { IsOptional, IsString } from 'class-validator';
export class CreateUserDTO {
  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsString()
  role: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}

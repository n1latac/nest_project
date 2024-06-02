import { IsString } from 'class-validator';

export class AuthResponse {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  token: string;
}

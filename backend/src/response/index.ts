import { IsString } from 'class-validator';
import { IsOptional } from 'class-validator';

export class AuthResponse {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsString()
  role: string;

  @IsString()
  password: string;

  @IsString()
  token: string;
}

export class SuccessResponseDTO {
  @IsOptional()
  data: object;

  @IsOptional()
  error = null;

  @IsOptional()
  success = true;

  @IsOptional()
  statusCode = null;

  constructor(data: any = null) {
    if (data?.status && data?.status > 300) {
      this.error = { message: data?.message, code: data?.status };
      delete this.data;
      delete this.success;
      this.statusCode = data?.status;
      return;
    }
    delete this.statusCode;
    Object.assign(this, { data });
  }
}

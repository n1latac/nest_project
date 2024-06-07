import { IsOptional, IsString } from 'class-validator';

export class CreateBrandDTO {
  @IsOptional()
  @IsString()
  name: string;
}

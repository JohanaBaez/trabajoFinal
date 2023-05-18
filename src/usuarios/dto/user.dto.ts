import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  name: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @IsNumber()
  @IsNotEmpty()
  nacionalidad:string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  email: string;

  @IsString({each:true})
  @IsArray()
  @IsOptional()
  images?: string[];
}
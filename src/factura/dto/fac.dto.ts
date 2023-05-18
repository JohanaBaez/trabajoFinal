import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateFacDto {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  number: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  fecha: number;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(20)
  tienda: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(20)
  usuario: string;

  @IsNotEmpty()
  @IsString()
  nombrePro: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsString()
  total: number;
}

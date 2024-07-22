import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  number: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  client: string;

  @IsString()
  @IsNotEmpty()
  motor: string;

  @IsString()
  @IsNotEmpty()
  motor_family: string;

  @IsString()
  @IsNotEmpty()
  injection: string;

  @IsString()
  @IsNotEmpty()
  aspiration: string;

  @IsString()
  @IsNotEmpty()
  fuel: string;

  @IsString()
  @IsNotEmpty()
  gearBox: string;

  @IsString()
  @IsNotEmpty()
  powertrain: string;

  @IsString()
  @IsNotEmpty()
  market: string;

  @IsString()
  @IsNotEmpty()
  legislation: string;

  @IsString()
  @IsNotEmpty()
  cicle: string;

  @IsString()
  @IsNotEmpty()
  diagnose: string;
}

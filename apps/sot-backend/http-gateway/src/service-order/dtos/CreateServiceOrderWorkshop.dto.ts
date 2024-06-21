import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateServiceOrderWorkshop {
  @IsNotEmpty()
  @IsString()
  montadora: string;

  @IsNotEmpty()
  @IsString()
  project: string;

  @IsNotEmpty()
  @IsBoolean()
  isIntern: boolean;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  chassis: string;

  @IsNotEmpty()
  @IsString()
  fleet: string;

  @IsNotEmpty()
  @IsString()
  vehicleLocation: string;

  @IsNotEmpty()
  @IsString()
  keyLocation: string;

  @IsOptional()
  serviceInformations?: string;

  @IsNotEmpty()
  @IsDateString()
  deliveryDate: string;
}

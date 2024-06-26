import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEquipmentDto {
  @IsNotEmpty()
  @IsNumber()
  equipment_id: number;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  sn: string;

  @IsString()
  @IsNotEmpty()
  calibration_frequency_in_years: string;

  @IsString()
  @IsNotEmpty()
  inventory: string;

  @IsNotEmpty()
  @IsString()
  QMM_no_EIME: string;

  @IsString()
  @IsNotEmpty()
  storage_location: string;
}

export class CreateEquipmentDto {
  id: number;
  equipment_id: number;
  type: string;
  name: string;
  manufacturer: string;
  model: string;
  description: string;
  sn: string;
  calibration_frequency_in_years: string;
  inventory: string;
  QMM_no_EIME: string;
  storage_location: string;
}

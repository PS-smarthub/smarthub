import { Injectable } from '@nestjs/common';
import { EquipmentService } from 'src/lei/domain/services/equipment.service';
import { CreateEquipmentDto } from '../dtos/create-equipment.dto';

@Injectable()
export class CreateEquipmentUseCase {
  constructor(private readonly equipmentService: EquipmentService) {}

  async execute(createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.createEquipment(
      createEquipmentDto.id,
      createEquipmentDto.equipment_id,
      createEquipmentDto.type,
      createEquipmentDto.name,
      createEquipmentDto.manufacturer,
      createEquipmentDto.model,
      createEquipmentDto.description,
      createEquipmentDto.sn,
      createEquipmentDto.calibration_frequency_in_years,
      createEquipmentDto.inventory,
      createEquipmentDto.QMM_no_EIME,
      createEquipmentDto.storage_location,
    );
  }
}

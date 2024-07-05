import { Injectable } from '@nestjs/common';
import { Equipment } from '../entities/equipment.entity';
import { EquipmentRepository } from 'src/lei/infrastructure/repositories/equipment.repository';

@Injectable()
export class EquipmentService {
  constructor(private readonly equipmentRepository: EquipmentRepository) {}

  async createEquipment(
    id: number,
    equipment_id: number,
    type: string,
    name: string,
    manufacturer: string,
    model: string,
    description: string,
    sn: string,
    calibration_frequency_in_years: string,
    inventory: string,
    QMM_no_EIME: string,
    storage_location: string,
  ): Promise<Equipment> {
    const equipment = new Equipment(
      id,
      equipment_id,
      type,
      name,
      manufacturer,
      model,
      description,
      sn,
      calibration_frequency_in_years,
      inventory,
      QMM_no_EIME,
      storage_location,
    );
    await this.equipmentRepository.save(equipment);
    return equipment;
  }

  async getEquipmentById(id: number): Promise<Equipment> {
    return this.equipmentRepository.findById(id);
  }
}

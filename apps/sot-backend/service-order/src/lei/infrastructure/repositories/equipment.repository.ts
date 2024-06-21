import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment } from '../../domain/entities/equipment.entity';
import { EquipmentOrmEntity } from '../typeorm/equipment.orm-entity';

@Injectable()
export class EquipmentRepository{
    constructor(
        @InjectRepository(EquipmentOrmEntity)
        private readonly repository: Repository<EquipmentOrmEntity>,
    ) { }

    async findById(id: number): Promise<Equipment> {
        const userOrmEntity = await this.repository.findOne({ where: { id } });
        if (!userOrmEntity) return null;
        return new Equipment(
            userOrmEntity.id,
            userOrmEntity.equipment_id,
            userOrmEntity.type,
            userOrmEntity.name,
            userOrmEntity.manufacturer,
            userOrmEntity.model,
            userOrmEntity.description,
            userOrmEntity.sn,
            userOrmEntity.calibration_frequency_in_years,
            userOrmEntity.inventory,
            userOrmEntity.storage_location,
            userOrmEntity.QMM_no_EIME
        );
    }

    async save(equipment: Equipment): Promise<void> {
        const userOrmEntity = this.repository.create({
            calibration_frequency_in_years: equipment.calibration_frequency_in_years,
            description: equipment.description,
            equipment_id: equipment.equipment_id,
            id: equipment.id,
            inventory: equipment.inventory,
            manufacturer: equipment.manufacturer,
            model: equipment.model,
            name: equipment.name,
            QMM_no_EIME: equipment.QMM_no_EIME,
            sn: equipment.sn,
            storage_location: equipment.storage_location,
            type: equipment.type
        });
        await this.repository.save(userOrmEntity);
    }
}
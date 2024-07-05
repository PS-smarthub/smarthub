import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentController } from './infrastructure/controllers/equipment.controller';
import { CreateEquipmentUseCase } from './application/use-cases/create-equipment.use-case';
import { EquipmentService } from './domain/services/equipment.service';
import { EquipmentOrmEntity } from './infrastructure/typeorm/equipment.orm-entity';
import { EquipmentRepository } from './infrastructure/repositories/equipment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentOrmEntity])],
  controllers: [EquipmentController],
  providers: [CreateEquipmentUseCase, EquipmentService, EquipmentRepository],
})
export class LeiModule {}

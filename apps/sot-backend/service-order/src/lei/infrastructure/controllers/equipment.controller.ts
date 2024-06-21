import { Controller } from '@nestjs/common';
import { CreateEquipmentUseCase } from 'src/lei/application/use-cases/create-equipment.use-case';
import { EquipmentService } from 'src/lei/domain/services/equipment.service';
import { CreateEquipmentDto } from 'src/lei/application/dtos/create-equipment.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('equipments')
export class EquipmentController {
    constructor(
        private readonly createEquipmentUseCase: CreateEquipmentUseCase,
        private readonly equipmentService: EquipmentService,
    ) { }

    @MessagePattern({ cmd: 'createEquipment' })
    async create(@Payload() createEquipmentDto: CreateEquipmentDto) {
        return this.createEquipmentUseCase.execute(createEquipmentDto);
    }
}
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EquipmentsService } from './equipments.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';

@Controller()
export class EquipmentsController {
  constructor(private readonly equipmentsService: EquipmentsService) {}

  @MessagePattern('createEquipment')
  create(@Payload() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentsService.create(createEquipmentDto);
  }

  @MessagePattern('findAllEquipments')
  findAll() {
    return this.equipmentsService.findAll();
  }

  @MessagePattern('findOneEquipment')
  findOne(@Payload() id: number) {
    return this.equipmentsService.findOne(id);
  }
}

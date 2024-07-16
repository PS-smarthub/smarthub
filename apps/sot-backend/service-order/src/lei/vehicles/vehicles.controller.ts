import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Controller()
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @MessagePattern({ cmd: 'createVehicle' })
  create(@Payload() createVehicleDto: CreateVehicleDto) {
    console.log('Cheguei');
    return this.vehiclesService.create(createVehicleDto);
  }

  @MessagePattern('findAllVehicles')
  findAll() {
    return this.vehiclesService.findAll();
  }

  @MessagePattern('findOneVehicle')
  findOne(@Payload() id: number) {
    return this.vehiclesService.findOne(id);
  }
}

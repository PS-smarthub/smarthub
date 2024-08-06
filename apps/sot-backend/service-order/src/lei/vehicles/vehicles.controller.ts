import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Controller()
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) { }

  @MessagePattern({ cmd: 'createVehicle' })
  create(@Payload() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @MessagePattern({ cmd: 'getAllVehicles' })
  findAll(query: any) {
    return this.vehiclesService.findAll(query);
  }

  @MessagePattern('findOneVehicle')
  findOne(@Payload() id: number) {
    return this.vehiclesService.findOne(id);
  }
}

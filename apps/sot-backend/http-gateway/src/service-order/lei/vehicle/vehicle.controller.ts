import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';

@Controller()
export class VehicleController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  @Post('vehicles')
  createWorkshopServiceOrder(@Body() createVehicleDto: CreateVehicleDto) {
    return this.natsClient.send({ cmd: 'createVehicle' }, createVehicleDto);
  }
}

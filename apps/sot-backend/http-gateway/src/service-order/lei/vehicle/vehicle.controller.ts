import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';

@Controller('vehicles')
export class VehicleController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) { }

  @Post()
  createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return this.natsClient.send({ cmd: 'createVehicle' }, createVehicleDto);
  }

  @Get()
  getAllVehicles(@Query() query: any) {
    return this.natsClient.send({ cmd: "getAllVehicles" }, { query })
  }
}

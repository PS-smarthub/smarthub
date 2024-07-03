import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateServiceOrderWorkshopDto } from './dtos/service-order-workshop/CreateServiceOrderWorkshop.dto';
import { CreateEquipmentDto } from './dtos/lei/CreateEquipment.dto';

@Controller('service-order')
export class ServiceOrderController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  @Post('/workshop')
  createWorkshopServiceOrder(
    @Body() createWorkshopServiceOrderDto: CreateServiceOrderWorkshopDto,
  ) {
    return this.natsClient.send(
      { cmd: 'createServiceOrderWorkshop' },
      createWorkshopServiceOrderDto,
    );
  }

  @Post('equipments')
  createEquipment(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.natsClient.send({ cmd: 'createEquipment' }, createEquipmentDto);
  }
}

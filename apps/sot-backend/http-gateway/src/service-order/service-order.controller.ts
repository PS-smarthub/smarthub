import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateServiceOrderWorkshop } from './dtos/CreateServiceOrderWorkshop.dto';

@Controller('service-order')
export class ServiceOrderController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  @Post()
  createWorkshopServiceOrder(
    @Body() createWorkshopServiceOrderDto: CreateServiceOrderWorkshop,
  ) {
    return this.natsClient.send(
      { cmd: 'createServiceOrderWorkshop' },
      createWorkshopServiceOrderDto,
    );
  }
}

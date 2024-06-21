import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateServiceOrderWorkshopDto } from './dtos/CreateServiceOrderWorkshop.dto';
import { ServiceOrderService } from './service-order.service';

@Controller()
export class ServiceOrderController {
  constructor(private serviceOrderService: ServiceOrderService) {}

  @MessagePattern({ cmd: 'createServiceOrderWorkshop' })
  createUser(@Payload() data: CreateServiceOrderWorkshopDto) {
    console.log(data);
    return this.serviceOrderService.createServiceOrderWorkshop(data);
  }
}

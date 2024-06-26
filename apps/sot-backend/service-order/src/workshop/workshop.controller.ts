import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateServiceOrderWorkshopDto } from './dtos/CreateServiceOrderWorkshop.dto';
import { WorkshopService } from './workshop.service';

@Controller()
export class WorkshopController {
  constructor(private workshopService: WorkshopService) { }

  @MessagePattern({ cmd: 'createServiceOrderWorkshop' })
  createServiceOrderWorkshop(@Payload() data: CreateServiceOrderWorkshopDto) {
    return this.workshopService.createServiceOrderWorkshop(data);
  }
}

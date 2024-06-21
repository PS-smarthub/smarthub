import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceOrderWorkshop } from 'src/typeorm/entities/ServiceOrderWorkshop';
import { Repository } from 'typeorm';
import { CreateServiceOrderWorkshopDto } from './dtos/CreateServiceOrderWorkshop.dto';

@Injectable()
export class ServiceOrderService {
  constructor(
    @InjectRepository(ServiceOrderWorkshop)
    private readonly serviceOrderRepository: Repository<ServiceOrderWorkshop>,
  ) {}

  createServiceOrderWorkshop(
    createServiceOrderWorkshopDto: CreateServiceOrderWorkshopDto,
  ) {
    const newUser = this.serviceOrderRepository.create(
      createServiceOrderWorkshopDto,
    );
    return this.serviceOrderRepository.save(newUser);
  }
}

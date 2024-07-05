import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceOrderWorkshopDto } from './dtos/CreateServiceOrderWorkshop.dto';
import { ServiceOrderWorkshop } from './infra/typeorm/ServiceOrderWorkshop';

@Injectable()
export class WorkshopService {
  constructor(
    @InjectRepository(ServiceOrderWorkshop)
    private readonly serviceOrderRepository: Repository<ServiceOrderWorkshop>,
  ) { }

  createServiceOrderWorkshop(
    createServiceOrderWorkshopDto: CreateServiceOrderWorkshopDto,
  ) {
    const newUser = this.serviceOrderRepository.create(
      createServiceOrderWorkshopDto,
    );
    return this.serviceOrderRepository.save(newUser);
  }

  async getAllField(field: string) {
    const orders = await this.serviceOrderRepository.find();
    const resultString = orders.map(order => order[field])

    return resultString
  }
}

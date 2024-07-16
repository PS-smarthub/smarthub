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

  async getAllAutomaker({ query }: any) {
    // const orders = await this.serviceOrderRepository.find({
    //   select: { automaker: true }
    // });
    // return orders

    const queryBuilder = this.serviceOrderRepository.createQueryBuilder("service-order-workshop")
    // if (query.id) {
    //   console.log(query)
    //   // queryBuilder.andWhere('service-order-workshop.automaker = :automaker', { automaker: `${query.query.automaker}` });
    //   return queryBuilder.where("service-order-workshop.id = :id", { query })
    // }
    console.log(query)
    if (query.id) {
      const orders = await queryBuilder.select("order").from(ServiceOrderWorkshop, "order").where(`order.id = :id`, { id: query.id }).getOne()
      return orders
    }
    if (query.automaker) {
      const orders = await queryBuilder.select("order").from(ServiceOrderWorkshop, "order").where(`order.automaker = :automaker`, { automaker: query.automaker }).getMany()
      return orders
    }
    if (query.project) {
      const orders = await queryBuilder.select("order").from(ServiceOrderWorkshop, "order").where(`order.project = :project`, { project: query.project }).getMany()
      return orders
    }
    if (query.model) {
      const orders = await queryBuilder.select("order").from(ServiceOrderWorkshop, "order").where(`order.model = :model`, { model: query.model }).getMany()
      return orders
    }
    if (query.fleet) {
      const orders = await queryBuilder.select("order").from(ServiceOrderWorkshop, "order").where(`order.fleet = :fleet`, { fleet: query.fleet }).getMany()
      return orders
    }
    return await queryBuilder.getMany()
  }
}

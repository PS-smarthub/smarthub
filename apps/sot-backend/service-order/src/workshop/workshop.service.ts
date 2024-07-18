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
  async getAllByQuery({ query }: any) {
    const queryBuilder = this.serviceOrderRepository.createQueryBuilder("order");

    if (query.field == "automaker") {
      const automakerList = await this.serviceOrderRepository.find({
        select: ["automaker"]
      })

      return automakerList.map(record => record.automaker)
    }

    if (query.automaker) {
      if (query.project) {
        const projectList = await queryBuilder.andWhere(`order.project = :project`, { project: query.project }).getMany()
        return projectList.map(record => record.project)
      }
      // Object.keys(query).forEach((key) => {
      //   if (query[key]) {
      //     queryBuilder.andWhere(`order.${key} = :${key}`, { [key]: query[key] })
      //   }
      // })
    }

    return await queryBuilder.getMany()
  }

}

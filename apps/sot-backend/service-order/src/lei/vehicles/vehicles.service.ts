import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly repository: Repository<Vehicle>,
  ) { }

  create(createVehicleDto: CreateVehicleDto) {
    const newVehicle = this.repository.create(createVehicleDto);
    return this.repository.save(newVehicle);
  }

  async findAll({ query }: any) {
    const queryBuilder = this.repository.createQueryBuilder("vehicle")

    if (query.automaker) {
      queryBuilder.andWhere("vehicle.automaker = :automaker", { automaker: query.automaker })
    }

    if (query.project) {
      queryBuilder.andWhere("vehicle.project = :project", { project: query.project })
    }

    if (query.model) {
      queryBuilder.andWhere("vehicle.model = :model", { model: query.model })
    }

    if (query.chassis) {
      queryBuilder.andWhere("vehicle.chassis = :chassis", { chassis: query.chassis })
    }

    if (query.fleet) {
      queryBuilder.andWhere("vehicle.fleet = :fleet", { fleet: query.fleet })
    }

    return await queryBuilder.getMany()
  }

  async findAllAutomaker() {
    const automakerList = await this.repository.find({ select: { automaker: true } })

    return automakerList.map(item => item.automaker)
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }
}

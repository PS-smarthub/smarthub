import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsService: Repository<Project>,
  ) { }

  create(createProjectDto: CreateProjectDto) {
    return this.projectsService.save(createProjectDto);
  }

  async findAll({ query }: any) {
    const queryBuilder = this.projectsService.createQueryBuilder("projects")
    console.log("Query: ", query)
    if (query.client) {
      queryBuilder.andWhere("projects.client = :client", { client: query.client })
    }
    return await queryBuilder.getMany()
  }
}

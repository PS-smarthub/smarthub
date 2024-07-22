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
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectsService.save(createProjectDto);
  }

  findAll() {
    return `This action returns all projects`;
  }
}

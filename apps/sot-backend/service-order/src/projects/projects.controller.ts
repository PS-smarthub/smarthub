import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @MessagePattern({ cmd: 'createProject' })
  create(@Payload() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @MessagePattern({ cmd: "getProjects" })
  getAll() {
    return this.projectsService.findAll()
  }
}

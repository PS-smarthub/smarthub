import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProjectDto } from './dtos/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) { }

  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.natsClient.send({ cmd: 'createProject' }, createProjectDto);
  }

  @Get()
  getProjects() {
    return this.natsClient.send({ cmd: "getProjects" }, {})
  }
}

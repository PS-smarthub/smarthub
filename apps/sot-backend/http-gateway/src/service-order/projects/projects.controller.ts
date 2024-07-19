import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProjectDto } from './dtos/create-project.dto';

@Controller()
export class ProjectsController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  @Post('projects')
  createWorkshopServiceOrder(@Body() createProjectDto: CreateProjectDto) {
    return this.natsClient.send({ cmd: 'createProject' }, createProjectDto);
  }
}

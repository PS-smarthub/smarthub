import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { ProjectsController } from './projects.controller';
@Module({
  imports: [NatsClientModule],
  controllers: [ProjectsController],
  providers: [],
})
export class ProjectsModule {}

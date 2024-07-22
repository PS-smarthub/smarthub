import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { ServiceOrderController } from './service-order.controller';
import { LeiModule } from './lei/lei.module';
import { ProjectsModule } from './projects/projects.moduel';

@Module({
  imports: [NatsClientModule, LeiModule, ProjectsModule],
  controllers: [ServiceOrderController],
  providers: [],
})
export class ServiceOrderModule {}

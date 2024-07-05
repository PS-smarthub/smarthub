import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { MaterialController } from './material.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [MaterialController],
  providers: [],
})
export class MaterialModule {}

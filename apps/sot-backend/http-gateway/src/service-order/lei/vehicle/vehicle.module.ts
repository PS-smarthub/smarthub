import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { VehicleController } from './vehicle.controller';
@Module({
  imports: [NatsClientModule],
  controllers: [VehicleController],
  providers: [],
})
export class VehicleModule {}

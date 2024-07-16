import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { VehicleModule } from './vehicle/vehicle.module';
@Module({
  imports: [NatsClientModule, VehicleModule],
  controllers: [],
  providers: [],
})
export class LeiModule {}

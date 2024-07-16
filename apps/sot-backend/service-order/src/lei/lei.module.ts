import { Module } from '@nestjs/common';
import { VehiclesModule } from './vehicles/vehicles.module';
import { EquipmentsModule } from './equipments/equipments.module';

@Module({
  imports: [VehiclesModule, EquipmentsModule],
  controllers: [],
  providers: [],
})
export class LeiModule {}

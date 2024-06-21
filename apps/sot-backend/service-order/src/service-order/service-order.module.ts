import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceOrderWorkshop } from 'src/typeorm/entities/ServiceOrderWorkshop';
import { ServiceOrderController } from './service-order.controller';
import { ServiceOrderService } from './service-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceOrderWorkshop])],
  controllers: [ServiceOrderController],
  providers: [ServiceOrderService],
})
export class ServiceOrderModule {}

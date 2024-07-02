import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateMaterialDto } from './dtos/create-material.dto';

@Controller('material')
export class MaterialController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
    ) { }

    @Post()
    createWorkshopServiceOrder(
        @Body() createMaterialDto: CreateMaterialDto,
    ) {
        return this.natsClient.send(
            { cmd: 'createMaterial' },
            createMaterialDto,
        );
    }
}

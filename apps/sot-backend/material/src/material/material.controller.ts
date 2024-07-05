import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Controller()
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @MessagePattern('createMaterial')
  create(@Payload() createMaterialDto: CreateMaterialDto) {
    return this.materialService.create(createMaterialDto);
  }

  @MessagePattern('findAllMaterial')
  findAll() {
    return this.materialService.findAll();
  }

  @MessagePattern('findOneMaterial')
  findOne(@Payload() id: number) {
    return this.materialService.findOne(id);
  }

  @MessagePattern('updateMaterial')
  update(@Payload() updateMaterialDto: UpdateMaterialDto) {
    return this.materialService.update(updateMaterialDto.id, updateMaterialDto);
  }

  @MessagePattern('removeMaterial')
  remove(@Payload() id: number) {
    return this.materialService.remove(id);
  }
}

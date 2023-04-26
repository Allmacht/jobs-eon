import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { Shipment } from './shipments.entity';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Get()
  getAll(): Promise<Shipment[]> {
    return this.shipmentsService.getAll();
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number): Shipment {
  //   return this.shipmentsService.findOne(id);
  // }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipment } from './shipments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShipmentsService {
  @InjectRepository(Shipment) private shipmentRepository: Repository<Shipment>;

  async getAll(): Promise<Shipment[]> {
    return await this.shipmentRepository.find({ relations: { charge: true } });
  }

  // findOne(id: number): Shipment {
  //   const shipment = this.shipments.find((shipment) => shipment.id === id);

  //   if (!shipment)
  //     throw new NotFoundException(`Shipment with id ${id} not found`);

  //   return shipment;
  // }
}

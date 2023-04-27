import { Charge } from 'src/charge/charge.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shipments')
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unique_order_number: string;

  @Column()
  shipment_number: string;

  @Column()
  shipping_service: string;

  @Column()
  total: number;

  @Column()
  client_id: number;

  @Column()
  warehouse_id: number;

  @Column()
  invoice: string;

  @Column()
  order_returned: boolean;

  @Column()
  cod: boolean;

  @Column({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'timestamp' })
  updated_at: Date;

  @OneToOne(() => Charge, (charge) => charge.shipment)
  charge: Charge;
}

import { Shipment } from 'src/shipments/shipments.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('charges')
export class Charge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  last_status: string;

  @Column()
  shipment_id: number;

  @Column({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'timestamp' })
  updated_at: Date;

  @OneToOne(() => Shipment)
  @JoinColumn({ name: 'shipment_id' })
  shipment: Shipment;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'service-order-workshop' })
export class ServiceOrderWorkshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  montadora: string;

  @Column({ nullable: false })
  project: string;

  @Column({ nullable: false })
  isIntern: boolean;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  chassis: string;

  @Column({ nullable: false })
  fleet: string;

  @Column({ nullable: false })
  vehicleLocation: string;

  @Column({ nullable: false })
  keyLocation: string;

  @Column({ nullable: true })
  serviceInformations?: string;

  @Column({ type: 'date', nullable: false })
  deliveryDate: Date;
}

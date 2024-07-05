import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'equipments' })
export class EquipmentOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  equipment_id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  model: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  sn: string;

  @Column()
  calibration_frequency_in_years: string;

  @Column()
  inventory: string;

  @Column()
  QMM_no_EIME: string;

  @Column()
  storage_location: string;
}

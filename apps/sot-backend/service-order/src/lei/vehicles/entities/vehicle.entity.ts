import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vehicle' })
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  automaker: string;

  @Column({ nullable: false })
  project: string;

  @Column({ nullable: false })
  responsible: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  color: string;

  @Column({ nullable: false })
  chassis: string;

  @Column({ nullable: true })
  fleet: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: false })
  nf_number: string;

  @Column({ type: 'date', nullable: false })
  nf_emission_date: Date;

  @Column({ nullable: false })
  loan_expiration_date: Date;
}

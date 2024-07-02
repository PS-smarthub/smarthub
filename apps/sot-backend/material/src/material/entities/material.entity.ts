import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'material' })
export class Material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department: string;

    @Column()
    responsible: string;

    @Column()
    client: string;

    @Column()
    externalResponsible: string;

    @Column()
    description: string;

    @Column()
    observation: string;

    @Column()
    quantity: number;

    @Column()
    invoiceOfEntry: string;

    @Column()
    entryDate: string;

    @Column()
    invoiceLocation: string;
}

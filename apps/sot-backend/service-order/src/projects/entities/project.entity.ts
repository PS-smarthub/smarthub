import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "projects" })
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    number: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: false })
    client: string;

    @Column({ nullable: false })
    motor: string;

    @Column({ nullable: false })
    motor_family: string;

    @Column({ nullable: false })
    injection: string;

    @Column({ nullable: false })
    aspiration: string;

    @Column({ nullable: false })
    fuel: string;

    @Column({ nullable: false })
    gearBox: string;

    @Column({ nullable: false })
    powertrain: string;

    @Column({ nullable: false })
    market: string;

    @Column({ nullable: false })
    legislation: string;

    @Column({ nullable: false })
    cicle: string;

    @Column({ nullable: false })
    diagnose: string;
}

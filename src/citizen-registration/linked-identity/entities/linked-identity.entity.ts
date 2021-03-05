import { BioDatum } from "src/citizen-registration/bio-data/entities/bio-datum.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LinkedIdentity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    NIN: number;

    @Column({nullable: true})
    BVN: number;

    @Column({nullable: true})
    MobileNumber: number;

    @JoinColumn()
    @OneToOne(type => BioDatum, BioDatum => BioDatum.LinkedIdentity, {cascade:true})
    BioDatum: BioDatum;
}

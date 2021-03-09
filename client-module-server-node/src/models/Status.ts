import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "status"})
class Status {

    @PrimaryGeneratedColumn({name: "sts_id"})
    id: number;

    @Column({name: "sts_status"})
    nome: string;
}

export { Status };
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cidade } from "./Cidade";

@Entity("estado")
class Estado {
    
    @PrimaryGeneratedColumn({name: "est_id"})
    id: number;

    @Column({name: "est_descricao"})
    descricao: string;

    @OneToMany(type => Cidade, cidades => cidades.estado)
    cidades: Cidade[];
}

export{ Estado }
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cidade } from "./Cidade";

@Entity("estado")
class Estado {
    
    @PrimaryGeneratedColumn({name: "est_id"})
    id: number;

    @Column({name: "est_descricao"})
    descricao: string;

    @OneToMany(() => Cidade, (cidade: Cidade) => cidade.estado)
    cidades: Cidade[];
}

export{ Estado }
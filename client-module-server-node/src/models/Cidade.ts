import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./Endereco";
import { Estado } from "./Estado";

@Entity("cidade")
class Cidade {
    
    @PrimaryGeneratedColumn({name: "cid_id"})
    id: number;

    @Column({name: "cid_descricao"})
    descricao: string;

    @ManyToOne(() => Estado, (estado: Estado) => estado.cidades)
    estado: Estado;

    @OneToMany(() => Endereco, (endereco: Endereco) => endereco.cidade)
    enderecos: Endereco[];
}

export { Cidade }
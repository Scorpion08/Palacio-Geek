import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./Endereco";
import { Estado } from "./Estado";

@Entity("cidade")
class Cidade {
    
    @PrimaryGeneratedColumn({name: "cid_id"})
    id: number;

    @Column({name: "cid_descricao"})
    descricao: string;

    @ManyToOne(type => Estado, estado => estado.cidades, {eager: true})
    @JoinColumn({name: "cid_estado_id"})
    estado: Estado;

    @OneToMany(type => Endereco, enderecos => enderecos.cidade)
    enderecos: Endereco[];
}

export { Cidade }
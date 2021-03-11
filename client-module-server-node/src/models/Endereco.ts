import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./Cidade";
import { Cliente } from "./Cliente";
import { Status } from "./Status";
import { TipoEndereco } from "./TipoEndereco";

@Entity("endereco")
class Endereco {
   
    @PrimaryGeneratedColumn({name: "end_id"})
    id: number;

    @Column({name: "end_logradouro"})
    logradouro: string;

    @Column({name: "end_numero"})
    numero: string;

    @Column({name: "end_bairro"})
    bairro: string;

    @Column({name: "end_cep"})
    cep: string;

    @Column({name: "end_complemento"})
    complemento: string;

    @ManyToOne(type => Cidade, cidade => cidade.enderecos, {eager: true})
    @JoinColumn({name: "end_cidade_id"})
    cidade: Cidade;

    @ManyToOne(type => Cliente, cliente => cliente.enderecos)
    @JoinColumn({name: "end_cliente_id"})
    cliente: Cliente;

    @ManyToOne(type => Status, {eager: true})
    @JoinColumn({name: "end_status_id"})
    status: Status;

    @ManyToOne(type => TipoEndereco, {eager: true})
    @JoinColumn({name: "end_ten_id"})
    tipoEndereco: TipoEndereco;
}

export { Endereco };
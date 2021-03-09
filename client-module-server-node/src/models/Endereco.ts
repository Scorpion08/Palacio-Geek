import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./Cidade";
import { Cliente } from "./Cliente";
import { Status } from "./Status";
import { TipoEndereco } from "./TipoEndereco";

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

    @ManyToOne(() => Cidade, (cidade: Cidade) => cidade.enderecos)
    @JoinColumn({name: "end_cidade_id"})
    cidade: Cidade;

    @ManyToOne(() => Cliente, (cliente: Cliente) => cliente.enderecos)
    @JoinColumn({name: "end_cliente_id"})
    cliente: Cliente;

    @ManyToOne(() => Status)
    @JoinColumn({name: "end_status_id"})
    status: Status;

    @ManyToOne(() => TipoEndereco)
    @JoinColumn({name: "end_ten_id"})
    tipoEndereco: TipoEndereco;
}

export { Endereco };
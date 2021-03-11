import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";


@Entity({name: "tipo_cliente"})
class TipoCliente {
    
    @PrimaryGeneratedColumn({name: "tcl_id"})
    id: number;

    @Column({name: "tcl_nome"})
    nome: string;

    @Column({name: "tcl_descricao"})
    descricao: string;

    @OneToMany(type => Cliente, clientes => clientes.tipoCliente)
    clientes: Cliente[];
}

export { TipoCliente };
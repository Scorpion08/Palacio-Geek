import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Documento } from "./Documento";
import { Endereco } from "./Endereco";
import { TipoCliente } from "./TipoCliente";
import { Usuario } from "./Usuario";

@Entity("cliente")
class Cliente {

    @PrimaryColumn({name: "cli_id"})
    readonly id: string;

    @Column({name: "cli_nome"})
	nome: string;

	@Column({name: "cli_sobrenome"})
	sobrenome: string;

	@CreateDateColumn({name: "cli_data_nascimento"})
	dataNascimento: Date;

	@Column({name: "cli_sexo"})
	sexo: string;

	@ManyToOne(type => TipoCliente, tipoCliente => tipoCliente.clientes, {eager: true})
	@JoinColumn({name: "cli_tcl_id"})
	tipoCliente: TipoCliente;

	@OneToOne(type => Usuario, {eager: true})
	@JoinColumn({name: "cli_usu_id"})
	usuario: Usuario;

	@OneToMany(type => Endereco, enderecos => enderecos.cliente, {eager: true})
    enderecos: Endereco[];

	@OneToMany(type => Documento, documentos => documentos.cliente, {eager: true})
	documentos: Documento[];

}

export { Cliente };
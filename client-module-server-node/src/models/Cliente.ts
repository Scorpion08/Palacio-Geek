import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
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

	@Column({name: "cli_data_nascimento"})
	dataNascimento: Date;

	@Column({name: "cli_sexo"})
	sexo: string;

	@ManyToOne(() => TipoCliente)
	tipoCliente = TipoCliente;

	@OneToOne(() => Usuario)
	usuario: Usuario;

	@OneToMany(() => Endereco, (endereco: Endereco) => endereco.cliente)
    enderecos: Endereco[];

	@OneToMany(() => Documento, (documento: Documento) => documento.cliente)
	documentos: Documento[];

}

export { Cliente };
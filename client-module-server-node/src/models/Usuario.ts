import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./Status";
import { TipoUsuario } from "./TipoUsuario";

@Entity("usuario")
class Usuario {

    @PrimaryGeneratedColumn({name: "usu_id"})
    readonly id: number;

    @Column({name: "usu_email"})
    email: string;

    @Column({name: "usu_senha"})
	senha: string;

	reSenha: string;

	@ManyToOne(type => Status, {eager: true})
    @JoinColumn({name: "usu_status_id"})
	status: Status;

	@ManyToOne(type => TipoUsuario, tipoUsuario => tipoUsuario.usuarios, {eager: true})
    @JoinColumn({name: "usu_tipo_usuario_id"})
    tipoUsuario: TipoUsuario;
}

export { Usuario };
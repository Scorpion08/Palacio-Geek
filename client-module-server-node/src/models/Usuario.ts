import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./Status";
import { TipoUsuario } from "./TipoUsuario";

@Entity("usuarios")
class Usuario {

    @PrimaryGeneratedColumn({name: "usu_id"})
    readonly id: number;

    @Column({name: "usu_email"})
    email: string;

    @Column({name: "usu_senha"})
	senha: string;

	reSenha: string;

	@ManyToOne(() => Status)
	status: Status;

	@ManyToOne(() => TipoUsuario)
    tipoUsuario: TipoUsuario;
}

export { Usuario };
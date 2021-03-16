import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from './Usuario';

@Entity({name: "tipo_usuario"})
class TipoUsuario {

    @PrimaryGeneratedColumn({name: "tus_id"})
    id: number;

    @Column({name: "tus_nome_tipo"})
    tipo: string;

    @OneToMany(type => Usuario, tipoCliente => TipoUsuario)
    usuarios: Usuario[];
}

export { TipoUsuario }
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tipo_usuario"})
class TipoUsuario {

    @PrimaryGeneratedColumn({name: "tus_id"})
    id: number;

    @Column({name: "tus_nome_tipo"})
    tipo: string;

}

export { TipoUsuario }
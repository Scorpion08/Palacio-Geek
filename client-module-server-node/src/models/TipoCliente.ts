import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tipo_cliente"})
class TipoCliente {
    
    @PrimaryGeneratedColumn({name: "tcl_id"})
    id: number;

    @Column({name: "tcl_nome"})
    nome: string;

    @Column({name: "tcl_descricao"})
    descricao: string;
}

export { TipoCliente };
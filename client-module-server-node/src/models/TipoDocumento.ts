import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipo_documento")
class TipoDocumento {
    
    @PrimaryGeneratedColumn({name: "tdo_id"})
    id: number;

    @Column({name: "tdo_nome"})
    nome: string;

    @Column({name: "tdo_descricao"})
    descricao: string;
}

export { TipoDocumento };
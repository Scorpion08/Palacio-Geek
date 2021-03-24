import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipo_endereco")
class TipoEndereco {
    
    @PrimaryGeneratedColumn({name: "ten_id"})
    id: number;

    @Column({name: "ten_nome"})
    nome: string;

    @Column({name: "ten_descricao"})
    descricao: string;
}

export { TipoEndereco };
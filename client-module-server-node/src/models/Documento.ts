import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { TipoDocumento } from "./TipoDocumento";
import { TipoEndereco } from "./TipoEndereco";

@Entity("documento")
class Documento {
    
    @PrimaryGeneratedColumn({name: "doc_id"})
    id: number;

    @Column({name: "doc_codigo"})
    codigo: string;

    @Column({name: "doc_data_validade"})
    dataValidade: Date;

    @ManyToOne(() => TipoEndereco)
    @JoinColumn({name: "doc_tdo_id"})
    tipoDocumento: TipoDocumento;

    @OneToOne(() => Cliente)
    @JoinColumn({name: "doc_cli_id"})
    cliente: Cliente;
}

export { Documento };
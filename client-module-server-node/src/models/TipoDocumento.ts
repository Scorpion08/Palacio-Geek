import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Documento } from './Documento';


@Entity("tipo_documento")
class TipoDocumento {
    
    @PrimaryGeneratedColumn({name: "tdo_id"})
    id: number;

    @Column({name: "tdo_nome"})
    nome: string;

    @Column({name: "tdo_descricao"})
    descricao: string;

    @OneToMany(type => Documento, documentos => documentos.tipoDocumento)
    documentos: Documento[];
}

export { TipoDocumento };
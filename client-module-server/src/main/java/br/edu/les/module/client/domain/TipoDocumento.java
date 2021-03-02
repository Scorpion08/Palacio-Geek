package br.edu.les.module.client.domain;

import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Data
@Component
@Entity
@Table(name = "tipo_documento")
public class TipoDocumento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tdo_id")
    private  Integer id;

    @Column(name = "tdo_nome")
    private String nome;

    @Column(name = "tdo_descricao")
    private String descricao;

    @OneToMany(mappedBy = "tipoDocumento")
    @JsonIgnore
    private List<Documento> documentos;
}

package br.edu.les.module.client.domain;

import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Data
@Component
@Entity
@Table(name = "tipo_endereco")
public class TipoEndereco extends EntidadeDominio{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ten_id")
    private  Integer id;

    @Column(name = "ten_nome")
    private String nome;

    @Column(name = "ten_descricao")
    private String descricao;

    @OneToMany(mappedBy = "tipoEndereco")
    @JsonIgnore
    private List<Endereco> Enderecos;
}

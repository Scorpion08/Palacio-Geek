package br.edu.les.module.client.domain;

import br.edu.les.module.client.domain.interfaces.ITipoEntidade;
import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Data
@Component
@Entity
@Table(name = "tipo_cliente")
public class TipoCliente implements ITipoEntidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tcl_id")
    private Integer id;

    @Column(name = "tcl_nome")
    private String nome;

    @Column(name = "tcl_descricao")
    private String descricao;
}

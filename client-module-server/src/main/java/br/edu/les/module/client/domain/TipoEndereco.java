package br.edu.les.module.client.domain;

import br.edu.les.module.client.domain.interfaces.ITipoEntidade;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Component
@Entity
@Table(name = "tipo_endereco")
public class TipoEndereco extends EntidadeDominio implements ITipoEntidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ten_id")
    private  Integer id;

    @Column(name = "ten_nome")
    private String nome;

    @Column(name = "ten_descricao")
    private String descricao;
}

package br.edu.les.module.client.domain;

import br.edu.les.module.client.domain.interfaces.IEntidade;
import br.edu.les.module.client.domain.interfaces.ITipoEntidade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "tipo_telefone")
public class TipoTelefone extends EntidadeDominio implements ITipoEntidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ttl_id")
    private Integer id;


    @Column(name = "ttl_tipo")
    private String tipo;

}

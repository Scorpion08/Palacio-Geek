package br.edu.les.module.client.domain;

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
@Table(name = "cidade")
public class Cidade extends EntidadeDominio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cid_id")
    private Integer id;

    @Column(name = "cid_descricao")
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "cid_estado_id")
    private Estado estado;
}

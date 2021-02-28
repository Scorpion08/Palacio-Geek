package br.edu.les.module.client.domain;

import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Component
@Entity
@Table(name = "endereco")
public class Endereco extends EntidadeDominio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "end_id")
    private Integer id;

    @Column(name = "end_logradouro")
    private String logradouro;

    @Column(name = "end_numero")
    private String numero;

    @Column(name = "end_bairro")
    private String bairro;

    @Column(name = "end_cep")
    private String cep;

    @Column(name = "end_complemento")
    private String complemento;

    @ManyToOne()
    @JoinColumn(name = "end_cidade_id")
    private Cidade cidade;

    @ManyToOne()
    @JoinColumn(name = "end_cliente_id")
    private Cliente cliente;

    @ManyToOne()
    @JoinColumn(name = "end_status_id")
    private Status status;

    @ManyToOne()
    @JoinColumn(name = "end_ten_id")
    private TipoEndereco tipoEndereco;

}

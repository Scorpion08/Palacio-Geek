package br.edu.les.module.client.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.time.LocalDate;


@Data
@Component
@Entity
@Table(name = "documento")
public class Documento extends  EntidadeDominio{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doc_id")
    private Integer id;

    @Column(name = "doc_codigo")
    private String codigo;

    @Column(name = "doc_data_validade")
    private LocalDate dataValidade;

    @ManyToOne
    @JoinColumn(name = "doc_tdo_id")
    private TipoDocumento tipoDocumento;

    @OneToOne()
    @JoinColumn(name = "doc_cli_id")
    private Cliente cliente;

}


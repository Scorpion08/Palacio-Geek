package br.edu.les.module.client.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Data
@Component
@Entity
@Table(name = "pessoa")
public class Pessoa extends EntidadeDominio{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pes_id")
    private  Integer id;

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL)
    private List<Documento> documento;
}


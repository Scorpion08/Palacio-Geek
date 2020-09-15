package br.edu.les.module.client.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Component
@Entity
@Table(name = "cliente")
public class Cliente extends EntidadeDominio implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cli_id")
	private Integer id;

	@Column(name = "cli_nome")
	private String nome;

	@Column(name = "cli_sobrenome")
	private String sobrenome;

	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Column(name = "cli_data_nascimento")
	private LocalDate dataNascimento;

	@Size(max = 20)
	@Column(name = "cli_sexo")
	private String sexo;

	@Size(max = 14)
	@Column(name = "cli_cpf")
	private String cpf;

	@JoinColumn(name = "cli_usuario_id")
	@OneToOne(cascade = CascadeType.ALL)
	private Usuario usuario;

	@Builder.Default
	@JsonIgnore
	@OneToMany(mappedBy = "cliente" ,cascade = CascadeType.ALL)
	private List<Endereco> enderecos = new ArrayList<>();

	@Builder.Default
	@OneToMany(mappedBy = "cliente" ,cascade = CascadeType.ALL)
	private List<Telefone> telefones = new ArrayList<>();

}

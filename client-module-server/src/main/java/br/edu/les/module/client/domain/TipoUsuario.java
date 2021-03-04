package br.edu.les.module.client.domain;

import br.edu.les.module.client.domain.interfaces.IEntidade;
import br.edu.les.module.client.domain.interfaces.ITipoEntidade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Component
@Entity
@Table(name = "tipo_usuario")
public class TipoUsuario implements ITipoEntidade {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tus_id")
	private Integer id;

	@Column(name = "tus_nome_tipo")
	private String tipo;
}

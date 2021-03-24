package br.edu.les.module.client.strategy.cliente;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.Cliente;

@Log
@Component
public class ValidaDadosCliente implements IStrategy {

	@Autowired
    ValidadorString validadorString;

	@Override
	public String processar(final EntidadeDominio entidade) {

		StringBuilder msg = new StringBuilder();

		if(entidade instanceof Cliente){
			Cliente cliente = (Cliente) entidade;
			msg.append(validadorString.validar(cliente.getNome(), "nome"));
			msg.append(validadorString.validar(cliente.getSobrenome(), "sobrenome"));
			msg.append(validadorString.validar(cliente.getSexo(), "sexo"));
		}

		if(msg.length()>0){
			log.info("Mensagem de erro: " + msg.toString());
		}
		return msg.toString();
	}
}

package br.edu.les.module.client.strategy;

import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.EntidadeDominio;

@Component
public interface IStrategy {
	public String processar(EntidadeDominio entidade);
}

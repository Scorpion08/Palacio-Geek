package br.edu.les.module.client.strategy.tipo.cliente;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import static br.edu.les.module.client.enums.TipoClienteEnum.PESSOA_FISICO;

@Service
public class InsereTipoCliente implements IStrategy {
    @Override
    public String processar(EntidadeDominio entidade) {

        if(entidade instanceof Cliente) {
            Cliente cliente = (Cliente) entidade;
            cliente.setTipoCliente(PESSOA_FISICO.getObject());
        }

        return null;
    }
}

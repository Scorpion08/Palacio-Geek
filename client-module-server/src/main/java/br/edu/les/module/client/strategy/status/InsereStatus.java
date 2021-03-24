package br.edu.les.module.client.strategy.status;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.enums.StatusEnum;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Service;

@Service
public class InsereStatus implements IStrategy {
    @Override
    public String processar(EntidadeDominio entidade) {
        if(entidade instanceof Cliente) {
            Cliente cliente = (Cliente) entidade;
            cliente.getEnderecos().forEach(endereco -> endereco.setStatus(StatusEnum.ATIVO.getObject()));
            if(cliente.getUsuario() != null)
                cliente.getUsuario().setStatus(StatusEnum.ATIVO.getObject());
        }
        return null;
    }
}

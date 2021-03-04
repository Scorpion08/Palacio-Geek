package br.edu.les.module.client.strategy.endereco;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Service;

@Service
public class InsereClienteNoEndereco implements IStrategy {

    @Override
    public String processar(EntidadeDominio entidade) {
        if(entidade instanceof Cliente) {
            Cliente cliente = (Cliente) entidade;
            if(cliente.getEnderecos() != null && cliente.getEnderecos().size() > 0) {
                cliente.getEnderecos().forEach(endereco -> endereco.setCliente(cliente));
            }
        }
        return null;
    }
}

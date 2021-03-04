package br.edu.les.module.client.strategy.documento;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Service;

@Service
public class InsereClienteNoDocumento implements IStrategy {

    @Override
    public String processar(EntidadeDominio entidade) {

        if(entidade instanceof Cliente) {
            Cliente cliente = (Cliente) entidade;
            if(cliente.getDocumentos() != null && cliente.getDocumentos().size() > 0) {
                cliente.getDocumentos().forEach( documento -> documento.setCliente(cliente));
            }
        }

        return null;
    }
}

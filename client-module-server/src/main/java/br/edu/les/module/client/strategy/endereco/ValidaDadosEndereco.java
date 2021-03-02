package br.edu.les.module.client.strategy.endereco;

import br.edu.les.module.client.domain.Endereco;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidaDadosEndereco implements IStrategy {

    @Autowired
    ValidadorString validadorString;

    @Override
    public String processar(EntidadeDominio entidade) {

        StringBuilder msg = new StringBuilder();

        if(entidade instanceof Endereco){
            Endereco endereco = (Endereco) entidade;
            msg.append(validadorString.validar(endereco.getLogradouro(),"logradouro"));
            msg.append(validadorString.validar(endereco.getNumero(), "numero"));
            msg.append(validadorString.validar(endereco.getBairro(), "bairro"));
            msg.append(validadorString.validar(endereco.getCep(), "cep"));
            if(endereco.getCidade() != null) {
                msg.append(validadorString.validar(endereco.getCidade().getDescricao(), "cidade"));
                if(endereco.getCidade().getEstado() != null)
                    msg.append(validadorString.validar(endereco.getCidade().getEstado().getDescricao(), "estado"));
                else
                    msg.append(validadorString.validar("", "estado"));
            } else {
                msg.append(validadorString.validar("", "cidade"));
                msg.append(validadorString.validar("", "estado"));
            }
        }

        return msg.toString();
    }
}

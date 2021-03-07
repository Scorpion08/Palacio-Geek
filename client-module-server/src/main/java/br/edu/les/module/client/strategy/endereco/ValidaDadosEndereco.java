package br.edu.les.module.client.strategy.endereco;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.Endereco;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ValidaDadosEndereco implements IStrategy {

    @Autowired
    ValidadorString validadorString;

    @Override
    public String processar(EntidadeDominio entidade) {
        StringBuilder msg = new StringBuilder();
        if(entidade instanceof Cliente || entidade instanceof Endereco){
            if(entidade instanceof Cliente) {
                List<Endereco> enderecos = ((Cliente) entidade).getEnderecos();
                if(enderecos.size() > 0) {
                    enderecos.forEach(endereco -> msg.append(validaDados(endereco)));
                } else {
                    msg.append("Nenhum dado de endereço foi enviado.");
                }
            } else {
                Endereco endereco = (Endereco) entidade;
                validaDados(endereco);
            }
        }
        return msg.toString();
    }

    private String validaDados(Endereco endereco) {
        StringBuilder msg = new StringBuilder();
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
        return msg.toString();
    }
}

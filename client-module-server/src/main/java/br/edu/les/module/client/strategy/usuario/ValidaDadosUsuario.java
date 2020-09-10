package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.Cliente;

@Component
public class ValidaDadosUsuario implements IStrategy {

    @Autowired
    ValidadorString validadorString;

    @Override
    public String processar(EntidadeDominio entidade) {

        StringBuilder msg = new StringBuilder();
        Boolean eInstanciaDePessoa = false;

        if (entidade instanceof Cliente || entidade instanceof Usuario) {

            Usuario usuario = null;

            if(entidade instanceof Cliente) {
                usuario = ((Cliente) entidade).getUsuario();
                eInstanciaDePessoa = true;
            } else {
                usuario = (Usuario) entidade;
            }

            msg.append(validadorString.validar(usuario.getEmail(), "email"));
            if(eInstanciaDePessoa){
                if (usuario.getId() == null) {
                    msg.append(validadorString.validar(usuario.getPassword(), "senha"));
                    msg.append(validadorString.validar(usuario.getRePassword(), "confirmar senha"));
                }
            } else {
                if (usuario.getId() == null) {
                    msg.append(validadorString.validar(usuario.getPassword(), "senha"));
                } else {
                    msg.append(validadorString.validar(usuario.getPassword(), "senha"));
                    msg.append(validadorString.validar(usuario.getRePassword(), "confirmar senha"));
                }
            }
        }

        return msg.toString();
    }
}

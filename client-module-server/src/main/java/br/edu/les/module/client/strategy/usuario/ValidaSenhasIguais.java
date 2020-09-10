package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.util.Util;

@Component
public class ValidaSenhasIguais implements IStrategy {

    @Override
    public String processar(EntidadeDominio entidade) {

        StringBuilder msg = new StringBuilder();

        if (entidade instanceof Cliente
            || entidade instanceof Usuario) {

            Usuario usuario = null;

            if(entidade instanceof Cliente) usuario = ((Cliente) entidade).getUsuario();

            if(entidade instanceof Usuario) usuario = (Usuario) entidade;

            if(Util.isNotNull(usuario.getPassword()) && Util.isNotNull(usuario.getRePassword())) {
                if(!usuario.getPassword().equals(usuario.getRePassword())) {
                    msg.append("Senhas estão diferentes.");
                }
            }
        }
        return msg.toString();
    }
}

package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import lombok.extern.java.Log;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.util.Util;

@Log

@Component
public class ValidaSenhasIguais implements IStrategy {

    @Override
    public String processar(EntidadeDominio entidade) {

        StringBuilder msg = new StringBuilder();

        if ( entidade instanceof Usuario) {

            Usuario usuario =  (Usuario) entidade;

            if(Util.isNotNull(usuario.getPassword()) && Util.isNotNull(usuario.getRePassword())) {
                if(!usuario.getPassword().equals(usuario.getRePassword())) {
                    msg.append("Senhas estão diferentes.");
                }
            }
        }

        if(msg.length()>0){
            log.info("Mensagem de erro: " + msg.toString());
        }

        return msg.toString();
    }
}

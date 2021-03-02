package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.Cliente;

@Log

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
            if (entidade instanceof Cliente) {
                usuario = ((Cliente) entidade).getUsuario();
            } else {
                usuario = (Usuario) entidade;
            }


            if (usuario != null) {
                msg.append(validadorString.validar(usuario.getEmail(), "email"));
                if (eInstanciaDePessoa) {
                    if (usuario.getId() == null) {
                        msg.append(validadorString.validar(usuario.getSenha(), "senha"));
                        msg.append(validadorString.validar(usuario.getReSenha(), "confirmar senha"));
                    }
                } else {
                    if (usuario.getId() == null) {
                        msg.append(validadorString.validar(usuario.getSenha(), "senha"));
                    } else {
                        msg.append(validadorString.validar(usuario.getSenha(), "senha"));
                        msg.append(validadorString.validar(usuario.getReSenha(), "confirmar senha"));
                    }
                }
            }else {
                msg.append("Falta dados do usuario");
            }
        }
        if(msg.length()>0){
            log.info("Mensagem de erro: " + msg.toString());
        }

        return msg.toString();
    }
}

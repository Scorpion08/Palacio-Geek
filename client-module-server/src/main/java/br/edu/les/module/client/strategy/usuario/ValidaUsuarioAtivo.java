package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidaUsuarioAtivo implements IStrategy {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public String processar(EntidadeDominio entidade) {

        StringBuilder msg = new StringBuilder();

        if(entidade instanceof Cliente || entidade instanceof Usuario){

            Usuario usuarioRecebido = null;

            if(entidade instanceof Cliente) usuarioRecebido = ((Cliente) entidade).getUsuario();

            if(entidade instanceof Usuario) usuarioRecebido = (Usuario) entidade;

            Usuario usuarioValidador = usuarioRepository.findByEmail(usuarioRecebido.getEmail());

            if(usuarioValidador != null && usuarioValidador.getStatus().getId() == 2){
                msg.append("Conta inativada.");
            }
        }

        return msg.toString();
    }
}

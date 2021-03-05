package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.strategy.cliente.ValidaExistenciaPessoa;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.repository.UsuarioRepository;

@Log

@Component
public class ValidaExistenciaUsuario implements IStrategy {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public String processar(EntidadeDominio entidade) {

        StringBuilder msg = new StringBuilder();

        if(entidade instanceof Cliente || entidade instanceof Usuario) {

            Usuario usuario;

            if(entidade instanceof Cliente){
                usuario = ((Cliente) entidade).getUsuario();
            } else {
                usuario = (Usuario) entidade;
            }

            Usuario usuarioValidador = usuarioRepository.findByEmail(usuario.getEmail());

            if(usuarioValidador != null){
                if(!usuario.getEmail().equals(usuarioValidador.getEmail())){
                    msg.append("Email já cadastrado.");
                }
            }

            if(msg.length()>0){
                log.info("Mensagem de erro: " + msg.toString());
            }
        }

        return msg.toString();
    }
}

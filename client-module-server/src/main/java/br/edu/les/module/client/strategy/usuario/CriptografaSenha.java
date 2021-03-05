package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.util.Criptografia;

@Component
public class CriptografaSenha implements IStrategy {

    @Autowired
    ValidadorString validadorString;

    @Override
    public String processar(EntidadeDominio entidade) {
        if(entidade instanceof Cliente || entidade instanceof Usuario) {
            Usuario usuario;
            if(entidade instanceof Cliente) {
                usuario = ((Cliente) entidade).getUsuario();
            } else {
                usuario = (Usuario) entidade;
            }
            if(validadorString.validar(usuario.getSenha(), "senha") == ""){
                usuario.setSenha(Criptografia.criptografar(usuario.getSenha()));
            }
        }
        return null;
    }
}

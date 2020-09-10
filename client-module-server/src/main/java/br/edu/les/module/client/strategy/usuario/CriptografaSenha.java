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
            Usuario usuario = null;
            if(entidade instanceof Cliente) usuario = ((Cliente) entidade).getUsuario();
            if(entidade instanceof Usuario) usuario = (Usuario) entidade;

            if(validadorString.validar(usuario.getPassword(), "senha") == ""){
                usuario.setPassword(Criptografia.criptografar(usuario.getPassword()));
            }
        }

        return null;
    }
}

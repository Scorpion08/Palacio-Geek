package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.Util;
import br.edu.les.module.client.util.GeradorCodigo;
import org.springframework.stereotype.Component;

@Component
public class GeraCodigoUsuario implements IStrategy {

    @Override
    public String processar(EntidadeDominio entidade) {

        if( entidade instanceof Cliente || entidade instanceof Usuario) {

            Usuario usuario;

            if(entidade instanceof Cliente) {
                usuario = ((Cliente) entidade).getUsuario();
            } else {
                usuario = (Usuario) entidade;
            }

            if(usuario != null) {
                usuario.setCodigo(GeradorCodigo.gerarCodigoUsuario());
            }
        }
        return null;
    }
}

package br.edu.les.module.client.strategy.tipo.usuario;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Service;

import static br.edu.les.module.client.enums.TipoUsuarioEnum.CLIENTE;

@Service
public class InsereTipoUsuario implements IStrategy {
    @Override
    public String processar(EntidadeDominio entidade) {
        if(entidade instanceof Cliente || entidade instanceof Usuario) {

            Usuario usuario;

            if(entidade instanceof Cliente)
                usuario = ((Cliente) entidade).getUsuario();
            else
                usuario = (Usuario) entidade;

            if(usuario != null)
                usuario.setTipoUsuario(CLIENTE.getObject());
        }
        return null;
    }
}

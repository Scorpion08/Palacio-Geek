package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.enums.StatusEnum;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Service;


@Service
public class InativaUsuario implements IStrategy {

    @Override
    public String processar(EntidadeDominio entidade) {
        if(entidade instanceof Cliente || entidade instanceof  Usuario){

            Usuario usuario;

            if(entidade instanceof  Cliente){
                usuario = ((Cliente) entidade).getUsuario();
            }else {
                usuario = (Usuario) entidade;
            }
            usuario.setStatus(StatusEnum.INATIVO.getObject());
        }
        return null;
    }



}

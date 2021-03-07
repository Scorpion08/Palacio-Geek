package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.repository.UsuarioRepository;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PegaDadosUsuario implements IStrategy {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public String processar(EntidadeDominio entidade) {
        if(entidade instanceof Usuario){
            Usuario usuario = (Usuario) entidade;
            usuarioRepository.findById(usuario.getId()).map(usuarioEncontrado -> {
                usuario.setCodigo(usuarioEncontrado.getCodigo());
                usuario.setEmail(usuarioEncontrado.getEmail());
                usuario.setSenha(usuarioEncontrado.getSenha());
                usuario.setTipoUsuario(usuarioEncontrado.getTipoUsuario());
                return usuario;
            });
        }
        return null;
    }
}

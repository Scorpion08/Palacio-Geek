package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.repository.UsuarioRepository;
import br.edu.les.module.client.util.Criptografia;

@Component
public class ValidaSenhaUsuario implements IStrategy {

	@Autowired
    ValidadorString validadorString;

	@Autowired
	UsuarioRepository usuarioRepository;

	@Override
	public String processar(EntidadeDominio entidade) {

		StringBuilder msg = new StringBuilder();

		if(entidade instanceof Usuario){
			Usuario usuario = (Usuario) entidade;
			if(validadorString.validar(usuario.getPassword(), "senha").equals("")){
				usuario.setPassword(Criptografia.criptografar(usuario.getPassword()));
				if(!usuarioRepository.existsByEmailAndPassword(usuario.getEmail(), usuario.getPassword())){
					msg.append("Login ou senha incorreto.");
				}
			}
		}
		
		return msg.toString();
	}

}

package br.edu.les.module.client.strategy.usuario;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.repository.UsuarioRepository;
import br.edu.les.module.client.util.Criptografia;
@Log

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
			if(validadorString.validar(usuario.getSenha(), "senha").equals("")){
				usuario.setSenha(Criptografia.criptografar(usuario.getSenha()));
				if(!usuarioRepository.existsByEmailAndSenha(usuario.getEmail(), usuario.getSenha())){
					msg.append("Login ou senha incorreto.");
				}
			}
		}

		if(msg.length()>0){
			log.info("Mensagem de erro: " + msg.toString());
		}

		return msg.toString();
	}

}

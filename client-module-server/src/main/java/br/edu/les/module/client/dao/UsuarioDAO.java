package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.EntidadeDominio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.repository.ClienteRepository;
import br.edu.les.module.client.repository.TipoUsuarioRepository;
import br.edu.les.module.client.repository.UsuarioRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioDAO implements IDAO {

	@Autowired
	UsuarioRepository usuarioRepository;

	@Autowired
	TipoUsuarioRepository tipoUsuarioRepository;

	@Autowired
    ClienteRepository clienteRepository;

	@Override
	public EntidadeDominio salvar(EntidadeDominio entidade) {
		Usuario usuario = (Usuario) entidade;
		return usuarioRepository.save(usuario);
	}

	@Override
	public List<EntidadeDominio> consultar(EntidadeDominio entidade) {

		List<EntidadeDominio> usuarios = new ArrayList<>();
		Usuario usuario = (Usuario) entidade;

		if(usuario.getId() != null){
			usuarios.add(usuarioRepository.findUsuarioById(usuario.getId()));
		} else if(usuario.getEmail() != null) {
			usuario = usuarioRepository.findByEmail(usuario.getEmail());
			usuarios.add(clienteRepository.findClienteByUsuarioId(usuario.getId()));
		} else {
			usuarios.addAll(usuarioRepository.findAll());
		}

		return usuarios;
	}

	@Override
	public void alterar(EntidadeDominio entidade) {
		Usuario usuario = (Usuario) entidade;
		Usuario usuarioSalvo = usuarioRepository.findUsuarioById(usuario.getId());
		usuarioSalvo.setSenha(usuario.getSenha());
		entidade = usuarioRepository.save(usuarioSalvo);
		usuario.setSenha(null);
	}

	@Override
	public void excluir(EntidadeDominio entidade) {
		salvar(entidade);
	}
}

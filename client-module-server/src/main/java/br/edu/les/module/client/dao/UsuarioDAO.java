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
		usuario.setTipoUsuario(tipoUsuarioRepository.findTipoUsuarioById(usuario.getTipoUsuario().getId()));
		return usuarioRepository.save(usuario);
	}

	@Override
	public List<EntidadeDominio> consultar(EntidadeDominio entidade) {

		List<EntidadeDominio> usuarios = new ArrayList<>();
		Usuario usuario = (Usuario) entidade;

		if(usuario.getId() != null){
			usuarios.add(clienteRepository.findClienteById(usuario.getId()));
			return usuarios;
		}

		if(usuario.getEmail() != null) {
			usuario = usuarioRepository.findByEmail(usuario.getEmail());
			usuarios.add(clienteRepository.findClienteById(usuario.getId()));
			return usuarios;
		}

		usuarioRepository.findAll().forEach(p -> usuarios.add(p));

		return usuarios;
	}

	@Override
	public void alterar(EntidadeDominio entidade) {
		Usuario usuario = (Usuario) entidade;
		Usuario usuarioSalvo = usuarioRepository.findUsuarioById(usuario.getId());
		usuarioSalvo.setPassword(usuario.getPassword());
		entidade = usuarioRepository.save(usuarioSalvo);
		usuario.setPassword(null);
	}

	@Override
	public void excluir(EntidadeDominio entidade) {
		Usuario usuario = (Usuario) entidade;
		usuarioRepository.deleteById(usuario.getId());
	}
}

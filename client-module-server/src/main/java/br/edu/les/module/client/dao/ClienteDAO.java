package br.edu.les.module.client.dao;

import java.util.ArrayList;
import java.util.List;

import br.edu.les.module.client.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.les.module.client.repository.ClienteRepository;
import br.edu.les.module.client.repository.UsuarioRepository;

@Service
public class ClienteDAO implements IDAO {

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private UsuarioDAO usuarioDAO;

	@Autowired
	private TelefoneDAO telefoneDAO;

	@Override
	public EntidadeDominio salvar(EntidadeDominio entidade) {
		Cliente cliente = (Cliente) entidade;
		cliente.setUsuario( (Usuario) usuarioDAO.salvar(cliente.getUsuario()));
		for (Telefone telefone : cliente.getTelefones()) {
			telefone.setCliente(cliente);

		}
		cliente = clienteRepository.save((cliente));

		return cliente;
	}
	
	@Override
	public List<EntidadeDominio> consultar(EntidadeDominio entidade) {

		List<EntidadeDominio> pessoas = new ArrayList<>();
		Cliente cliente = (Cliente) entidade;

		if(cliente.getId() != null){
			pessoas.add(clienteRepository.findById(cliente.getId()).get());
			return pessoas;
		}

		if(cliente.getUsuario() != null
				&& cliente.getUsuario().getId() != null){
			pessoas.add(clienteRepository.findClienteByUsuario_Id(cliente.getUsuario().getId()));
			return pessoas;
		}

		clienteRepository.findAll().forEach(clienteEncontrado -> {
			pessoas.add(clienteEncontrado);
		});

		return pessoas;
	}

	@Override
	public void alterar(EntidadeDominio entidade) {
		Cliente cliente = (Cliente) entidade;
		Usuario usuario = usuarioRepository.findUsuarioById(cliente.getUsuario().getId());
		cliente.getUsuario().setPassword(usuario.getPassword());
		cliente.getUsuario().setTipoUsuario(usuario.getTipoUsuario());
		cliente.getUsuario().setStatus(usuario.getStatus());
		for (Telefone telefone : cliente.getTelefones()) {
			telefone.setCliente(cliente);
		}
		cliente = clienteRepository.save(cliente);
		cliente.getUsuario().setPassword(null);
	}

	@Override
	public void excluir(EntidadeDominio entidade) {
		Cliente cliente = clienteRepository.findById(((Cliente) entidade).getId()).get();
		cliente.getUsuario().setStatus(Status.builder().id(2).build());
		usuarioRepository.save(cliente.getUsuario());
	}
}

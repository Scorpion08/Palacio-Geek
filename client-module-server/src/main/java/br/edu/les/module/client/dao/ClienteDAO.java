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

	@Override
	public EntidadeDominio salvar(EntidadeDominio entidade) {
		Cliente cliente = (Cliente) entidade;
		cliente = clienteRepository.save(cliente);
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

		clienteRepository.findAll().forEach(clienteEncontrado -> {
			pessoas.add(clienteEncontrado);
		});

		return pessoas;
	}

	@Override
	public void alterar(EntidadeDominio entidade) {
		Cliente cliente = (Cliente) entidade;
		cliente = clienteRepository.save(cliente);
	}

	@Override
	public void excluir(EntidadeDominio entidade) {
		Cliente cliente = (Cliente) entidade;
		cliente.getUsuario().setStatus(Status.builder().id(2).build());
		clienteRepository.save(cliente);
 	}
}

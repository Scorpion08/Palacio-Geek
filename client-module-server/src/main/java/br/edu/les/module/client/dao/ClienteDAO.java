package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Status;
import br.edu.les.module.client.enums.StatusEnum;
import br.edu.les.module.client.repository.ClienteRepository;
import br.edu.les.module.client.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

		List<EntidadeDominio> clientes = new ArrayList<>();
		Cliente cliente = (Cliente) entidade;

		if(cliente.getId() != null){
			clienteRepository.findById(cliente.getId()).ifPresent(clientes::add);
		} else {
			clientes.addAll(clienteRepository.findAll());
		}

		return clientes;
	}

	@Override
	public void alterar(EntidadeDominio entidade) {
		Cliente cliente = (Cliente) entidade;
		cliente = clienteRepository.save(cliente);
	}

	@Override
	public void excluir(EntidadeDominio entidade) {
		Cliente cliente = (Cliente) entidade;
		cliente.getUsuario().setStatus(StatusEnum.INATIVO.getObject());
		clienteRepository.save(cliente);
 	}
}

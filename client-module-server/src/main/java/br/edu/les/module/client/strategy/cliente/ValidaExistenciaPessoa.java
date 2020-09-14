package br.edu.les.module.client.strategy.pessoa;

import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.domain.EntidadeDominio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.repository.ClienteRepository;

@Service
public class ValidaExistenciaPessoa implements IStrategy {

    @Autowired
    ClienteRepository clienteRepository;

    @Override
    public String processar(final EntidadeDominio entidade) {
        Cliente cliente = (Cliente) entidade;
        StringBuilder msg = new StringBuilder();
        if(cliente.getCpf() != null){
            if(clienteRepository.existsClienteByCpf(cliente.getCpf())){
                msg.append("CPF já cadastrado.");
            }
        }
        return msg.toString();
    }
}

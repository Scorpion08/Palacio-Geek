package br.edu.les.module.client.strategy.cliente;

import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.domain.EntidadeDominio;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.repository.ClienteRepository;
@Log
@Service
public class ValidaExistenciaPessoa implements IStrategy {

    @Autowired
    ClienteRepository clienteRepository;

    @Override
    public String processar(final EntidadeDominio entidade) {
        Cliente cliente = (Cliente) entidade;
        StringBuilder msg = new StringBuilder();
        if(msg.length()>0){
            log.info("Mensagem de erro: " + msg.toString());
        }

        return msg.toString();
    }
}

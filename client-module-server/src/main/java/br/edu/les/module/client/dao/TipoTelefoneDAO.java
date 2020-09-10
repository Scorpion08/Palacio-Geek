package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.repository.TipoTelefoneRepository;
import br.edu.les.module.client.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TipoTelefoneDAO implements IDAO {

    @Autowired
    private TipoTelefoneRepository tipoTelefoneRepository;

    @Override
    public EntidadeDominio salvar(EntidadeDominio entidade) {

        return null;
    }

    @Override
    public void alterar(EntidadeDominio entidade) {}

    @Override
    public void excluir(EntidadeDominio entidade) {}

    @Override
    public List<EntidadeDominio> consultar(EntidadeDominio entidade) {
    	
    	List<EntidadeDominio> tiposTelefone = new ArrayList<>();
    	
    	tipoTelefoneRepository.findAll().forEach(tipoTelefone -> tiposTelefone.add(tipoTelefone));
    	
        return tiposTelefone;
    }
}

package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Telefone;
import br.edu.les.module.client.util.Util;
import br.edu.les.module.client.repository.TelefoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TelefoneDAO implements IDAO {

    @Autowired
    private TelefoneRepository telefoneRepository;

    @Override
    public EntidadeDominio salvar(EntidadeDominio entidade) {
        return telefoneRepository.save((Telefone) entidade);
    }

    @Override
    public void alterar(EntidadeDominio entidade) {}

    @Override
    public void excluir(EntidadeDominio entidade) {}

    @Override
    public List<EntidadeDominio> consultar(EntidadeDominio entidade) {
    	
    	List<EntidadeDominio> telefones = new ArrayList<>();
        Telefone telefone = (Telefone) entidade;

        if(Util.isNotNull(telefone.getCliente()) && Util.isNotNull(telefone.getCliente().getId())){
            telefones.addAll(telefoneRepository.findByCliente_Id(telefone.getCliente().getId()));
            return telefones;
        }
    	
    	telefoneRepository.findAll().forEach(tipoTelefone -> telefones.add(tipoTelefone));
    	
        return telefones;
    }
}

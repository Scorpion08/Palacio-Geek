package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.TipoEndereco;
import br.edu.les.module.client.repository.TipoEnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TipoEnderecoDAO implements IDAO{

    @Autowired
    private TipoEnderecoRepository repository;

    @Override
    public EntidadeDominio salvar(EntidadeDominio entidade) {
        return null;
    }

    @Override
    public void alterar(EntidadeDominio entidade) {

    }

    @Override
    public void excluir(EntidadeDominio entidade) {

    }

    @Override
    public List<EntidadeDominio> consultar(EntidadeDominio entidade) {
        ArrayList<EntidadeDominio> entidadeDominios = new ArrayList<>();
        if(entidade instanceof TipoEndereco) {
            entidadeDominios.addAll(repository.findAll());
        }
        return entidadeDominios;
    }
}

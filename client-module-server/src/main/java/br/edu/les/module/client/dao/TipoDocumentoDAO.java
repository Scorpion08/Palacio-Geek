package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.TipoDocumento;
import br.edu.les.module.client.repository.TipoDocumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class TipoDocumentoDAO implements IDAO{

    @Autowired
    private TipoDocumentoRepository repository;

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
        List<EntidadeDominio> dominios = new ArrayList<>();
        dominios.addAll(repository.findAll());
        return dominios;
    }
}

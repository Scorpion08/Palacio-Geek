package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.Cidade;
import br.edu.les.module.client.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.repository.CidadeRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class CidadeDAO implements IDAO {

    @Autowired
    CidadeRepository cidadeRepository;

    @Override
    public EntidadeDominio salvar(EntidadeDominio entidade) { return null; }

    @Override
    public void alterar(EntidadeDominio entidade) { }

    @Override
    public void excluir(EntidadeDominio entidade) { }

    @Override
    public List<EntidadeDominio> consultar(EntidadeDominio entidade) {
        if (entidade instanceof Cidade){
            List<EntidadeDominio> cidades = new ArrayList<>();
            Cidade cidade = (Cidade) entidade;
            if(Util.isNotNull(cidade.getId())){
                cidadeRepository.findByEstado_Id(cidade.getEstado().getId())
                        .forEach( resultadoCidade -> cidades.add(resultadoCidade));
            }else {
                cidades.addAll(cidadeRepository.findAll());
            }

            return cidades;
        } return null;
    }
}

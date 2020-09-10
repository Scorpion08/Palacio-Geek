package br.edu.les.module.client.dao;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.les.module.client.domain.Endereco;
import br.edu.les.module.client.repository.CidadeRepository;
import br.edu.les.module.client.repository.EnderecoRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnderecoDAO implements IDAO {

    @Autowired
    EnderecoRepository enderecoRepository;

    @Autowired
    CidadeRepository cidadeRepository;

    @Override
    public EntidadeDominio salvar(EntidadeDominio entidade) {
        if (entidade instanceof Endereco) {
            Endereco endereco = (Endereco) entidade;
            endereco.setCidade(cidadeRepository.findByNome(endereco.getCidade().getNome()));
            return enderecoRepository.save(endereco);
        }
        else return null;
    }

    @Override
    public void alterar(EntidadeDominio entidade) {
        entidade = enderecoRepository.save((Endereco) entidade);
    }

    @Override
    public void excluir(EntidadeDominio entidade) {
        Endereco endereco = (Endereco) entidade;
        enderecoRepository.inativaEndereco(endereco.getId());
    }

    @Override
    public List<EntidadeDominio> consultar(EntidadeDominio entidade) {
        if (entidade instanceof Endereco){
            List<EntidadeDominio> enderecos = new ArrayList<>();
            Endereco endereco = (Endereco) entidade;
            if(Util.isNotNull(endereco.getId())){
                enderecos.add(enderecoRepository.findById(endereco.getId()).get());
                return enderecos;
            }
            if(Util.isNotNull(endereco.getCliente())
                    && Util.isNotNull(endereco.getCliente().getId())
                    && Util.isNotNull(endereco.getStatus())){
                enderecos.addAll(enderecoRepository.findEnderecoByClienteAndStatus(endereco.getCliente().getId(), endereco.getStatus().getId()));
                return enderecos;
            }
            enderecoRepository.findByCliente_Id(endereco.getCliente().getId())
                    .forEach( resultadoEndereco -> enderecos.add(resultadoEndereco));
            return enderecos;
        } return null;
    }
}

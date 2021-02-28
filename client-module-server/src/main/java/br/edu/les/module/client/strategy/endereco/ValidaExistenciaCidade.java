package br.edu.les.module.client.strategy.endereco;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.util.validador.ValidadorString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.les.module.client.domain.Endereco;
import br.edu.les.module.client.repository.CidadeRepository;

@Component
public class ValidaExistenciaCidade implements IStrategy {

    @Autowired
    ValidadorString validadorString;

    @Autowired
    CidadeRepository cidadeRepository;

    @Override
    public String processar(EntidadeDominio entidade) {

        StringBuilder msg = new StringBuilder();

        if(entidade instanceof Endereco){
            Endereco endereco = (Endereco) entidade;
            if(endereco.getCidade().getDescricao() != null && endereco.getCidade().getEstado().getId() != null){
                if(!cidadeRepository
                        .existsByEstado_IdAndAndDescricao(endereco.getCidade().getEstado().getId(), endereco.getCidade().getDescricao())){
                    msg.append("Cidade não existe dentro do estado de " + endereco.getCidade().getEstado().getDescricao());
                }
            }
        }

        return msg.toString();
    }
}

package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.Cidade;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CidadeRepository extends CrudRepository<Cidade, Integer> {

    ArrayList<Cidade> findByEstado_Id(Integer id);

    Cidade findCidadeByDescricao(String nome);

    Boolean existsByEstado_IdAndAndDescricao(Integer id, String nome);
}

package br.edu.les.module.client.repository;

import java.util.List;

import br.edu.les.module.client.domain.TipoEndereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoEnderecoRepository extends JpaRepository<TipoEndereco, Integer> { }

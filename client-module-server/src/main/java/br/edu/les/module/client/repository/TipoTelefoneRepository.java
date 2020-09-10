package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.TipoTelefone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface TipoTelefoneRepository extends JpaRepository<TipoTelefone, Integer> {}

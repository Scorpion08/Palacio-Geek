package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.Telefone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface TelefoneRepository extends JpaRepository<Telefone, Integer> {
    List<Telefone> findByCliente_Id(Integer id);
}

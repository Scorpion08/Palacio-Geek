package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Integer> {

    boolean existsClienteByCpf(String id);

    Cliente findClienteByUsuario_Id(Integer id);

    Cliente findByUsuario_Email(String email);

}

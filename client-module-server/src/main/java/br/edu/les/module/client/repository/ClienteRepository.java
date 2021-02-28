package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Integer> {

    Cliente findClienteById(Integer id);

}

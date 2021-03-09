package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    @Query("SELECT c FROM Usuario u JOIN Cliente c ON u.id = c.usuario.id WHERE u.id = :id")
    Cliente findClienteByUsuarioId(@Param("id") Integer id);

}

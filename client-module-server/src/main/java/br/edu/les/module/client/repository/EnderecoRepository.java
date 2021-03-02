package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {

    List<Endereco> findByCliente_Id(Integer id);

    @Transactional
    @Modifying
    @Query("UPDATE Endereco e SET e.status.id = 2 WHERE e.id = :idEndereco")
    void inativaEndereco(@Param("idEndereco") Integer idEndereco);

    @Query("SELECT e FROM Endereco e WHERE e.cliente.id = :idCliente AND e.status.id = :idStatus")
    List<Endereco> findEnderecoByClienteAndStatus(@Param("idCliente") Integer idPessoa, @Param("idStatus") Integer idStatus);
}

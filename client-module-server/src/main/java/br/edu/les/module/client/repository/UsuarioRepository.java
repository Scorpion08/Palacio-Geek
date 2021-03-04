package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findUsuarioById(Integer id);

    Usuario findByEmail(String email);

    Boolean existsByEmailAndSenha(String email, String senha);

    Boolean existsByEmail(String email);

}

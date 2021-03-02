package br.edu.les.module.client.repository;

import br.edu.les.module.client.domain.TipoDocumento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoDocumentoRepository extends JpaRepository<TipoDocumento, Integer> {
}

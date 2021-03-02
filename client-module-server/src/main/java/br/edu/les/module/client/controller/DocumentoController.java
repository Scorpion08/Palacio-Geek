package br.edu.les.module.client.controller;

import br.edu.les.module.client.domain.Documento;
import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/documentos")
public class DocumentoController {

    @Autowired
    private Fachada fachada;

    @GetMapping
    public ResponseEntity<Resultado> consulta() {
        return ResponseEntity.ok().body(fachada.consultar(new Documento()));
    }
}

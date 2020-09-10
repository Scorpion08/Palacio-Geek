package br.edu.les.module.client.endpoint;

import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/usuarios")
public class UsuarioEndpoint {
    
    @Autowired
    private Fachada fachada;

    @PostMapping()
    public ResponseEntity<?> consultar(@RequestBody Usuario usuario){
        return ResponseEntity.ok().body(fachada.consultar(usuario));
    }

    @PutMapping()
    public ResponseEntity<?> alterar(@RequestBody Usuario usuario){
        return ResponseEntity.ok().body(fachada.alterar(usuario));
    }
}

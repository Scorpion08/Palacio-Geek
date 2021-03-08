package br.edu.les.module.client.controller;

import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@CrossOrigin
@RequestMapping("/usuarios")
public class UsuarioController {
    
    @Autowired
    private Fachada fachada;

    @PostMapping()
    public ResponseEntity<?> consultar(@RequestBody Usuario usuario){
        return ResponseEntity.ok().body(fachada.consultar(usuario));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> inativar(@PathVariable Integer id){
        Usuario usuario = new Usuario();
        usuario.setId(id);
        return ResponseEntity.ok().body(fachada.excluir(usuario));
    }

    @PutMapping()
    public ResponseEntity<?> alterar(@RequestBody Usuario usuario){
        return ResponseEntity.ok().body(fachada.alterar(usuario));
    }
}

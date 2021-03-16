package br.edu.les.module.client.controller;


import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.domain.Usuario;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private Fachada fachada;

    @PostMapping
    public ResponseEntity<Resultado> fazerLogin(@RequestBody Usuario usuario) {
        return ResponseEntity.ok().body(fachada.consultar(usuario));
    }

}

package br.edu.les.module.client.controller;

import br.edu.les.module.client.domain.Estado;
import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/estados")
public class EstadoController {
    
    @Autowired
    private Fachada fachada;

    @GetMapping()
    public ResponseEntity<Resultado> consultar(){
        return ResponseEntity.ok().body(fachada.consultar(new Estado()));
    }

    @PostMapping()
    public ResponseEntity<Resultado> consultar(@RequestBody Estado estado){
        return ResponseEntity.ok().body(fachada.consultar(estado));
    }
}

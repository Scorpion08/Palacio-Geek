package br.edu.les.module.client.controller;

import br.edu.les.module.client.domain.Cidade;
import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@CrossOrigin
@RequestMapping("/cidades")
public class CidadeController {
    
    @Autowired
    private Fachada fachada;

    @GetMapping()
    public ResponseEntity<Resultado> consultar(){
        return ResponseEntity.ok().body(fachada.consultar(new Cidade()));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Resultado> consultar(@PathParam("id") Integer id){
        return ResponseEntity.ok().body(fachada.consultar( Cidade.builder().id(id).build()));
    }

    @PostMapping()
    public ResponseEntity<Resultado> consultar(@RequestBody Cidade cidade){
        return ResponseEntity.ok().body(fachada.consultar(cidade));
    }
}

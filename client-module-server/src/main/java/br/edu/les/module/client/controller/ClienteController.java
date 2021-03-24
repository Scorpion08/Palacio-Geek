package br.edu.les.module.client.controller;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/clientes")
public class ClienteController {
    
    @Autowired
    private Fachada fachada;

    @GetMapping()
    public ResponseEntity<Resultado> consultar(){
        return ResponseEntity.ok().body(fachada.consultar(Cliente.builder().build()));
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resultado> cunsultarPorId(@PathVariable Integer id){
        return ResponseEntity.ok().body(fachada.consultar(Cliente.builder().id(id).build()));
    }

    @PostMapping(path = "/cria")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> salvar(@RequestBody Cliente cliente){
        return ResponseEntity.ok().body(fachada.salvar(cliente));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        Cliente cliente = new Cliente();
        cliente.setId(id);
        return ResponseEntity.ok().body(fachada.excluir(cliente));
    }

    @PutMapping()
    public ResponseEntity<?> alterar(@RequestBody Cliente cliente){
        return ResponseEntity.ok().body(fachada.alterar(cliente));
    }
}

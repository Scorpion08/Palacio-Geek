package br.edu.les.module.client.endpoint;

import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/clientes")
public class ClienteEndpoint {
    
    @Autowired
    private Fachada fachada;

    @PostMapping()
    public ResponseEntity<Resultado> consultar(@RequestBody Cliente cliente){
        return ResponseEntity.ok().body(fachada.consultar(cliente));
    }

    @PostMapping(path = "/cria")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Resultado> salvar(@RequestBody Cliente cliente){
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

package br.edu.les.module.client.endpoint;

import br.edu.les.module.client.domain.Cidade;
import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/cidades")
public class CidadeEndpoint {
    
    @Autowired
    private Fachada fachada;

    @PostMapping()
    public ResponseEntity<Resultado> consultar(@RequestBody Cidade cidade){
        return ResponseEntity.ok().body(fachada.consultar(cidade));
    }
}

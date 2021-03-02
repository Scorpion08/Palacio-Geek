package br.edu.les.module.client.controller;

import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.domain.TipoEndereco;
import br.edu.les.module.client.facade.Fachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tipoenderecos")
public class TipoEnderecoController {

    @Autowired()
    private Fachada fachada;

    @GetMapping()
    @CrossOrigin()
    private ResponseEntity<Resultado> getTipoEnderecos(){
        return ResponseEntity.ok().body(fachada.consultar(new TipoEndereco()));
    }

}

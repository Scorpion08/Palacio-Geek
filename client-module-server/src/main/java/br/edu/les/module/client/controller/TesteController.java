package br.edu.les.module.client.controller;

import lombok.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import java.util.List;

@RestController
@RequestMapping("/testes")
public class TesteController {

    @PostMapping
    private ResponseEntity<Teste> post(@RequestBody Teste teste){
        return ResponseEntity.ok().body(teste);
    }
}

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Component
class Teste {
    private String texto;
    private List<String> testes;
}

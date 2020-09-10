package br.edu.les.module.client.util.validador;

import org.springframework.stereotype.Component;

@Component
public interface IValidator {
    public String validar(Object o, String fieldName);
}
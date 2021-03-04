package br.edu.les.module.client.enums;

import br.edu.les.module.client.domain.Status;

public enum StatusEnum {

    ATIVO(1, "Ativo"),
    INATIVO(2, "Inativo");

    private final Integer id;
    private final String nome;

    StatusEnum(final Integer id, final String nome) {
        this.id = id;
        this.nome = nome;
    }

    public Status getObject() {
        Status status = new Status();
        status.setId(this.id);
        status.setNome(this.nome);
        return status;
    }
}

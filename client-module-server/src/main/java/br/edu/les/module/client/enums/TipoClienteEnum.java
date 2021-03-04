package br.edu.les.module.client.enums;

import br.edu.les.module.client.domain.TipoCliente;
import lombok.Getter;

@Getter
public enum TipoClienteEnum {

    PESSOA_FISICO(1, "Pessoa Física", "Pessoa Física"),
    PESSOA_JURIDICA(2, "Pessoa Juridica", "Pessoa Juridica");

    TipoClienteEnum(final Integer id, final String nome, final String descricao){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    private Integer id;
    private String nome;
    private String descricao;

    public TipoCliente getObject() {
        TipoCliente tipoCliente = new TipoCliente();
        tipoCliente.setId(this.getId());
        tipoCliente.setNome(this.getNome());
        tipoCliente.setDescricao(this.getDescricao());
        return tipoCliente;
    }
}

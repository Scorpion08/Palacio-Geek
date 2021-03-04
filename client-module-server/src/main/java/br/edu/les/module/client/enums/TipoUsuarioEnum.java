package br.edu.les.module.client.enums;

import br.edu.les.module.client.domain.TipoCliente;
import br.edu.les.module.client.domain.TipoUsuario;
import lombok.Getter;

@Getter
public enum TipoUsuarioEnum {

    CLIENTE(1, "Cliente"),
    ADMINISTRADOR(2, "Administrador");

    TipoUsuarioEnum(final Integer id, final String nome){
        this.id = id;
        this.nome = nome;
    }

    private Integer id;
    private String nome;

    public TipoUsuario getObject() {
        TipoUsuario tipoUsuario = new TipoUsuario();
        tipoUsuario.setId(this.getId());
        tipoUsuario.setTipo(this.getNome());
        return tipoUsuario;
    }
}

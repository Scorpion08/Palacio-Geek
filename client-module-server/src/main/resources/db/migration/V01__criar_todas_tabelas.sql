CREATE TABLE cidade (
    cid_id         SERIAL NOT NULL,
    cid_descricao  VARCHAR(60) NOT NULL,
    cid_estado_id  INT NOT NULL
);

CREATE TABLE endereco (
    end_id              SERIAL NOT NULL,
    end_logradouro      VARCHAR(80) NOT NULL,
    end_numero          VARCHAR(6) NOT NULL,
    end_bairro          VARCHAR(70) NOT NULL,
    end_cep             VARCHAR(8) NOT NULL,
    end_complemento     VARCHAR(200) NOT NULL,
    end_cidade_id       INT NOT NULL,
    end_cliente_id      INT NOT NULL,
    end_status_id       INT NOT NULL,
    end_ten_id          INT NOT NULL
);

CREATE TABLE tipo_endereco (
    ten_id              SERIAL NOT NULL,
    ten_descricao       VARCHAR(100) NOT NULL,
    ten_nome            VARCHAR(100) NOT NULL

);

CREATE TABLE estado (
    est_id              SERIAL NOT NULL,
    est_descricao       VARCHAR(50) NOT NULL
);
CREATE TABLE pessoa (
    pes_id              SERIAL NOT NULL
);

CREATE TABLE documento (
    doc_id              SERIAL NOT NULL,
    doc_codigo          VARCHAR(14) NOT NULL,
    doc_data_validade  DATE,
    doc_tdo_id          INT NOT NULL,
    doc_cli_id          INT NOT NULL
);

CREATE TABLE tipo_documento (
    tdo_id              SERIAL NOT NULL,
    tdo_nome            VARCHAR(100) NOT NULL,
    tdo_descricao       VARCHAR(200) NOT NULL
);

CREATE TABLE cliente (
    cli_id               SERIAL NOT NULL,
    cli_nome             VARCHAR(30) NOT NULL,
    cli_sobrenome        VARCHAR(60) NOT NULL,
    cli_sexo             VARCHAR(1),
    cli_data_nascimento  DATE NOT NULL,
    cli_tcl_id           INT NOT NULL,
    cli_usu_id           INT NOT NULL
);

CREATE TABLE tipo_cliente (
    tcl_id              SERIAL NOT NULL,
    tcl_nome            VARCHAR(100) NOT NULL,
    tcl_descricao       VARCHAR(200) NOT NULL

);

CREATE TABLE status (
    sts_id              SERIAL NOT NULL,
    sts_status          VARCHAR(20) NOT NULL
);

CREATE TABLE tipo_usuario (
    tus_id         SERIAL NOT NULL,
    tus_nome_tipo  VARCHAR(30) NOT NULL
);

CREATE TABLE usuario (
    usu_id				 SERIAL NOT NULL,
    usu_codigo           VARCHAR(9) NOT NULL,
    usu_email            VARCHAR(80) NOT NULL UNIQUE,
    usu_senha            VARCHAR(60) NOT NULL,
    usu_tipo_usuario_id  INT NOT NULL,
    usu_status_id        INT NOT NULL
);

ALTER TABLE cidade ADD CONSTRAINT cidade_pk PRIMARY KEY ( cid_id );

ALTER TABLE endereco ADD CONSTRAINT endereco_pk PRIMARY KEY ( end_id );

ALTER TABLE estado ADD CONSTRAINT estado_pk PRIMARY KEY ( est_id );

ALTER TABLE cliente ADD CONSTRAINT cliente_pk PRIMARY KEY ( cli_id );

ALTER TABLE status ADD CONSTRAINT status_pk PRIMARY KEY ( sts_id );

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( usu_id );

ALTER TABLE tipo_usuario ADD CONSTRAINT user_type_pk PRIMARY KEY ( tus_id );

ALTER TABLE tipo_cliente ADD CONSTRAINT tipo_cliente_pk PRIMARY KEY ( tcl_id );

ALTER TABLE documento ADD CONSTRAINT documento_pk PRIMARY KEY ( doc_id );

ALTER TABLE tipo_documento ADD CONSTRAINT tipo_documento_pk PRIMARY KEY ( tdo_id );

ALTER TABLE tipo_endereco ADD CONSTRAINT tipo_endereco_pk PRIMARY KEY ( ten_id );


ALTER TABLE cidade
    ADD CONSTRAINT cidade_estado_fk FOREIGN KEY ( cid_estado_id )
        REFERENCES estado ( est_id );

ALTER TABLE usuario
    ADD CONSTRAINT usuario_type_fk FOREIGN KEY ( usu_tipo_usuario_id )
        REFERENCES tipo_usuario ( tus_id );

ALTER TABLE usuario
    ADD CONSTRAINT usuario_status_fk FOREIGN KEY ( usu_status_id )
        REFERENCES status ( sts_id );

ALTER TABLE endereco
    ADD CONSTRAINT endereco_cidade_fk FOREIGN KEY ( end_cidade_id )
        REFERENCES cidade ( cid_id );

ALTER TABLE endereco
    ADD CONSTRAINT endereco_status_fk FOREIGN KEY ( end_status_id )
        REFERENCES status ( sts_id );

ALTER TABLE endereco
    ADD CONSTRAINT endereco_cliente_fk FOREIGN KEY ( end_cliente_id )
        REFERENCES cliente ( cli_id );
        --*****--
ALTER TABLE endereco
    ADD CONSTRAINT endereco_tipo_endereco_fk FOREIGN KEY ( end_ten_id )
        REFERENCES tipo_endereco ( ten_id );

ALTER TABLE cliente
    ADD CONSTRAINT cliente_tipo_cliente_fk FOREIGN KEY ( cli_tcl_id )
        REFERENCES tipo_cliente ( tcl_id );

ALTER TABLE cliente
    ADD CONSTRAINT cliente_usuario_fk FOREIGN KEY ( cli_usu_id )
        REFERENCES usuario ( usu_id );

ALTER TABLE documento
    ADD CONSTRAINT documento_tipo_documento_fk FOREIGN KEY ( doc_tdo_id )
        REFERENCES tipo_documento ( tdo_id );

ALTER TABLE documento
    ADD CONSTRAINT documento_pessoa_fk FOREIGN KEY ( doc_cli_id )
        REFERENCES cliente ( cli_id );


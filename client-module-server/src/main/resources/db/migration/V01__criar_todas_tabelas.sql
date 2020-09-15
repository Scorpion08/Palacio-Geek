CREATE TABLE cidade (
    cid_id         SERIAL NOT NULL,
    cid_nome       VARCHAR(60) NOT NULL,
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
    end_cliente_id       INT NOT NULL,
    end_status_id       INT NOT NULL
);

CREATE TABLE estado (
    est_id     SERIAL NOT NULL,
    est_sigla  VARCHAR(2),
    est_nome   VARCHAR(50) NOT NULL
);

CREATE TABLE cliente (
    cli_id               SERIAL NOT NULL,
    cli_nome             VARCHAR(30) NOT NULL,
    cli_sobrenome        VARCHAR(60),
    cli_sexo             VARCHAR(20) NOT NULL,
    cli_data_nascimento  DATE NOT NULL,
    cli_cpf              VARCHAR(14) NOT null UNIQUE,
    cli_usuario_id       INT NOT NULL
);

CREATE TABLE status (
    sts_id      SERIAL NOT NULL,
    sts_status  VARCHAR(20) NOT NULL
);

CREATE TABLE telefone (
    tel_id                  SERIAL NOT NULL,
    tel_ddd                 VARCHAR(2),
    tel_numero              VARCHAR(15),
    tel_cliente_id           INT NOT NULL,
    tel_tipo_telefone_id    INT NOT NULL
);

CREATE TABLE tipo_telefone (
    ttl_id       SERIAL NOT NULL,
    ttl_tipo     VARCHAR(20)
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
    usu_tipo_usuario_id     INT NOT NULL,
    usu_status_id        INT NOT NULL
);

ALTER TABLE cidade ADD CONSTRAINT cidade_pk PRIMARY KEY ( cid_id );

ALTER TABLE endereco ADD CONSTRAINT endereco_pk PRIMARY KEY ( end_id );

ALTER TABLE estado ADD CONSTRAINT estado_pk PRIMARY KEY ( est_id );

ALTER TABLE cliente ADD CONSTRAINT cliente_pk PRIMARY KEY ( cli_id );

ALTER TABLE status ADD CONSTRAINT status_pk PRIMARY KEY ( sts_id );

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( usu_id );

ALTER TABLE tipo_usuario ADD CONSTRAINT user_type_pk PRIMARY KEY ( tus_id );

ALTER TABLE telefone ADD CONSTRAINT telefone_pk PRIMARY KEY ( tel_id );

ALTER TABLE tipo_telefone ADD CONSTRAINT tipo_telefone_pk PRIMARY KEY ( ttl_id );

ALTER TABLE cidade
    ADD CONSTRAINT cidade_estado_fk FOREIGN KEY ( cid_estado_id )
        REFERENCES estado ( est_id );

ALTER TABLE cliente
    ADD CONSTRAINT cliente_usuario_fk FOREIGN KEY ( cli_usuario_id )
        REFERENCES usuario ( usu_id );

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

ALTER TABLE telefone
    ADD CONSTRAINT telefone_tipo_telefone_fk FOREIGN KEY ( tel_tipo_telefone_id )
        REFERENCES tipo_telefone ( ttl_id );

ALTER TABLE telefone
    ADD CONSTRAINT telefone_cliente_fk FOREIGN KEY ( tel_cliente_id )
        REFERENCES cliente ( cli_id );
insert into tipo_usuario (tus_nome_tipo)
values ('Administrador'), ('Cliente');

insert into tipo_cliente (tcl_id, tcl_nome , tcl_descricao)
values (1, 'Pessoa Física', 'Pessoa Física'),(2, 'Pessoa Juridica', 'Pessoa Juridica');

insert into tipo_documento (tdo_id,tdo_nome, tdo_descricao)
values (1,'CPF', 'CPF'), (2, 'RG', 'RG'), (3, 'CNH', 'CNH'),(4, 'CNPJ', 'CNPJ');

insert into tipo_endereco (ten_id,ten_nome, ten_descricao)
values (1, 'Casa', 'Casa'), (2, 'Apartamento', 'Apartamento'), (3, 'Chacara', 'Chacara'),(4, 'Sitio', 'Sitio'),(5, 'Condominio', 'Condominio');


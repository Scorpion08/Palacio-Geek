insert into usuario (usu_codigo, usu_email, usu_senha, usu_status_id , usu_tipo_usuario_id)
values ('896564841','lucas_cascao_@outlook.com','CFF1A29A5F758BD2D52448F236EFB640', 1, 1),
('656226568','leonardo@gmail.com','CFF1A29A5F758BD2D52448F236EFB640', 1, 2),
('989898599','nataniprado26@gmail.com','CFF1A29A5F758BD2D52448F236EFB640', 1,2),
('598774598','joaocascao@yahoo.com.br','CFF1A29A5F758BD2D52448F236EFB640', 1, 2),
('899985985','jocascao@yahoo.com.br','CFF1A29A5F758BD2D52448F236EFB640', 1, 2);

insert into cliente (cli_nome , cli_sobrenome, cli_sexo, cli_data_nascimento, cli_tcl_id, cli_usu_id)
values ('Lucas','De Almeida Rama Cascão','M','16/09/1995' ,1,1),
('Leonardo','De Almeida Rama Cascão', 'M', '10/01/1997',1,2),
('Natani','Prado Cascão', 'F', '26/09/1999',1,3),
('João','Rama Cascão', 'M', '07/04/1965',1,4),
('Josueli','Keler De Almeida','F','17/09/1967',1,5);

insert into documento (doc_codigo, doc_data_validade, doc_tdo_id, doc_cli_id)
values ('23265746801', '2026-01-01', 1,1),
('23265746801', '2026-01-01', 1,2),
('23265746801', '2026-01-01', 1,3),
('23265746801', '2026-01-01', 1,4),
('23265746801', '2026-01-01', 1,5);



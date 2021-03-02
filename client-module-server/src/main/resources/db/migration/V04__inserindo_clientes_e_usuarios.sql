
insert into pessoa (pes_id) values (1),(2),(3),(4),(5);

insert into documento (doc_id, doc_codigo, doc_data_validade, doc_tdo_id, doc_pes_id)
values (1, '23265746801', '2026-01-01', 1,1),
(2, '23265746801', '2026-01-01', 1,2),
(3, '23265746801', '2026-01-01', 1,3),
(4, '23265746801', '2026-01-01', 1,4),
(5, '23265746801', '2026-01-01', 1,5);

insert into usuario (usu_id, usu_codigo, usu_email, usu_senha, usu_status_id , usu_tipo_usuario_id)
values (1, '896564841','lucas_cascao_@outlook.com','CFF1A29A5F758BD2D52448F236EFB640', 1, 1),
(2,'656226568','leonardo@gmail.com','CFF1A29A5F758BD2D52448F236EFB640', 1, 2),
(3,'989898599','nataniprado26@gmail.com','CFF1A29A5F758BD2D52448F236EFB640', 1,2),
(4, '598774598','joaocascao@yahoo.com.br','CFF1A29A5F758BD2D52448F236EFB640', 1, 2),
(5, '899985985','jocascao@yahoo.com.br','CFF1A29A5F758BD2D52448F236EFB640', 1, 2);


insert into cliente (cli_id, cli_nome , cli_sobrenome, cli_sexo, cli_data_nascimento, cli_pes_id, cli_tcl_id, cli_usu_id)
values (1, 'Lucas','De Almeida Rama Cascão','M','16/09/1995' ,1,1,1),
(2, 'Leonardo','De Almeida Rama Cascão', 'M', '10/01/1997',2,1,2),
(3, 'Natani','Prado Cascão', 'F', '26/09/1999',3,1,3),
(4, 'João','Rama Cascão', 'M', '07/04/1965',4,1,4),
(5, 'Josueli','Keler De Almeida','F','17/09/1967',5,1,5);


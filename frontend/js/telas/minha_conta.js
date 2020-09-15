function insereDadosDoClienteNaTela(){
    let usuarioLogado = JSON.parse(localStorage.getItem("usuario-logado"));
    insereValorDiv("nome-usuario-principal", usuarioLogado.nome + " " + usuarioLogado.sobrenome);
    insereValorDiv("nome", usuarioLogado.nome + " " + usuarioLogado.sobrenome);
    usuarioLogado.telefones.forEach( telefone => {
        insereValorDiv("numeroTelefone", " " + telefone.ddd + "-" + telefone.numero);
    })
    insereValorDiv("sexo", usuarioLogado.sexo);
    insereValorDiv("cpf", usuarioLogado.cpf);
    insereValorDiv("email", usuarioLogado.usuario.email);
}

function insereValorDiv(nomeElemento, valor){
    let elemento = document.getElementById(nomeElemento);
    elemento.append(valor);
}

insereDadosDoClienteNaTela();
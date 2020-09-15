function insereDadosDoClienteNosInputs(){
    let usuarioLogado = JSON.parse(localStorage.getItem("usuario-logado"));
    insereValorNoInput("nome", usuarioLogado.nome);
    insereValorNoInput("sobrenome", usuarioLogado.sobrenome);
    insereValorNoInput("celular", usuarioLogado.telefones[0].ddd + usuarioLogado.telefones[0].numero);
    insereValorNoInput("dataNasc", usuarioLogado.dataNascimento);
    insereValorNoInput("cpf", usuarioLogado.cpf);
    insereValorNoInput("email", usuarioLogado.usuario.email);
    insereValorNoInputSexo(usuarioLogado.sexo)
}

function insereValorNoInput(nomeInput, valor){
    let input = document.getElementById(nomeInput);
    input.value = valor;
}

function insereValorNoInputSexo(valor){
    let select = document.getElementById('sexo');
    for(let i = 0; i < select.options.length; i++){
        if(select.options[i].value == valor)
            select.options[i].selected = true;
    }       
}

insereDadosDoClienteNosInputs();
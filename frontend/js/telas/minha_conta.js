
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

function inativarConta(){
    let usuarioLogado = JSON.parse(localStorage.getItem('usuario-logado'));
    let userId = usuarioLogado.id;
    requisicaoStatus(userId);
    
}

function requisicaoStatus(userId){
    const urlModuloUsuario = localStorage.getItem("url-modulo-cliente");
    let urlCompleta = urlModuloUsuario + '/clientes/' + userId;
    facaRequisicao("DELETE", sucesso, falha, urlCompleta, null);
}

function sucesso(resultado) {
    if (resultado.msg == null || resultado.msg == undefined) {
        window.location.href = './index.html';
        
    } else {
        mostraMsgErroServidor(resultado.msg);
    }
}

function mostraMsgErroServidor(msg) {
    console.log(msg.split("."))
    msg.split(".").forEach(campo => {
        let msgErro = "Campo " + campo + " está inválido!";
        insereMsgCampoInvalido(campo, msgErro);
    });
}

function falha() {
    alert("Falha na inativação de conta!");
}



function montaJSON() {
    let logar = document.getElementById('login');
    return {
            email: logar.email.value,
            password: logar.senha.value
    }
}

function requisicaoSessao() {
    let dados_Json = montaJSON();
    let json = JSON.stringify(dados_Json);
    const urlModuloUsuario = localStorage.getItem("url-modulo-cliente");
    let urlCompleta = urlModuloUsuario + '/usuarios';
    facaRequisicao("POST", sucesso, falha, urlCompleta, json);
}

function logar(){
    if(validaCampos()){
        requisicaoSessao();
   } else {
       mostraMensagemErro();
   }
}

function mostraMensagemErro() {
    alert('Erro ao logar');
}

function insereMsgCampoInvalido(campo, msg) {
    console.log(campo);
    let inputCampo = document.getElementById("div-" + campo)
    if (inputCampo != null && inputCampo != undefined) {
        let h6 = document.createElement("h6");
        h6.append(msg);
        inputCampo.appendChild(h6);
    }

}

function sucesso(resultado) {
    if (resultado.msg == null || resultado.msg == undefined) {
        localStorage.setItem('usuario-logado', JSON.stringify(resultado.entidades[0]));
        window.location.href = './usuario_logado.html';
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

function falha(resultado) {
    alert(resultado);
}

function validaCampos() {
    let dadosCliente = document.getElementById("login");
    let todosCamposValidos = true;
    if (!validaCampo(dadosCliente.email)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.senha)) todosCamposValidos = false;
    return todosCamposValidos;
}

function validaCampo(campo) {
    console.log(campo.value)
    if (!validaString(campo.value)) {
        let msg = "Campo " + campo.placeholder + " está inválido !";
        insereMsgCampoInvalido(campo.name, msg);
        return false;
    }
    return true;
}
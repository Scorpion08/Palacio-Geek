function cadastraCliente() {
   
    if(validaCampos()){
         enviaRequisicaoCadastro();
    } else {
        mostraMensagemErro();
    }
}

function mostraMensagemErro() {

}

function enviaRequisicaoCadastro() {
    let dadosJson = monstaObjetoCliente();
    let json = JSON.stringify(dadosJson);
    const urlModuloUsuario = localStorage.getItem("url-modulo-cliente");
    let urlCompleta = urlModuloUsuario + '/clientes/cria';
    facaRequisicao("POST", sucesso, falha, urlCompleta, json);
}

function monstaObjetoCliente() {
    let dadosCliente = document.getElementById("usuario");
    return {
        nome: dadosCliente.nome.value,
        sobrenome: dadosCliente.sobrenome.value,
        cpf: dadosCliente.cpf.value,
        dataNascimento: '2000-01-01',
        sexo: dadosCliente.sexo.value,
        usuario: {
            email: dadosCliente.email.value,
            password: dadosCliente.senha.value,
            rePassword: dadosCliente.senha.value,
            status: {
                id: 1,
                status: "Ativo"
            },
            tipoUsuario: {
                id: 1,
                tipo: "Administração"
            }
        },
        telefones: [{
            ddd: '11',
            numero: dadosCliente.celular.value,
            tipoTelefone: {
                id: 1,
                tipo: "Celular"
            }
        }]
    }
}

function validaCampos() {
    let dadosCliente = document.getElementById("usuario");
    let todosCamposValidos = true;
    if (!validaCampo(dadosCliente.nome)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.sobrenome)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.celular)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.cpf)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.sexo) || !validacampoSexo(dadosCliente.sexo)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.dataNasc)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.email)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.senha)) todosCamposValidos = false;
    if (!validaCampo(dadosCliente.validarSenha)) todosCamposValidos = false;
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

function validacampoSexo(campoSexo) {
    if (campoSexo.value != "Masculino" && campoSexo.value != "Feminino" && campoSexo.value != "Outros") {
        let msg = "O valor de sexo é inválido! ";
        insereMsgCampoInvalido(campoSexo.name, msg);
        return false;
    }
    return true;
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

function falha(resultado) {
    alert("Falha na comunicação com o servidor!");
}
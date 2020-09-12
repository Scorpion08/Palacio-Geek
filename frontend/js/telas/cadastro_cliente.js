function cadastraCliente(){
    if(validaCampos()){
        enviaRequisicaoCadastro();
    } else {
        mostraMensagemErro();
    }
}

function mostraMensagemErro(){
    
}

function enviaRequisicaoCadastro(){
    let dadosJson = monstaObjetoCliente();
    let json = JSON.stringify(dadosJson);
    const urlModuloUsuario = localStorage.getItem("url-modulo-cliente");
    let urlCompleta = urlModuloUsuario + '/clientes/cria';
    facaRequisicao("POST", sucesso, falha, urlCompleta, json);
}

function monstaObjetoCliente() {
    let dadosCliente = document.getElementById("usuario");
    return {
        nome : dadosCliente.nome.value,
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
        telefones:[{
            ddd: '11',
            numero: dadosCliente.celular.value,
            tipoTelefone: {
                id: 1,
                tipo: "Celular"
            }
        }]
    }
}

function validaCampos(){
    let dadosCliente = document.getElementById("usuario");
    validaString(dadosCliente.nome.value);
}

function sucesso(resultado){
    alert("Sucesso");
}

function falha(resultado){
    alert("Falha");
}
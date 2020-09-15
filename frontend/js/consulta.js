function enviaRequisicaoConsulta() {
    let dadosJson = {
        id:6
    }
    let json = JSON.stringify(dadosJson);
    const urlModuloUsuario = localStorage.getItem("url-modulo-cliente");
    let urlCompleta = urlModuloUsuario + '/clientes';
    facaRequisicao("POST", sucesso, falha, urlCompleta, json);
}
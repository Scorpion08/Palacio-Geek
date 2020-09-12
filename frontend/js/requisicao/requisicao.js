
function facaRequisicao(tipoRequisicao, funcaoSucesso, funcaoFalha, url, dados){
    $.ajax({
        url : url,
        type : tipoRequisicao,
        data : dados
    })
    .done(function(resultado){
        funcaoSucesso(resultado);
    })
    .fail(function(jqXHR, textStatus, msg){
        alert(msg);
        funcaoFalha(msg);
    });
}
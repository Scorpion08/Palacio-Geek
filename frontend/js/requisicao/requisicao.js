
function facaRequisicao(tipoRequisicao, funcaoSucesso, funcaoFalha, url, dados){
    $.ajax({
        url : url,
        type : tipoRequisicao,
        data : dados,
        crossDomain : true,
        contentType : "application/json"
    })
    .done(function(resultado){
        funcaoSucesso(resultado);
    })
    .fail(function(jqXHR, textStatus, msg){
        funcaoFalha(msg);
    });
}
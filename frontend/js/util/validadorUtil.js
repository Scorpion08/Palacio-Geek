function validaString(valor){
    return validaValor(valor) && valor !== '';
}

function validaValor(value){
    return value !== undefined && value !== null;
}

function validaData(data){
    return validaValor(data);
}
var formaPgto = document.getElementById('formaPgto');
        formaPgto.onsubmit = function(e) {
            e.preventDefault();
            if(formaPgto.opcao.value == 'Cartão de crédito'){
                window.location.href = "./cartoes_cadastrados.html";
            }
            else if(formaPgto.opcao.value == 'Boleto'){
                window.location.href = "./endereco.html";
            }
        }
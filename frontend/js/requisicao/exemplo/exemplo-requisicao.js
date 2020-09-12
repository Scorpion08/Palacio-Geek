const sucesso = (dados) => {
    let divListaResultado = document.getElementById("lista-resultado");
    dados.results.forEach( pokemon  => {
        let elementH2 = document.createElement("h2");
        elementH2.append(pokemon.name);
        divListaResultado.appendChild(elementH2);
    });
}

const falha = (mensagem) => {
    alert("Falha");
}

const url = "https://pokeapi.co/api/v2/pokemon";

const dados = {

}

facaRequisicao("GET",sucesso, falha, url, dados);
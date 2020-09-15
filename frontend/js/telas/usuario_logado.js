function estaLogado(){
    let usuarioLogado = JSON.parse(localStorage.getItem('usuario-logado'));
    if(usuarioLogado != null){
        nomeUsuario = document.getElementById('nomeUser');
        nomeUsuario.innerText = usuarioLogado.nome;
    }
}
estaLogado()
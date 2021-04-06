function logar(){
    user = getElementById('div-email');
    senha = getElementById('div-senha');

    if(user === 'admin' && senha === 'admin' )
    {
        window.location.href = '/admin';
    }
}
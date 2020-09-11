var logar = document.getElementById('login');
        logar.onsubmit = function(e) {
            e.preventDefault();
            if(login.email.value == 'user' && login.senha.value == 'user'){
                window.location.href = "./usuario_logado.html";
            }
            else if(login.email.value == 'admin' && login.senha.value == 'admin'){
                window.location.href = './admin.html';
            }
        }
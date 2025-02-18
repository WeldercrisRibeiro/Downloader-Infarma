function entrar(){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('password').value

    if (usuario === 'admin' && senha === 'senha'){
        return window.location.href='main.html';
    } else {
        alert('Usuário ou senha incorretos!')
    }
}
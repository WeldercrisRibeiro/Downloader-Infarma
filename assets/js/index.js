function entrar(){
    let usuarios = [
        { usuario: "admin", senha: "senha" },
        { usuario: "INFARMA", senha: "vlssl" },
        { usuario: "infarma", senha: "vlssl" },
        { usuario: "weldercris.ribeiro@infarma.com.br", senha: "@Cris2507" }
    ];
    let usuarioDigitado = document.getElementById('usuario').value;
    let senhaDigitada = document.getElementById('password').value;

    let usuarioValido = usuarios.some(user => user.usuario === usuarioDigitado && user.senha === senhaDigitada);

    if (usuarioValido) {
        window.location.href = 'main.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

function sair() {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = 'index.html'; 
}


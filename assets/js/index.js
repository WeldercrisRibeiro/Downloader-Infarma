function entrar(){
    let usuarios = [
        { usuario: "weldercris.ribeiro@infarma.com.br", senha: "@Cris2507" },
        { usuario: "rodrigo.almeida@infarma.com.br", senha: "Rudrigo252" },
        { usuario: "kelton.lima@infarma.com.br", senha: "k.lima252" }
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
    window.location.href = 'index.html'; // Volta para a tela de login
}


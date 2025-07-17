function entrar(){
    let usuarios = [
        { usuario: "INFARMA", senha: "Infarma@060115" },
        { usuario: "infarma", senha: "Infarma@060115" },
        { usuario: "suporte@infarma.com.br", senha: "vlssl" }
    ];

    let usuarioDigitado = document.getElementById('usuario').value;
    let senhaDigitada = document.getElementById('password').value;

    let usuarioValido = usuarios.some(user => user.usuario === usuarioDigitado && user.senha === senhaDigitada);

    if (usuarioValido) {
        sessionStorage.setItem("loggedIn", "true"); // ✅ Move aqui
        window.location.href = 'main.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        entrar(); 
    }
});

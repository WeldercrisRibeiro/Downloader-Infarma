function entrar(){
    let usuarios = [
       // { usuario: "INFARMA", senha: "Infarma@060115" },
        //{ usuario: "infarma", senha: "Infarma@060115" },
        //{ usuario: "Infarma", senha: "Infarma@060115" }, 
        
        { usuario: "admin", senha: "vlssl" },
        { usuario: "ADMIN", senha: "vlssl" },
        { usuario: "Admin", senha: "vlssl" },

        { usuario: "WELDER", senha: "@2507" },
        { usuario: "welder", senha: "@2507" },
        { usuario: "Welder", senha: "@2507" },

        { usuario: "WLADIMIR", senha: "infarma2015" },
        { usuario: "wladimir", senha: "infarma2015" },
        { usuario: "Wladimir", senha: "infarma2015" }, 
        
        { usuario: "KELTON", senha: "@Infarma@060115" },
        { usuario: "KELTON", senha: "@Infarma@060115" },
        { usuario: "KELTON", senha: "@Infarma@060115" },
        
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

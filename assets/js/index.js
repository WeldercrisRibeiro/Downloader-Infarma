// assets/js/index.js
import users from './users.js';

function entrar() {
  const usuarioElem = document.getElementById('usuario');
  const senhaElem = document.getElementById('password');

  const usuarioDigitado = usuarioElem?.value.trim() || "";
  const senhaDigitada = senhaElem?.value.trim() || "";

  // ✅ Torna tudo minúsculo para comparar de forma case-insensitive
  const matchedUser = users.find(user =>
    user.usuario.toLowerCase() === usuarioDigitado.toLowerCase() &&
    user.senha.toLowerCase() === senhaDigitada.toLowerCase()
  );

  if (matchedUser) {
    // marca como logado e grava o nome do usuário para ser exibido na próxima página
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("username", matchedUser.usuario);
    window.location.href = 'main.html';
  } else {
    alert('Usuário ou senha incorretos!');
  }
}

// Permite chamada via onsubmit no HTML
window.entrar = entrar;

// Enter ativa o login
const pwdEl = document.getElementById("password");
if (pwdEl) {
  pwdEl.addEventListener("keypress", (event) => {
    if (event.key === "Enter") entrar();
  });
}

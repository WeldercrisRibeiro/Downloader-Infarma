// assets/js/index.js

window.onload = function() {
  alert("Bem-vindo! Devido a uma atualização, entre em contato com Welder para gerar uma nova senha! Se já tiver gerado, desconsiderar mensagem!");
};

async function entrar() {
  const usuario = document.getElementById('usuario')?.value.trim() || "";
  const senha = document.getElementById('password')?.value.trim() || "";

  try {
    const resposta = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, senha })
    });

    const dados = await resposta.json();

    if (dados.sucesso) {
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("username", dados.usuario);
      window.location.href = 'main.html';
    } else {
      alert(dados.mensagem || 'Usuário ou senha incorretos!');
    }
  } catch (err) {
    console.error(err);
    alert('Erro ao validar usuário.');
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

  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const icon = document.getElementById("iconEye");

    if (!toggleBtn || !passwordInput) return;

    toggleBtn.addEventListener("click", () => {
      const tipo = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = tipo;

      // Alterna o ícone (olho aberto / fechado)
      if (tipo === "password") {
        icon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12 18 19.5 12 19.5 2.25 12 2.25 12z" />
          <circle cx="12" cy="12" r="3" />
        `;
      } else {
        icon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 002.25 12s3.75 7.5 9.75 7.5c2.318 0 4.4-.75 6.02-1.977M9.88 9.88a3 3 0 104.24 4.24" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
        `;
      }
    });
  });
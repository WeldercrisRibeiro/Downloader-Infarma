// assets/js/index.js

window.onload = function() {
  alert("Bem-vindo! Devido a uma atualização, entre em contato com Welder para gerar uma nova senha! Se já tiver gerado, desconsiderar mensagem!");
};

async function entrar() {
  const usuario = document.getElementById('usuario')?.value.trim() || "";
  const senha = document.getElementById('password')?.value.trim() || "";

  try {
    const resposta = await fetch('/api/login.js', {
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

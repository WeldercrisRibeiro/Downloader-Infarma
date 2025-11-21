// assets/js/index.js (VERSÃO ATUALIZADA COM SUPABASE E API DE LOG)

import { SUPABASE_URL, SUPABASE_ANON_KEY, APP_VERSION} from "./config.js";

// Inicializa o cliente Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//window.onload = function() {
  //alert("Bem-vindo! Devido a uma atualização, entre em contato com Welder para gerar uma nova senha! Se já tiver gerado, desconsiderar mensagem!");
//};

/**
 * Envia uma requisição de notificação para a API de Log (antigo login.js)
 * @param {string} usuario - O nome de usuário validado.
 */
async function notificarAPIdeLog(usuario) {
    try {
        // Envia requisição para a sua API de Log na Vercel (seu antigo endpoint /api/login)
        const resposta = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // Envia APENAS o nome de usuário (a senha não é necessária, pois a validação já ocorreu)
            body: JSON.stringify({ usuario: usuario }) 
        });

        const dados = await resposta.json();
        if (!dados.sucesso) {
            console.warn("Falha ao registrar login na API de Log/Telegram:", dados.mensagem);
        }
    } catch (err) {
        console.error("Erro ao comunicar com a API de Log:", err);
    }
}

async function entrar() {
  const usuario = document.getElementById('usuario')?.value.trim() || "";
  const senha = document.getElementById('password')?.value.trim() || "";

  if (!usuario || !senha) {
    alert('Preencha o usuário e a senha!');
    return;
  }

  try {
    // ------------------------------------
    // PASSO 1: VALIDAÇÃO DE CREDENCIAIS (SUPABASE)
    // ------------------------------------
    const { data: matchedUsers, error } = await supabaseClient
      .from('users')
      .select('usuario, nome_completo')
      // Mantenho a validação 'ilike' (case-insensitive) para replicar o comportamento antigo
      .ilike('usuario', usuario)
      .ilike('senha', senha)
      .limit(1);

    if (error) throw error;
    const matchedUser = matchedUsers && matchedUsers[0];

    if (matchedUser) {
      // ------------------------------------
      // PASSO 2: LOGIN BEM-SUCEDIDO E NOTIFICAÇÃO
      // ------------------------------------
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("username", matchedUser.nome_completo || matchedUser.usuario);
      
      // Chamada ASSÍNCRONA para a API de Log e Telegram. 
      // Não esperamos por esta resposta para não atrasar o login.
      notificarAPIdeLog(matchedUser.usuario); 
      
      window.location.href = 'rotas/main.html';

    } else {
      // Falha na validação do Supabase
      alert('Usuário ou senha incorretos! Verifique suas credenciais.');
    }
  } catch (err) {
    console.error("❌ Erro no fluxo de login:", err);
    alert('Erro ao validar usuário no Supabase. Tente novamente.');
  }
}

// Permite chamada via onsubmit no HTML
window.entrar = entrar;

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    if (!toggleBtn || !passwordInput) return;

    toggleBtn.addEventListener("click", () => {
      const tipo = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = tipo;
      toggleBtn.innerHTML = tipo === "password" ? '🔐' : '🔓';
    });

    const footerEl = document.getElementById("versionFooter");
    if (footerEl) {
        // Pega o ano atual automaticamente também, pra você não precisar mudar em 2026
        const anoAtual = new Date().getFullYear(); 
        footerEl.innerHTML = `© ${anoAtual} Weldercris Ribeiro. Versão ${APP_VERSION}`;
    }
});
import users from './versoes.js';

// Bloqueia acesso se não estiver logado
if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

// Mapeamento das versões e seus executáveis


// Atualiza os executáveis disponíveis conforme a versão
function atualizarExecutaveis() {
    const versao = document.getElementById("versao").value;
    const container = document.getElementById("executaveis");

    container.innerHTML = ""; // limpa a lista

    if (!versao || !versoes[versao]) return;

    versoes[versao].forEach(exe => {
        const label = document.createElement("label");
        label.className = "flex items-center gap-4";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = exe;
        input.className = "file-checkbox";

        const span = document.createElement("span");
        span.textContent = exe.replace(".CAB", ""); // mostra sem .CAB

        label.appendChild(input);
        label.appendChild(span);
        container.appendChild(label);
    });
}

// Exibe o nome do usuário logado (lê de sessionStorage)
function exibirUsuarioLogado() {
  // Seleciona todos os elementos com o ID (nesse caso repetido, então uso querySelectorAll)
  const elementos = document.querySelectorAll('#userNameDisplay');
  if (!elementos.length) return;

  const username = sessionStorage.getItem('username');
  const texto = username ? `${username}!` : 'Usuário!';

  // Atualiza todos os elementos encontrados
  elementos.forEach(el => {
    el.textContent = texto;
  });
}

// Executa quando a página carregar
//window.addEventListener('DOMContentLoaded', exibirUsuarioLogado);


function getSelectedFiles() {
    const checkboxes = document.querySelectorAll('.file-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function iniciarDownload() {
    const versaoInput = document.getElementById('versao');
    const versao = versaoInput.value.trim();

    if (!versao) {
        alert("Por favor, insira a versão!");
        versaoInput.focus();
        return;
    }

    const baseUrl = `https://s3.amazonaws.com/infarma-cv/${encodeURIComponent(versao)}/`;
    const selectedFiles = getSelectedFiles();

    if (selectedFiles.length === 0) {
        alert("Selecione ao menos um executável para baixar.");
        return;
    }

    let index = 0;

    function baixarProximoArquivo() {
        if (index >= selectedFiles.length) {
            alert("Todos os arquivos foram enviados para download!");
            return;
        }

        const file = selectedFiles[index];
        const fileUrl = baseUrl + file;

        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        index++;
        setTimeout(baixarProximoArquivo, 500); // Pausa para evitar bloqueios
    }

    baixarProximoArquivo();
}

function sair() {
	sessionStorage.removeItem("loggedIn");
	sessionStorage.removeItem("username");
	window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", () => {
	// mostra o usuário logado no topo
	exibirUsuarioLogado();
    const versaoInput = document.getElementById("versao");
    if (versaoInput) {
        versaoInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                iniciarDownload();
            }
        });

        versaoInput.addEventListener("change", atualizarExecutaveis);
    }
});

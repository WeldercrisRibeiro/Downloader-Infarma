// Bloqueia acesso se não estiver logado
//if (sessionStorage.getItem("loggedIn") !== "true") {
    //window.location.href = "index.html";
//}

// Mapeamento das versões e seus executáveis
const versoes = {
    "2008a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2102a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2202a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2202aa":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2202ac": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB"],
	"2202ad":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2202ae":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2202af":["VmdRrd.CAB", "VmdPdv.CAB"],
	"2202ag":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
    
	"2205a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2205aa":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2205ab":["VmdPdv.CAB"],
	"2205b":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2205ba":["VmdRrd.CAB"],
	"2205c":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2208a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2208ba":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2208c":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2208ca":["VmdRrd.CAB"],
	"2208ce":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2208d":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2208da":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2208db":["VmdRrd.CAB"],
	"2208dc":["VmdPdv.CAB"],
	"2211a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2211aa":["VmdRrd.CAB"],
	"2211b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2211ba":["VmdTrm.CAB"],
	"2211bb":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2211bc":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	
	"2304ac": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2304b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2304ba":["VmdRrd.CAB","VmdTrm.CAB"],
	"2304bb":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2304bc":["VmdRrd.CAB", "VmdPdv.CAB"],
	
	"2306a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2306b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2306ba":["VmdRrd.CAB", "VmdTrm.CAB"],
	
	"2308a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2308aa": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2308ab": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2308b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2308c":["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2308ca":["VmdPdv.CAB"],
	"2308cb":["VmdRrd.CAB","VmdPdv.CAB"],
	"2308cd":["VmdRrd.CAB"],
	
	"2312a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2312aa":["VmdRrd.CAB"],
	"2312b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2312ba": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	
	"2402a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	
	"2402c": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2402d": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2402e": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	
	"2403a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
    "2403b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2403c": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2403cc": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2403cd": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2403ce": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2403cf": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2403cg": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2403ch": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	
	"2407a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2407aa": ["VmdRrd.CAB"],
	"2407ab": ["VmdRrd.CAB"],
	
	"2411a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2411aa": ["VmdRrd.CAB", "VmdImp.CAB"],
	"2411ab": ["VmdRrd.CAB"],
	
	"2411b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2411ba": ["VmdPdv.CAB"],
	"2411bb": ["VmdTrm.CAB","VmdPdv.CAB"],
	"2411bc": ["VmdRrd.CAB"],
	"2411bd": ["VmdRrd.CAB","VmdPdv.CAB"],
	"2411c": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2411ca": ["VmdPdv.CAB"],
	"2411cb": ["VmdPdv.CAB"],

	
	
	"2502a": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2502aa": ["VmdRrd.CAB",  "VmdPdv.CAB"],
	
	"2502b": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2502bc": ["VmdPdv.CAB"],
	"2502bd": ["VmdPdv.CAB"],
	"2502db": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2502dd": ["VmdTrm.CAB","VmdPdv.CAB"],
	"2502de": ["VmdPdv.CAB"],
	"2502e":  ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdImp.CAB","VmdRljImp.CAB","VmdSrv.CAB"],
	"2502ea": ["VmdRrd.CAB"],
	"2502eb": ["VmdRrd.CAB"],
	"2502ec": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2502f":  ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	"2502fa":  ["VmdTrm.CAB", "VmdPdv.CAB"],
	"2502fb": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdSrv.CAB"],
	"2502fb": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB","VmdSrv.CAB"],
	"2502fc": ["VmdRrd.CAB", "VmdTrm.CAB", "VmdPdv.CAB"],
	
};

const nomesAmigaveis = {
    "VmdRrd.CAB": "Varejo",
    "VmdTrm.CAB": "Terminal",
    "VmdPdv.CAB": "Caixa",
    "VmdImp.CAB": "Importação Central",
    "VmdRljImp.CAB": "Importação Loja",
    "VmdSrv.CAB": "Infarma Serviço"
};
// Atualiza os executáveis disponíveis conforme a versão
function toggleInput() {
  const select = document.getElementById("versao");
  const input = document.getElementById("versaoCustom");
  input.classList.toggle("hidden", select.value !== "outro");
}

function atualizarExecutaveis() {
  const select = document.getElementById("versao");
  const input = document.getElementById("versaoCustom");
  const versao = select.value === "outro" ? input.value : select.value;
  console.log("Versão escolhida:", versao);
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
        // exibe nome amigável, se existir
        span.textContent = nomesAmigaveis[exe] || exe.replace(".CAB", "");
        // adiciona tooltip com nome técnico
        span.title = exe;

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
	alert("Você saiu!");
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

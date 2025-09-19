// Bloqueia acesso se não estiver logado
if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

const exe = {
	Varejo: ["VmdRrd.CAB"],
	Terminal: ["VmdTrm.CAB"],
	Caixa: ["VmdPdv.CAB"],
	InfarmaServiço: ["VmdSrv.CAB"],
	VmdImp: ["VmdImp.CAB"],
	VmdRljImp: ["VmdRljImp.CAB"]
}

const versoes = {
    "2008a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2102a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2202a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2202aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2202ac": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] }
    ],
    "2202ad": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2202ae": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2202af": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2202ag": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2205a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2205aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2205ab": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2205b": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2205ba": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2205c": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2208a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2208ba": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2208c": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2208ca": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2208ce": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2208d": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2208da": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2208db": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2208dc": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2211a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2211aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2211b": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2211ba": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2211bb": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2211bc": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2304ac": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2304b": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2304ba": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2304bb": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2304bc": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2306a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2306b": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2306ba": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2308a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2308aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2308ab": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2308b": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2308c": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2308ca": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2308cb": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2308cd": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
    ],
    "2312a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2312aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2312ab": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2312ac": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2312b": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2312ba": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2312bb": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2312bc": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2312bd": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2312c": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2312ca": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2312cb": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2312cc": [
       { modulo: "VAREJO", arquivo: exe.Varejo[0] },
    ],
    "2402a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] },
        { modulo: "VMDIMP", arquivo: exe.VmdImp[0] },
        { modulo: "VMDIMP-LJ", arquivo: exe.VmdRljImp[0] },
        { modulo: "INFARMA SERVIÇO", arquivo: exe.InfarmaServiço[0] }
    ],
    "2402aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2402ab": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2402ac": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2402ad": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2405a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2405aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2405ab": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2405ac": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2408a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2408aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2408ab": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2408ac": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    
    "2502a": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2502aa": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2502ab": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2502ac": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2502ad": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
    ],
    "2502b": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2502ba": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2502bb": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2502bc": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2502bd": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
    ],
    "2502c": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2502ca": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] }
    ],
    "2502cb": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2502cc": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2502cd": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
    ],
    "2502d": [
        { modulo: "VAREJO", arquivo: exe.Varejo[0] },
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    
    "2502db": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] }
    ],
    "2502dc": [
        { modulo: "CAIXA", arquivo: exe.Caixa[0] }
    ],
    "2502dd": [
        { modulo: "TERMINAL", arquivo: exe.Terminal[0] },
		{ modulo: "CAIXA", arquivo: exe.Caixa[0] }

    ],
    "2502de": [
        
		{ modulo: "CAIXA", arquivo: exe.Caixa[0] }

    ]
};


	  


// Atualiza os executáveis disponíveis conforme a versão
function atualizarExecutaveis() {
    const versao = document.getElementById("versao").value;
    const container = document.getElementById("executaveis");

    container.innerHTML = ""; // limpa a lista

    if (!versao || !versoes[versao]) return;

    versoes[versao].forEach(item => {
    const label = document.createElement("label");
    label.className = "flex items-center gap-4";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = item.arquivo; // mantém o arquivo para download
    input.className = "file-checkbox";

    const span = document.createElement("span");
    span.textContent = item.modulo; // mostra o nome do módulo no front

    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
});

}

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
    window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", () => {
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

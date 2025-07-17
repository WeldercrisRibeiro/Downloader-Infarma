// Bloqueia acesso se não estiver logado
if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
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
    }
});

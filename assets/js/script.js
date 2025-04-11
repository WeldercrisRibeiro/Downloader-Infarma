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
            alert("Todos os arquivos foram baixados!");
            return;
        }

        const file = selectedFiles[index];
        const fileUrl = baseUrl + file;

        fetch(fileUrl, { method: 'HEAD' }) // Verifica se o arquivo existe antes de baixar
            .then(response => {
                if (!response.ok) {
                    console.error(`Erro ao baixar: ${fileUrl} - Status: ${response.status}`);
                    alert(`Erro ao baixar ${file}. Verifique a versão informada.`);
                } else {
                    const a = document.createElement('a');
                    a.href = fileUrl;
                    a.download = file;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
                index++;
                setTimeout(baixarProximoArquivo, 500); // Pequena pausa para evitar bloqueios
            })
            .catch(error => {
                console.error(`Erro ao verificar o arquivo ${fileUrl}:`, error);
                alert(`Erro ao acessar o arquivo: ${file}.`);
                index++;
                baixarProximoArquivo();
            });
    }

    baixarProximoArquivo();
}

function sair() {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = 'index.html';
}

// Ativar Enter para iniciar o download
document.getElementById("versao").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        iniciarDownload();
    }
});

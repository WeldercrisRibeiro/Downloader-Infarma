function getSelectedFiles() {
    const checkboxes = document.querySelectorAll('.file-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function iniciarDownload() {
    const versao = document.getElementById('versao').value.trim();
    if (!versao) {
        alert("Por favor, digite a versão.");
        return;
    }

    const baseUrl = `https://s3.amazonaws.com/infarma-cv/${versao}/`;
    const selectedFiles = getSelectedFiles();

    if (selectedFiles.length === 0) {
        alert("Selecione ao menos um arquivo para baixar.");
        return;
    }

    selectedFiles.forEach(file => {
        const fileUrl = baseUrl + file;
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    alert("Download iniciado para os arquivos selecionados!");
}
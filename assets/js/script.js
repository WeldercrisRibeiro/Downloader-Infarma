function getSelectedFiles() {
    const checkboxes = document.querySelectorAll('.file-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function iniciarDownload() {
    const versao = document.getElementById('versao').value.trim();
    if (!versao) {
        alert("Por favor, digite a versão!");
        return;
    }

    const baseUrl = `https://s3.amazonaws.com/infarma-cv/${versao}/`;
    const selectedFiles = getSelectedFiles();

    if (selectedFiles.length === 0) {
        alert("Selecione ao menos um executável para baixar.");
        return;
    }

    function baixarArquivo(index) {
        if (index >= selectedFiles.length) {
            alert("Download concluído!");
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

        setTimeout(() => baixarArquivo(index + 1), 1500); 
    }

    baixarArquivo(0);
}

function sair() {
    
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = 'index.html'; 
}



//document.getElementById("versao").addEventListener("keypress", function(event) {
//    if (event.key === "Enter") {
//        iniciarDownload(); 
//    }
//}); 

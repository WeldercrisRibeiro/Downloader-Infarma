// Função para verificar se o usuário tem permissão
export function verificarPermissao(cargosPermitidos) {
    const role = sessionStorage.getItem("role");

    // Se o cargo do usuário não estiver na lista de permitidos
    if (!cargosPermitidos.includes(role)) {
        alert("Acesso Negado: Você não tem permissão para acessar esta página.");
        window.location.href = "menu.html"; // Manda de volta pro menu
        return false;
    }
    return true;
}

// Função para esconder elementos (botões) baseados no cargo
export function configurarInterface() {
    const role = sessionStorage.getItem("role");
    
    // Procura todos elementos que tenham o atributo data-role
    const elementosRestritos = document.querySelectorAll('[data-allowed-roles]');

    elementosRestritos.forEach(el => {
        const cargosPermitidos = el.getAttribute('data-allowed-roles').split(',');
        
        // Se o cargo atual NÃO estiver na lista, remove o elemento da tela
        if (!cargosPermitidos.includes(role)) {
            el.style.display = 'none'; // Ou el.remove() para excluir do DOM
        }
    });
}
// assets/js/auth.js

// Define a hierarquia de poder
// Quem tem nível 3 (ti) pode ver coisas de nível 2 (admin) e 1 (operador)
const niveisDeAcesso = {
    'operador': 1,
    'gerente': 2,
    'admin': 3,
    'ti': 99 // Nível máximo (Welder)
};

export function verificarPermissao(cargosPermitidos) {
    const roleUsuario = sessionStorage.getItem("role") || 'operador';
    const nivelUsuario = niveisDeAcesso[roleUsuario] || 0;

    // Verifica se algum dos cargos permitidos é igual ou inferior ao meu nível
    // Ex: Se o botão pede 'admin' (3) e eu sou 'ti' (99), 99 >= 3, então eu passo.
    const temAcesso = cargosPermitidos.some(cargoNecessario => {
        const nivelNecessario = niveisDeAcesso[cargoNecessario] || 999;
        return nivelUsuario >= nivelNecessario;
    });

    if (!temAcesso) {
        alert("Acesso Negado: Você não tem permissão suficiente.");
        window.location.href = "menu.html";
        return false;
    }
    return true;
}

export function configurarInterface() {
    const roleUsuario = sessionStorage.getItem("role") || 'operador';
    const nivelUsuario = niveisDeAcesso[roleUsuario] || 0;
    
    const elementosRestritos = document.querySelectorAll('[data-allowed-roles]');

    elementosRestritos.forEach(el => {
        const cargosString = el.getAttribute('data-allowed-roles');
        const cargosPermitidos = cargosString.split(',');
        
        // Mesma lógica: Se eu sou TI (99), vejo botões de Admin (3)
        const temAcesso = cargosPermitidos.some(cargoNecessario => {
            const nivelNecessario = niveisDeAcesso[cargoNecessario] || 999;
            return nivelUsuario >= nivelNecessario;
        });
        
        if (!temAcesso) {
            el.style.display = 'none'; // Esconde o botão
        }
    });
}
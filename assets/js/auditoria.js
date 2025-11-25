import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const tbody = document.getElementById('logsBody');
const searchInput = document.getElementById('searchInput');

// Formata data bonita (DD/MM/YYYY HH:MM)
const formatarData = (isoString) => {
    const data = new Date(isoString);
    return data.toLocaleString('pt-BR', { 
        day: '2-digit', month: '2-digit', year: 'numeric', 
        hour: '2-digit', minute: '2-digit' 
    });
};

// Define cor da badge baseada na ação
const getBadgeColor = (acao) => {
    const map = {
        'LOGIN': 'bg-green-100 text-green-800 border-green-200',
        'ERRO': 'bg-red-100 text-red-800 border-red-200',
        'CADASTRO': 'bg-blue-100 text-blue-800 border-blue-200',
        'EXCLUSAO': 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return map[acao] || 'bg-gray-100 text-gray-800 border-gray-200';
};

// Carrega Logs
window.carregarLogs = async () => {
    tbody.innerHTML = '<tr><td colspan="4" class="text-center py-8 text-gray-400">Carregando...</td></tr>';

    const { data: logs, error } = await supabaseClient
        .from('system_logs')
        .select('*')
        .order('created_at', { ascending: false }) // Mais recentes primeiro
        .limit(100); // Limite de 100 para não pesar

    if (error) {
        console.error("Erro logs:", error);
        tbody.innerHTML = '<tr><td colspan="4" class="text-center py-4 text-red-500">Erro ao carregar logs.</td></tr>';
        return;
    }

    renderTable(logs);
};

const renderTable = (logs) => {
    tbody.innerHTML = '';
    
    if (logs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center py-8 text-gray-400">Nenhum registro encontrado.</td></tr>';
        return;
    }

    logs.forEach(log => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 transition-colors border-b border-gray-100';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-gray-500 font-mono text-xs">
                ${formatarData(log.created_at)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    ${log.usuario || 'Sistema'}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 rounded-md text-xs font-bold border ${getBadgeColor(log.acao)}">
                    ${log.acao}
                </span>
            </td>
            <td class="px-6 py-4 text-gray-600 truncate max-w-md" title="${log.detalhes}">
                ${log.detalhes || '-'}
            </td>
        `;
        tbody.appendChild(row);
    });
};

// Filtro simples no front-end
searchInput.addEventListener('keyup', (e) => {
    const termo = e.target.value.toLowerCase();
    const linhas = tbody.getElementsByTagName('tr');

    Array.from(linhas).forEach(linha => {
        const texto = linha.innerText.toLowerCase();
        linha.style.display = texto.includes(termo) ? '' : 'none';
    });
});

// Inicia
carregarLogs();
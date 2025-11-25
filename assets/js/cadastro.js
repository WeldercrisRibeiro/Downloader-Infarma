// assets/js/cadastro.js

import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

// Inicializa o cliente Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const TABLE_NAME = 'empresas';

// Constantes para elementos do DOM
const newClientBtn = document.getElementById('newClientBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const clientModal = document.getElementById('clientModal');
const clientForm = document.getElementById('clientForm');
const dataBody = document.getElementById('dataBody');

// Campos do formulário
const inputName = document.getElementById('inputName');
const inputCnpj = document.getElementById('inputCnpj');
const inputService = document.getElementById('inputService');
const inputVarejo = document.getElementById('inputVarejo');
const inputObservation = document.getElementById('inputObservation');

// Variável para armazenar o ID (chave primária) do item em edição (não mais o índice)
let dataEditId = null; 

// Bloqueia acesso se não estiver logado (Importante para segurança)
if (sessionStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}


// Função para abrir o modal
const openModal = () => clientModal.classList.add('open');

// Função para fechar o modal e resetar o formulário/ID
const closeModal = () => {
    clientModal.classList.remove('open');
    clientForm.reset();
    dataEditId = null;
};

// -----------------------------------------------------
// FUNÇÕES CRUD COM SUPABASE
// -----------------------------------------------------

// 1. Carrega os dados do Supabase
const loadData = async () => {
    // Ordena por nome (ascending)
    const { data: empresas, error } = await supabaseClient
        .from(TABLE_NAME)
        .select('*')
        .order('name', { ascending: true });

    if (error) {
        console.error('Erro ao carregar dados:', error);
        alert('Falha ao carregar dados do banco de dados.');
        return;
    }
    
    // Renderiza a tabela com os dados do Supabase
    renderTable(empresas); 
};

// 2. Salva (Cria/Atualiza) no Supabase
clientForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = inputName.value.trim();
    const cnpj = inputCnpj.value.trim();
    const service = inputService.value;
    const versaoVarejo = inputVarejo.value.trim();
    const observation = inputObservation.value.trim();

    if (!name || !cnpj || !service) {
        alert("Preencha Nome, CNPJ e Tipo de Serviço!");
        return;
    }
    
    // Objeto de dados
    const clientData = { name, cnpj, service, versaoVarejo, versaoObservation}
    // Verifica unicidade de CNPJ antes de salvar (necessita de índice UNIQUE na tabela)
    if (await cnpjAlreadyExists(cnpj, dataEditId)) {
        alert("CNPJ já cadastrado!");
        return;
    }

    let error = null;

    if (dataEditId) {
        // EDIÇÃO (UPDATE)
        const result = await supabaseClient
            .from(TABLE_NAME)
            .update(clientData)
            .eq('id', dataEditId);
        error = result.error;

    } else {
        // NOVO CADASTRO (INSERT)
        const result = await supabaseClient
            .from(TABLE_NAME)
            .insert([clientData]);
        error = result.error;
    }

    if (error) {
        console.error('Erro ao salvar/atualizar:', error);
        alert('Erro ao salvar no banco de dados. Verifique o console.');
    } else {
        closeModal();
        loadData(); // Recarrega os dados após a operação
    }
});

// 3. Verifica se o CNPJ já existe no banco de dados
const cnpjAlreadyExists = async (cnpj, ignoreId) => {
    let query = supabaseClient
        .from(TABLE_NAME)
        .select('id', { count: 'exact' })
        .eq('cnpj', cnpj);
        
    // Se estiver editando, exclui o registro atual da verificação
    if (ignoreId) {
        query = query.neq('id', ignoreId);
    }
    
    const { count, error } = await query;

    if (error) {
        console.error('Erro de verificação de CNPJ:', error);
        return true; // Assume erro como CNPJ existente por segurança
    }

    return count > 0;
};

// Ação de Editar (busca dados por ID)
window.handleEdit = async (id) => {
    const { data: client, error } = await supabaseClient
        .from(TABLE_NAME)
        .select('*')
        .eq('id', id)
        .single();
        
    if (error || !client) {
        console.error('Erro ao buscar registro para edição:', error);
        alert('Falha ao carregar dados para edição.');
        return;
    }
    
    // Preenche o modal com os dados
    inputName.value = client.name;
    inputCnpj.value = client.cnpj;
    inputService.value = client.service;
    inputVarejo.value = client.versaoVarejo || '';
    inputObservation.value = client.inputObservation || '';

    dataEditId = client.id; // Armazena o ID do registro para UPDATE
    openModal();
};

// Ação de Remover
window.handleRemove = async (id, name) => {
    if (confirm(`Tem certeza que deseja remover a empresa ${name}? Esta ação é irreversível.`)) {
        const { error } = await supabaseClient
            .from(TABLE_NAME)
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Erro ao remover registro:', error);
            alert('Falha ao remover o registro.');
        } else {
            loadData(); // Recarrega a tabela
        }
    }
};

// Renderiza a tabela
// Renderiza a tabela
const renderTable = (data) => {
    dataBody.innerHTML = ''; 

    data.forEach((client) => {
        const row = document.createElement('tr');
        // Adicionei 'border-b' para separar as linhas sutilmente
        row.className = 'hover:bg-gray-50 border-b border-gray-100 transition-colors text-sm text-gray-700';

        // AQUI ESTAVA O ERRO: Faltavam as classes px-6 e py-4 nas <td>
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                ${client.name}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                ${client.cnpj}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                    ${client.service}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                ${client.versaoVarejo || '-'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                ${client.inputObservation || '-'}
            </td>
            
            <td class="px-4 py-4 whitespace-nowrap text-center">
                <button onclick="handleEdit(${client.id})" class="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
            
            <td class="px-4 py-4 whitespace-nowrap text-center">
                <button onclick="handleRemove(${client.id}, '${client.name}')" class="text-red-500 hover:text-red-700 transition-colors p-2 rounded hover:bg-red-50" title="Excluir">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        `;
        dataBody.appendChild(row);
    });
};

// --- Event Listeners ---
newClientBtn.addEventListener('click', () => {
    clientForm.reset(); // Garante que o form esteja limpo
    dataEditId = null;  // Garante que é um novo cadastro
    openModal();
});
closeModalBtn.addEventListener('click', closeModal);

clientModal.addEventListener('click', (e) => {
    if (e.target.id === 'clientModal') {
        closeModal();
    }
});


// Carrega os dados iniciais
window.onload = loadData;

// Expõe as funções globais necessárias para o HTML
window.handleEdit = window.handleEdit;
window.handleRemove = window.handleRemove;
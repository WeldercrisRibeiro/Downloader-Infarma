// assets/js/docs-list.js

export const listaDocumentos = [

            // --- GERAL ---
    // {
    //     id: 'geral_01',
    //     categoria: 'Geral',
    //     titulo: 'Perguntas Frequentes',
    //     arquivo: 'faq.md', // Arquivo na raiz do docs
    //     descricao: 'Dúvidas comuns.'
    // }
// --- DOCS VERSÃO ---
    {
        id: 'doc_01',
        categoria: 'Documentos de Versões',
        titulo: 'Versão 25.03a - Suporte',
        tipo: 'pdf', // <--- DEFINE COMO MARKDOWN
        arquivo: 'versoes/25.03a/pdfs/25.03a_Suporte.pdf', 
        //descricao: 'Como dar entrada via XML.'
    },

        {
        id: 'doc_02',
        categoria: 'Documentos de Versões',
        titulo: 'Versão 25.03a - Clientes',
        tipo: 'pdf', // <--- DEFINE COMO MARKDOWN
        arquivo: 'versoes/25.03a/pdfs/25.03a_Clientes.pdf', 
        //descricao: 'Como dar entrada via XML.'
    },

    // --- MÓDULO ESTOQUE ---
    {
        id: 'est_01',
        categoria: 'Módulo Estoque',
        titulo: 'Entrada de Nota Fiscal',
        tipo: 'md', // <--- DEFINE COMO MARKDOWN
        arquivo: 'estoque/manual_entradaNFe.md', 
        descricao: 'Como dar entrada via XML.'
    },

    // --- MÓDULO VENDAS ---
    {
        id: 'vnd_01',
        categoria: 'Módulo Vendas',
        titulo: 'Política de Vendas',
        tipo: 'md',
        arquivo: 'vendas/politica_venda.md',
        descricao: 'Regras de descontos e prazos.'
    },


        // --- MÓDULO FINANCEIRO ---
    {
        id: 'fin_01',
        categoria: 'Módulo Financeiro',
        titulo: 'Manual Tesouraria - Cadastro Básico',
        tipo: 'pdf',
        //arquivo: 'financeiro/pdfs/tesouraria_cadastro_basico.pdf',
        arquivo: 'https://mega.nz/file/frZ22aCJ#Z2hcBHfLwA8cS9PtWMFG8vtqJgOJrMQmp3Ke6w9d-PY'
        //descricao: 'Regras de descontos e prazos.'
    },
];
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


    // --- MÓDULO ESTOQUE ---
    {
        id: 'est_01',
        categoria: 'Módulo Estoque', // <--- Nova propriedade
        titulo: 'Entrada de Nota Fiscal',
        arquivo: 'estoque/manual_entradaNFe.md', // Arquivo dentro de subpasta
        descricao: 'Como dar entrada via XML.'
    },

    // --- MÓDULO VENDAS ---
    {
        id: 'vnd_01',
        categoria: 'Módulo Vendas',
        titulo: 'Política de Vendas',
        arquivo: 'vendas/politica_venda.md',
        descricao: 'Regras de descontos e prazos.'
    },


    // --- MÓDULO SNGPC ---
    {
        id: 'sng_01',
        categoria: 'Módulo SNGPC',
        titulo: 'Introdução SNGPC',
        arquivo: 'sngpc/sngpc.md',
        descricao: 'Introdução ao SNGPC.'
    },
    {
        id: 'sng_02',
        categoria: 'Módulo SNGPC',
        titulo: 'Rotina SNGPC',
        arquivo: 'sngpc/rotina-sngpc.md',
        descricao: 'Rotina Geral do SNGPC.'
    },



];
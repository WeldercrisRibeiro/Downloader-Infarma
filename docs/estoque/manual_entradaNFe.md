
# Importação de nota de entrada via XML
## Requisitos
Para a importação do xml da nota de entrada no sistema, inicialmente será necessário alguns requisitos, descritos abaixo:

**1.** Certificado digital emitido para o mesmo CNPJ da empresa no sistema.

**2.** Fornecedor cadastrado no sistema.

**3** Nota emitida para o mesmo CNPJ da empresa cadastrada no sistema.

## Baixando a nota no Portal da Nota Fiscal Eletrônica
Com o certificado digital instalado no computador e o danfe repassado pelo fornecedor em mãos, acesse ao Portal da Nota Fiscal Eletrônica - [Portal NFE](https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ+gAVw2g=) e clique no campo ***Chave de Acesso da NF-e*** e informe a chave de acesso do Danfe recebido com a mercadoria, marque o Captcha confirmando que é Humando e clique em Continuar.


![Imagem](/img/infarma-varejo/portal-nfe-chv-acesso.png)

Após a abertura da nota fiscal, clique no botão **Download do documento**,

![Imagem](/img/infarma-varejo/botao-download-xml.png)

Em seguida confirme a leitura e escolha o certificado da empresa para iniciar o download.

![Imagem](/img/infarma-varejo/confirma-certificado-nfe.png)

![alt text](/img/infarma-varejo/escolher-certificado-nfe.png)

## Importando o xml da nota no sistema
Com o xml da nota baixado, acesse no Varejo/Central em ***Estoque > Movimento > Notas Fiscais de Entrada*** e clique no botão **Importa > Importação NFe (XML)**

![alt text](/img/infarma-varejo/importa-xml-nfe.png)

Na tela a seguir, clique no botão **Incluir > Importar do Arquivo XML** para buscar o arquivo e escolha o xml  recém-baixado do portal da NFe.

![alt text](/img/infarma-varejo/importa-nfe-buscar-xml.png)

Caso o fornecedor não esteja cadastrado, dependendo da configuração do sistema ele poderá bloquear a importação da nota ou perguntar se deve fazer o cadastro do fornecedor de forma automática - que será o caso do nosso exemplo a seguir

![alt text](/img/infarma-varejo/critica-importa-nfe-fornecedor-nao-cad.png)

Após a confirmação, o sistema irá confirmar o cadastro e em seguida mostrará a tela de importação com todos os itens da NFe

![alt text](/img/infarma-varejo/fornecedor-cadastrado.png)

## Entendendo situações ao importar NFe

Pode ocorrer várias situações ao importar uma nfe no sistema, iremos mostrar abaixo as possíveis situações.

1- Produtos não cadastrados no sistema

![alt text](/img/infarma-varejo/entrada-de-nota-produtos-pendente.png)

Ao se deparar com a situação acima, será possível identificar pois o sistema apresenta a crítica abaixo e a linha com os dados do fornecedor ficam em vermelho. Com essa situação você pode solucionar com duas opções:
- Cadastrar o produto manualmente no sistema
- Fazer cadastro automático de produtos - para escolher essa opção é necessário que o sistema já esteja parametrizado para isso em ***Opções gerais do sistema > Aba Estoque > 2.1 Habilitar cadastro Automático de produtos via importação do XML na nota de entrada***

### Cadastro manual do produto
Para identificar os produtos com problema, clique no botão **Ver Itens com problemas**

![alt text](/img/infarma-varejo/entrada-de-nota-itens-com-problemas.png)

Com a lista dos produtos, você pode abrir outra tela do sistema em Estoque > Arquivo > Produtos e fazer o cadastro conforme veio na nota. Após o cadastro manual no sistema, você deve retornar a tela de importação da NF-e e identificar os produtos em vermelho e clicar com o botão direito sob o produto para vinculá-lo ao produto já cadastrado no sistema

![alt text](/img/infarma-varejo/vinculando-produto-ao-codEan.png)

Então o sistema irá abrir a tela de consulta aos produtos cadastrados, para fazer o 
vínculo. 

![alt text](/img/infarma-varejo/tela-consulta-produtos.png)

Faça isso em todos os produtos pendentes a cadastrar e aguarde o processamento para novamente para importar a nota. 

### Cadastro automático de produtos
Para o cadastro automático de produtos, deve estar ativo a parametrização em ***Opções gerais do sistema > Aba Estoque > 2.1 Habilitar cadastro Automático de produtos via importação do XML na nota de entrada***


![alt text](/img/infarma-varejo/op-gerais-cad-automatico.png)

Ao importar a nota e conter itens pendentes clique no botão acima **Produtos a Cadastrar**


![alt text](/img/infarma-varejo/prd-cadastrar.png)

Com isso, abrirá a tela de cadastro automátizado, que você irá definir os dados para o sistema cadastrar automaticamente


![alt text](/img/infarma-varejo/prod-tela-cadastro.png)

Clique sob os três pontos de acordo com a coluna para preencher os dados conforme solicitado.
Ao preencher complementamente, você deverá marcar o checkbox do lado direito de cada produto e clicar no botão Processar.

**Obs: Caso todos os produtos pendentes ou alguns produtos contenham todos os dados iguais você pode clicar no botão **Alteração Linear**, para conseguir cadastrar todos os produtos de uma vez. Feito isso, basta clicar no botão Processa onde todos os produtos ficarão em Cor Laranja e em seguida Processa para finalizar o cadastro automatizado**

O sistema irá retornar a mensagem de que os produtos foram cadastrados com sucesso.

Caso apresente algum erro, o sistema irá apresentar na tela. Caso não saiba como resolver, entre em contato com o suporte.

## Importando a nota

Com os produtos cadastrados e sem erros impedindo a importação da nota clique no botão **Importar** no canto superior direito e confirme a importação.

O sistema irá retornar, se tudo estiver correto e sem erros todos os itens verde juntamente com os dados do fornecedor.

![alt text](/img/infarma-varejo/entrada-nota-importada.png)

Clique em Fechar e acesse a nota destacada em Azul (significa que a nota está em aberto) clicando sob a nota e em seguida no botão Edita

![alt text](/img/infarma-varejo/tela-notas-de-entrada-aberta.png)

Ao abrir o cabeçalho você irá encontrar os dados do fornecedor,tipo de operação, chave de acesso,numeração da nota,data de emissão, valores referente a mercadoria,descontos,despesas, ICMS etc..

Com isso, clique em Itens e faça a conferência dos produtos importados e suas quantidades antes do fechamento da nota.

![alt text](/img/infarma-varejo/tela-itens-nota-de-entrada.png)

Caso todos os dados estejam corretos, clique para fechar a tela dos itens e faça o fechamneto da nota.

**Observação:** Caso algum item esteja com a quantidade ou fração de venda incorreta, ajuste o fracionamento no cadastro do produto, exclua a nota e faça a importação novamente. Se os dados incorretos forem do tipo lote ou vencimento do lote você poderá corrigir diretamente na tela de edição do item. Se tiver dificuldades para correção, acione a equipe de suporte.

## Fechando a nota
Após a conferência dos itens, quantidades e valores da nota clique no botão **Fecham.** para fechar a nota, caso não haja nenhuma divergência o sistema irá confirmar a solicitação e após confirmado irá efetuar o fechamento da nota, mudando o status para **Fechado** cor para Preta na tela de notas de entradas. 

![alt text](/img/infarma-varejo/nota-fechada-cab.png)

![alt text](/img/infarma-varejo/nota-entrada-fechada.png)


**Lembre-se!! os produtos da nota estarão no estoque após o fechamento da nota, caso sejam vendidos não terá possibilidade de ajuste ou exclusão da nota para correção de quantidades ou produtos.**

## Conclusão!
#### **Parabêns! Você concluiu o Tópico Importação de NFe via XML**

:::tip
Caso haja alguma dúvida ou erro diferente do apresentado nesta documentação, consulte no nosso **[FAQ]** ou a equipe de Suporte para maiores detalhes!
:::


# Banco Web Testes

## Objetivo

Este projeto foi criado para ensinar alunos da Mentoria 2.0 como automatizar testes de interface com Cypress e JavaScript. A ideia é demonstrar a organização de um projeto de testes, o uso de fixtures, o registro de comandos reutilizáveis e a geração de relatórios automatizados para facilitar a validação de cenários de negócio.

## Visão geral

O projeto contém testes automatizados para uma aplicação web bancária chamada `banco-web`, com foco em validações de login e transferências. A configuração do Cypress aponta para a URL base `http://localhost:4000`, o que indica que a aplicação deve estar em execução localmente antes dos testes.

As dependências do projeto estão definidas no arquivo `package.json`, incluindo o Cypress e o plugin de relatórios `cypress-mochawesome-reporter`.

## Pré-requisitos

Antes de executar os testes, verifique se os itens abaixo estão disponíveis no ambiente:

- Node.js e npm instalados
- Repositório clonado localmente
- Aplicação `banco-web` em execução
- API `banco-api` em execução
- Acesso à URL base configurada pelo Cypress: `http://localhost:4000`

## Instalação

Na raiz do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências declaradas em `package.json`, incluindo:

- `cypress`
- `cypress-mochawesome-reporter`
- `start-server-and-test`

## Executando os testes

Os scripts disponíveis no `package.json` são:

```bash
npm test
```

Executa a suíte de testes em modo headless com Cypress:

```bash
npm run cy:headed
```

Executa os testes com navegador visível:

```bash
npm run cy:open
```

Abre a interface do Cypress para execução manual dos testes.

> Importante: conforme a configuração do projeto, tanto a API `banco-api` quanto a aplicação `banco-web` precisam estar em execução para que os testes possam validar o comportamento real da aplicação.

## Estrutura do projeto

```text
banco-web-testes/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── transferencia.cy.js
│   ├── fixtures/
│   │   ├── credenciais.json
│   │   └── example.json
│   ├── reports/
│   │   └── html/
│   │       ├── index.html
│   │       └── assets/
│   ├── screenshots/
│   ├── videos/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── README.md
└── ...
```

### Principais componentes

#### `cypress.config.js`

Arquivo de configuração principal do Cypress. Nele estão definidas:

- `baseUrl: 'http://localhost:4000'`
- `reporter: 'cypress-mochawesome-reporter'`
- `video: true`
- configuração do plugin `cypress-mochawesome-reporter`

#### `cypress/e2e/`

Contém os testes automatizados da aplicação. Neste projeto, há arquivos para:

- `login.cy.js`
- `transferencia.cy.js`

#### `cypress/fixtures/`

Armazena dados de teste utilizados pelos cenários, como credenciais válidas e inválidas. O arquivo principal relevante para this projeto é:

- `credenciais.json`

#### `cypress/support/`

Diretório destinado à configuração global e à organização dos comandos reutilizáveis.

- `commands.js`: arquivo de registro de custom commands
- `e2e.js`: importação dos comandos e do registro do reporter

#### `cypress/reports/html/`

Diretório com os relatórios gerados em HTML. A página inicial do relatório é:

- `cypress/reports/html/index.html`

## Testes existentes

### 1) Login

Arquivo: `cypress/e2e/login.cy.js`

Este cenário valida dois comportamentos principais:

#### Login com dados válidos

- A aplicação é aberta em `http://localhost:4000`
- Usuário e senha são lidos do fixture `credenciais.json`
- Os campos `#username` e `#senha` são preenchidos
- O botão `Entrar` é clicado
- O teste espera que o login seja realizado corretamente

#### Login com dados inválidos

- Usuário e senha são preenchidos com valores inválidos
- O botão `Entrar` é clicado
- O teste valida a presença de uma mensagem de erro visualizada em `.toast`
- A mensagem esperada é:

```text
Erro no login. Tente novamente.
```

### 2) Transferências

Arquivo: `cypress/e2e/transferencia.cy.js`

O arquivo atual está em estrutura inicial e contém um cenário base para validação de transferências:

```js
describe('Transferencias', () =>{
it('Deve transferir quando informo dados e valor validos', () =>{

    })

})
```

Ou seja, o cenário ainda está em desenvolvimento/esqueleto, sem validações concretas implementadas no momento.

## Custom commands

O projeto está preparado para uso de custom commands em `cypress/support/commands.js`, conforme o scaffold padrão do Cypress. No arquivo atual, há apenas exemplos do padrão de criação de comandos, como:

```js
Cypress.Commands.add('login', (email, password) => { ... })
```

e também exemplos de sobrescrita de comando:

```js
Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
```

### Finalidade

Custom commands permitem:

- reutilizar trechos de código em vários testes
- padronizar interações repetitivas com a interface
- manter os testes mais enxutos e legíveis

### Parâmetros

Os comandos personalizados podem receber qualquer número de parâmetros, conforme a lógica implementada. No scaffold do projeto, por exemplo, o comando `login` recebe `email` e `password`.

### Exemplo de uso

```js
cy.login('usuario@email.com', 'senha123')
```

Este padrão é apenas um exemplo ilustrativo do que o Cypress permite em `commands.js`. No estado atual do repositório, o arquivo está como template inicial e ainda não contém comandos concretos específicos do projeto.

## Relatórios

O relatório de testes é configurado com `cypress-mochawesome-reporter` em `cypress.config.js` e registrado em `cypress/support/e2e.js`.

### Configuração atual

- `reporter: 'cypress-mochawesome-reporter'`
- `video: true`
- plugin registrado em `setupNodeEvents`
- import do registro do reporter em `cypress/support/e2e.js`

### Local do relatório gerado

Os arquivos de relatório são salvos em:

- `cypress/reports/html/`
- `cypress/reports/html/index.html`

Esse arquivo pode ser aberto em um navegador para visualizar o resultado dos testes executados.

## Observações finais

- O projeto é um exemplo didático de automação com Cypress para a Mentoria 2.0.
- A estrutura já está organizada para crescimento do conjunto de testes.
- Há testes reais implementados para o fluxo de login e um arquivo inicial para transferências.
- A configuração de relatórios já está ativa e gerando saída em HTML.
- Os custom commands estão preparados para expansão, mas no estado atual do repositório o arquivo `commands.js` permanece no padrão inicial do Cypress.

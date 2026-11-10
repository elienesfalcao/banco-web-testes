# Banco Web Testes

## Objetivo

<<<<<<< HEAD
Este projeto foi criado para ensinar alunos da Mentoria 2.0 como automatizar testes de interface com Cypress e JavaScript. A proposta é demonstrar a organização de um projeto de testes, a utilização de fixtures para dados de teste, o uso de comandos reutilizáveis e a execução automatizada de cenários de validação da aplicação web.

## Visão geral

O repositório contém testes automatizados para uma aplicação web bancária e utiliza Cypress como ferramenta principal. A configuração do projeto aponta para a URL base `http://localhost:4000`, indicando que a aplicação web deve estar em execução antes dos testes.

Além disso, o código está organizado em diretórios específicos para testes, fixtures, suporte e arquivos de mídia gerados pela execução automatizada.

## Pré-requisitos

Antes de executar a suíte, é necessário que o ambiente tenha:

- Node.js e npm instalados
- projeto clonado localmente
- aplicação `banco-web` em execução
- API `banco-api` em execução
- acesso à URL base configurada no Cypress: `http://localhost:4000`
=======
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
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

## Instalação

Na raiz do projeto, execute:

```bash
npm install
```

<<<<<<< HEAD
Esse comando instala as dependências declaradas no arquivo `package.json`, incluindo:

- `cypress`
- `start-server-and-test`

## Scripts disponíveis

Os scripts configurados no `package.json` são:
=======
Esse comando instala as dependências declaradas em `package.json`, incluindo:

- `cypress`
- `cypress-mochawesome-reporter`
- `start-server-and-test`

## Executando os testes

Os scripts disponíveis no `package.json` são:
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

```bash
npm test
```

<<<<<<< HEAD
Executa os testes em modo headless.
=======
Executa a suíte de testes em modo headless com Cypress:
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

```bash
npm run cy:headed
```

<<<<<<< HEAD
Executa os testes com o navegador em modo visível.
=======
Executa os testes com navegador visível:
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

```bash
npm run cy:open
```

Abre a interface do Cypress para execução manual dos testes.

<<<<<<< HEAD
=======
> Importante: conforme a configuração do projeto, tanto a API `banco-api` quanto a aplicação `banco-web` precisam estar em execução para que os testes possam validar o comportamento real da aplicação.

>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5
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
<<<<<<< HEAD
```

### Principais arquivos

#### `cypress.config.js`

Arquivo principal de configuração do Cypress. O projeto define:

- `baseUrl: 'http://localhost:4000'`
- `video: true`
- configuração do setup do Cypress com `setupNodeEvents`

#### `cypress/e2e/`

Diretório com os testes automatizados. Atualmente há testes para login e um arquivo inicial para transferências.

#### `cypress/fixtures/`

Contém dados de teste reutilizáveis, como credenciais em JSON. O arquivo relevante no projeto é:

- `cypress/fixtures/credenciais.json`

Esse arquivo define exemplos de login válido e inválido.

#### `cypress/support/`

Diretório para suporte e configuração global do Cypress.

- `commands.js`: arquivo de custom commands
- `e2e.js`: arquivo de carregamento do suporte do projeto

#### `cypress/videos/` e `cypress/screenshots/`

Pastas geradas durante a execução dos testes para registrar vídeos e capturas de tela.

## Testes existentes

### Login

Arquivo: `cypress/e2e/login.cy.js`

Este teste valida duas situações:

#### 1. Login com dados válidos

- abre a aplicação em `/`
- lê as credenciais válidas do fixture `credenciais.json`
- preenche os campos `#username` e `#senha`
- clica no botão `Entrar`
- o cenário foi estruturado para validar que o acesso ao sistema foi permitido

#### 2. Login com dados inválidos

- preenche campos com credenciais inválidas
- clica no botão `Entrar`
- valida a presença de um toast com a mensagem:
=======
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
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

```text
Erro no login. Tente novamente.
```

<<<<<<< HEAD
O teste usa `cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')` para verificar a mensagem.

### Transferências

Arquivo: `cypress/e2e/transferencia.cy.js`

Neste momento, o arquivo está em estrutura inicial. Ele contém o cenário:
=======
### 2) Transferências

Arquivo: `cypress/e2e/transferencia.cy.js`

O arquivo atual está em estrutura inicial e contém um cenário base para validação de transferências:
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

```js
describe('Transferencias', () =>{
it('Deve transferir quando informo dados e valor validos', () =>{

    })

})
```

<<<<<<< HEAD
Ou seja, há a definição do nome do cenário, mas a implementação da validação ainda não foi concluída no código atual.

## Custom commands

O arquivo `cypress/support/commands.js` está com o scaffold padrão do Cypress. Ele contém exemplos do uso de custom commands e comentários explicativos, como:
=======
Ou seja, o cenário ainda está em desenvolvimento/esqueleto, sem validações concretas implementadas no momento.

## Custom commands

O projeto está preparado para uso de custom commands em `cypress/support/commands.js`, conforme o scaffold padrão do Cypress. No arquivo atual, há apenas exemplos do padrão de criação de comandos, como:
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

```js
Cypress.Commands.add('login', (email, password) => { ... })
```

<<<<<<< HEAD
Também existe um exemplo de sobrescrita de comando:
=======
e também exemplos de sobrescrita de comando:
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

```js
Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
```

### Finalidade

<<<<<<< HEAD
Os custom commands permitem centralizar ações repetidas, como:

- login em diferentes testes
- preenchimento de formulários
- ações comuns da interface
- reutilização de trechos que aparecem em vários cenários

### Parâmetros

No exemplo padrão, o comando `login` recebe:

- `email`
- `password`
=======
Custom commands permitem:

- reutilizar trechos de código em vários testes
- padronizar interações repetitivas com a interface
- manter os testes mais enxutos e legíveis

### Parâmetros

Os comandos personalizados podem receber qualquer número de parâmetros, conforme a lógica implementada. No scaffold do projeto, por exemplo, o comando `login` recebe `email` e `password`.
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

### Exemplo de uso

```js
cy.login('usuario@email.com', 'senha123')
```

<<<<<<< HEAD
No estado atual do projeto, os custom commands ainda não foram implementados de forma específica para esse sistema; o arquivo está em modelo inicial, pronto para ser expandido.

## Relatórios e evidências

O projeto possui configuração para gravação de vídeos em teste, conforme `video: true` em `cypress.config.js`. Isso gera arquivos em:

- `cypress/videos/`
- `cypress/screenshots/`

A estrutura do diretório `cypress/reports/html/` também está presente no projeto, com arquivos HTML e assets relacionados ao relatório. No entanto, na configuração atual do `package.json` e do `cypress.config.js`, não há evidência de um plugin `cypress-mochawesome-reporter` configurado no projeto em execução.

## Observações finais

- O projeto é um exemplo prático de automação com Cypress para aprendizagem.
- A suíte já conta com testes de login e um arquivo inicial para transferências.
- O uso de fixtures e support commands já está estruturado de forma didática.
- Ainda há espaço para evoluir a implementação dos custom commands e a cobertura dos cenários de negócio.
=======
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
>>>>>>> 3eb69d273bcc9ff8e1c5bf8250c958626a066af5

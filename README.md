# Banco Web Testes

## Objetivo

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

## Instalação

Na raiz do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências declaradas no arquivo `package.json`, incluindo:

- `cypress`
- `start-server-and-test`

## Scripts disponíveis

Os scripts configurados no `package.json` são:

```bash
npm test
```

Executa os testes em modo headless.

```bash
npm run cy:headed
```

Executa os testes com o navegador em modo visível.

```bash
npm run cy:open
```

Abre a interface do Cypress para execução manual dos testes.

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

```text
Erro no login. Tente novamente.
```

O teste usa `cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')` para verificar a mensagem.

### Transferências

Arquivo: `cypress/e2e/transferencia.cy.js`

Neste momento, o arquivo está em estrutura inicial. Ele contém o cenário:

```js
describe('Transferencias', () =>{
it('Deve transferir quando informo dados e valor validos', () =>{

    })

})
```

Ou seja, há a definição do nome do cenário, mas a implementação da validação ainda não foi concluída no código atual.

## Custom commands

O arquivo `cypress/support/commands.js` está com o scaffold padrão do Cypress. Ele contém exemplos do uso de custom commands e comentários explicativos, como:

```js
Cypress.Commands.add('login', (email, password) => { ... })
```

Também existe um exemplo de sobrescrita de comando:

```js
Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
```

### Finalidade

Os custom commands permitem centralizar ações repetidas, como:

- login em diferentes testes
- preenchimento de formulários
- ações comuns da interface
- reutilização de trechos que aparecem em vários cenários

### Parâmetros

No exemplo padrão, o comando `login` recebe:

- `email`
- `password`

### Exemplo de uso

```js
cy.login('usuario@email.com', 'senha123')
```

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

<h1 align="center">📝 Back-end RocketNotes</h1>

## 💻 Projeto

Back-end de uma aplicação de criação de notas, o RocketNotes.

No RocketNotes você poderá criar sua conta e desfrutar de um ambiente para você registrar suas anotações.

As anotações podem conter tags e links para deixá-las mais completas.

Desenvolvi a lógica para:

- Criação e Atualização de Usuários;
- Criação, Listagem e Remoção de Notas;
- Listagem de Tags.

Além disso, a aplicação está conectada com um banco de dados, deixando as coisas dinâmicas.

## 📥 Conhecimento adquirido

- O que é uma API;
- O que é o Node.js;
- Express;
- Rotas e Métodos HTTP;
- Route Params, Query Params e Body Params;
- Nodemon;
- Insomnia;
- Arquitetura de Projeto;
- HTTP Codes;
- Tratamento de erros;
- Banco de dados e SGBD;
- SQL: DDL e DML;
- Migrations;
- Criptografia de senha;
- Nullish operator;
- Query Builder: knex.js;
- Consultas simples e Complexas no DB;
- Fluxo de autenticação;
- Trabalhar com Json Web Token (JWT);
- Trabalhar com Middleware;
- Como fazer Upload de Imagens na aplicação;
- Trabalhar com API Restful;
- Trabalhar com Cross-Origin Resource Sharing (CORS);
- O que é Deploy;
- Ambientes de execução;
- Boa práticas de Deploy: Dados sensíveis e Variáveis Ambientes;
- Gerenciador de processos PM2;
- Desenvolver Testes com Jest.js;
- O que é e como aplicar o princípio da Inversão de Dependência.

## 🛠 Tecnologias usadas

- [NodeJS](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [Jest.js](https://jestjs.io/)
- [Knex.js](https://knexjs.org/)
- [SQL](https://www.sqltutorial.org/)
- [Beekeeper Studio](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/download)

## ▶ Rodando a Aplicação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e ter o [Insomnia](https://insomnia.rest/download) instalado para trabalhar com todas as requisições http.

OBS: você pode importar o arquivo insomnia.json dentro do insomnia para já ter acesso ao projeto com as requisições http pré-configuradas.

```bash
# Clone este repositório
$ git clone https://github.com/Elias-Neto/rocketnotes-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd rocketnotes-backend

# Instale as dependências
$ npm install

# Execute as migrations
$ npm run migrate

# Caso queira rodar os testes
$ npm run test

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

<br>
<br>

<p align="center"> Desenvolvido com ❤ por Elias de Araújo Ferreira Neto 👋 <p>

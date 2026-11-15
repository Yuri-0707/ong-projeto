# ONG Projeto

Projeto Integrador Extensionista II - Atividade 1.

Projeto criado com Vite+ (Vanilla, JavaScript), com uma API Express que expõe a rota `GET /api/health` e uma página inicial que exibe a resposta dessa rota.

## Requisitos

- Node.js
- Vite+ (comando `vp`)

## Como rodar

1. Instale as dependências:

        npm install

2. Crie o arquivo `.env` a partir do exemplo:

        copy .env.example .env

3. Em um terminal, inicie a API (porta 3000):

        npm run api

4. Em outro terminal, inicie o front-end (porta 5173):

        npm run dev

5. Abra http://localhost:5173 no navegador. A página deve exibir "Status da API: ok" com data e hora.

## Rota da API

- `GET /api/health` retorna `{ "status": "ok", "timestamp": "..." }`

## Estrutura

- `server/index.js`: API Express
- `vite.config.ts`: configuração do Vite com proxy de `/api` para a API
- `src/main.js`: página inicial que consulta a API
- `.env.example`: modelo das variáveis de ambiente

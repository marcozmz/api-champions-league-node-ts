# API Champions League

API RESTful desenvolvida em Node.js para gerenciamento de jogadores e clubes da Champions League.

## Funcionalidades

- Listar todos os jogadores
- Buscar jogador por ID
- Cadastrar novo jogador
- Atualizar estatísticas de um jogador
- Remover jogador
- Listar clubes

## Estrutura do Projeto

```
src/
│
├── app.ts
├── server.ts
├── routes.ts
│
├── controllers/
│   ├── players-controller.ts
│   └── clubs-controller.ts
│
├── data/
│   └── clubs.json
│
├── models/
│   ├── player.model.ts
│   ├── club-model.ts
│   ├── statistics-model.ts
│   └── http-response-module.ts
│
├── repositores/
│   ├── players-repository.ts
│   └── clubs-repository.ts
│
├── services/
│   ├── players-services.ts
│   └── clubs-services.ts
│
└── utils/
    └── http-helper.ts
```

## Como rodar o projeto

1. **Clone o repositório**
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Defina a variável de ambiente `PORT`**
   - Exemplo: crie um arquivo `.env` com o conteúdo:
     ```
     PORT=3000
     ```
4. **Inicie o servidor**
   ```bash
   npm start
   ```
5. **Acesse a API**
   - Base URL: `http://localhost:3000/api`

## Exemplos de Endpoints

- `GET /api/players` — Lista todos os jogadores
- `GET /api/players/:id` — Busca jogador por ID
- `POST /api/players` — Cadastra novo jogador
- `PATCH /api/players/:id` — Atualiza estatísticas do jogador
- `DELETE /api/players/:id` — Remove jogador
- `GET /api/clubs` — Lista todos os clubes

## Exemplo de cadastro de jogador

```json
{
  "id": 999,
  "name": "marks",
  "club": "coringao",
  "nationality": "brasil",
  "position": "atacante",
  "statics": {
    "Overall": 99,
    "Pace": 89,
    "Shooting": 99,
    "Passing": 98,
    "Dribbling": 85,
    "Defending": 25,
    "Physical": 98
  }
}
```

## Observações

- Certifique-se de enviar o JSON sem vírgula extra no último campo.
- O projeto utiliza um array em memória para os jogadores e um arquivo JSON para os clubes.

---

Desenvolvido para fins educacionais 🚀
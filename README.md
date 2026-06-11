# movieTime API

API REST em Node.js com CRUD completo de filmes, usando Express e Sequelize com MySQL.

---

## tecnologias

- Node.js
- Express
- Sequelize
- MySQL

---

## como rodar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/movietime-api.git
cd movietime-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env
```

Edite o `.env`:

```env
DB_NAME=movietime
DB_USER=root
DB_PASS=sua_senha
DB_HOST=localhost
PORT=3000
```

> Certifique-se de criar o banco de dados `movietime` no MySQL antes de rodar.

### 4. Rode o servidor

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`

---

## endpoints

### Base URL: `/movies`

| Método | Rota          | Descrição             |
|--------|---------------|-----------------------|
| POST   | `/movies`     | Criar um novo filme   |
| GET    | `/movies`     | Listar todos os filmes|
| GET    | `/movies/:id` | Buscar filme por ID   |
| PUT    | `/movies/:id` | Atualizar filme       |
| DELETE | `/movies/:id` | Deletar filme         |

---

## exemplos de Requisições

### POST /movies — Criar filme

**Body:**
```json
{
  "title": "O Senhor dos Anéis",
  "director": "Peter Jackson",
  "watched": false
}
```

**Resposta (201):**
```json
{
  "success": true,
  "message": "Filme criado com sucesso.",
  "data": {
    "id": 1,
    "title": "O Senhor dos Anéis",
    "director": "Peter Jackson",
    "watched": false,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### GET /movies — Listar todos

**Resposta (200):**
```json
{
  "success": true,
  "message": "Filmes recuperados com sucesso.",
  "data": [...]
}
```

---

### GET /movies/:id — Buscar por ID

**Resposta (200):**
```json
{
  "success": true,
  "message": "Filme encontrado.",
  "data": { "id": 1, "title": "O Senhor dos Anéis", ... }
}
```

**Resposta (404):**
```json
{
  "success": false,
  "message": "Filme não encontrado."
}
```

---

### PUT /movies/:id — Atualizar filme

**Body:**
```json
{
  "watched": true
}
```

**Resposta (200):**
```json
{
  "success": true,
  "message": "Filme atualizado com sucesso.",
  "data": { "id": 1, "title": "O Senhor dos Anéis", "watched": true, ... }
}
```

---

### DELETE /movies/:id — Deletar filme

**Resposta (200):**
```json
{
  "success": true,
  "message": "Filme deletado com sucesso."
}
```

---

## autores

joao vitor vieira waicampe
clara luisa
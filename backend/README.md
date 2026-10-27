# CRUD de Produtos de Beleza com Node.js

Express + Mongoose + MongoDB Atlas.

## Estrutura

```text
src/
├── controllers/produtoController.js
├── models/Produto.js
├── routes/produtoRoutes.js
└── server.js
```

## Executar

```bash
npm install
cp .env.example .env   # cole a string do Atlas em MONGODB_URI
npm run dev
```

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | /produtos | Lista produtos |
| GET | /produtos/:id | Busca um produto |
| POST | /produtos | Cria um produto |
| PUT | /produtos/:id | Atualiza um produto |
| DELETE | /produtos/:id | Exclui um produto |

## Exemplo de JSON

```json
{
  "nome": "Batom Matte",
  "marca": "Maybelline",
  "categoria": "batom",
  "preco": 39.9,
  "descricao": "Cor vermelho cereja"
}
```

## Deploy (Render)

Build Command: `npm install` · Start Command: `npm start` · variável `MONGODB_URI`.
No Atlas, libere o IP `0.0.0.0/0` em Network Access.

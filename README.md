# Beauty Products PWA

Aplicação fullstack para gerenciar um catálogo de produtos de beleza. O frontend é um PWA (Progressive Web App) responsivo, construído com abordagem mobile first, e consome uma API REST em Node.js com banco de dados MongoDB.
## 🚀 Links de Acesso
- **Aplicação Web (Frontend na Vercel):** [beauty-products-pwa.vercel.app](https://beauty-products-pwa.vercel.app/)
- **API (Backend no Render):** [beauty-products-pwa.onrender.com/produtos](https://beauty-products-pwa.onrender.com/produtos)
## Funcionalidades

- Cadastrar produto (nome, marca, categoria, preço e descrição)
- Listar todos os produtos
- Buscar produto pelo ID
- Editar e excluir produtos
- Interface responsiva (mobile first)
- Instalável como aplicativo (PWA) com ícones e manifest

## Tecnologias

**Backend**
- Node.js
- Express
- MongoDB Atlas com Mongoose
- dotenv (variáveis de ambiente)
- Nodemon (desenvolvimento)

**Frontend**
- HTML5, CSS3 e JavaScript puro
- `fetch` para consumir a API
- Web App Manifest e Service Worker

## Arquitetura

```
Navegador (frontend :5000)  ──HTTP/JSON──▶  API Express (:3000)  ──▶  MongoDB Atlas
```

O backend segue uma separação em camadas:

| Camada | Pasta | Responsabilidade |
|--------|-------|------------------|
| Rotas | `backend/src/routes` | Define quais URLs e métodos HTTP a API aceita |
| Controllers | `backend/src/controllers` | Recebe a requisição, aplica a lógica e devolve a resposta |
| Models | `backend/src/models` | Define o formato do produto e conversa com o MongoDB |

## Estrutura do projeto

```
beauty-products-pwa/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── produtoController.js
│   │   ├── models/
│   │   │   └── Produto.js
│   │   ├── routes/
│   │   │   └── produtoRoutes.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── frontend/
│   ├── icones/
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   ├── sw.js
│   ├── manifest.json
│   └── logo.png
└── README.md
```

## Variáveis de ambiente

Crie `backend/.env` a partir de `backend/.env.example`:

| Variável | Descrição |
|----------|-----------|
| `MONGODB_URI` | String de conexão do MongoDB Atlas |
| `PORT` | Porta da API (padrão: 3000) |
| `DNS_SERVERS` | Opcional. Servidores DNS separados por vírgula, usados na conexão com o Atlas |

O arquivo `.env` contém credenciais e **não deve ser enviado ao GitHub** (já está no `.gitignore`).

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- Conta no [MongoDB Atlas](https://www.mongodb.com/atlas) com um cluster
- IP liberado em **Network Access** no Atlas

## Como rodar localmente

### 1. Clonar

```bash
git clone https://github.com/allanydias/beauty-products-pwa.git
cd beauty-products-pwa
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
```

Preencha o `.env` e inicie:

```bash
npm run dev
```

O terminal deve mostrar **MongoDB conectado**. Teste em `http://localhost:3000/`:

```json
{ "mensagem": "API de produtos de beleza funcionando" }
```

### 3. Frontend

Em outro terminal:

```bash
cd frontend
npx serve . -l 5000
```

Acesse `http://localhost:5000`. Mantenha os dois terminais abertos.

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/` | Teste de funcionamento da API |
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca um produto pelo ID |
| POST | `/produtos` | Cadastra um produto |
| PUT | `/produtos/:id` | Atualiza um produto |
| DELETE | `/produtos/:id` | Remove um produto |

Os caminhos exatos estão definidos em `backend/src/routes/produtoRoutes.js`.

## PWA

- `manifest.json`: nome, cores e ícones do aplicativo instalável
- `sw.js`: service worker responsável pelo cache de arquivos
- `icones/`: favicons e ícones para Android e iOS

## Deploy

- **Banco:** MongoDB Atlas (com acesso de rede liberado para o servidor da API)
- **Backend:** Render (Root Directory `backend`, Build `npm install`, Start `npm start`, variáveis de ambiente configuradas no painel)
- **Frontend:** Vercel (Root Directory `frontend`, sem build)

Em produção, a URL da API no `frontend/app.js` deve apontar para o endereço público do backend.

## Problemas comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `Failed to fetch` | Backend desligado ou URL da API errada | Subir o backend e conferir a URL no `app.js` |
| `EADDRINUSE :3000` | Porta já ocupada | Encerrar o processo antigo ou trocar a porta |
| `querySrv ECONNREFUSED` | Falha de DNS ao conectar no Atlas | Tentar de novo, conferir internet e Network Access |
| Versão antiga do site | Cache do service worker | `Ctrl+Shift+R` ou Unregister no DevTools |

## Autora

Allany Dias de Oliveira ([@allanydias](https://github.com/allanydias))

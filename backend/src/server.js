require("dotenv").config();

// Opcional: só para redes que bloqueiam consulta SRV (mongodb+srv).
// No .env local: DNS_SERVERS=8.8.8.8,1.1.1.1  (no Render não precisa)
if (process.env.DNS_SERVERS) {
  require("dns").setServers(process.env.DNS_SERVERS.split(","));
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de produtos de beleza funcionando" });
});

app.use("/produtos", produtoRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Defina MONGODB_URI no arquivo .env (ou nas variáveis do Render)");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1);
  });

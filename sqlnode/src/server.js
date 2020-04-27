// importação de um módulo que não é do próprio código
const express = require("express");

// importação de arquivos do próprio código
const routes = require("./routes");
require("./database");

// atribuindo o express à constante "app"
const app = express();

// como estamos numa API podemos usar o próprio json como configuração de arquivo para inserção de dados
app.use(express.json());

app.use(routes);

// configuração da porta da API
app.listen(3333);

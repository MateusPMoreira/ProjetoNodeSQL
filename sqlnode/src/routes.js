// Importação de módulos que não são do próprio código
const express = require("express");

// Importação de arquivos do próprio código
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");

const routes = express.Router();

//Rotas de Usuário
routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

// Rotas de Address
routes.post("/users/:user_id/addresses", AddressController.store);
routes.get("/users/:user_id/addresses", AddressController.index);

// Rotas de Techs
routes.post("/users/:user_id/techs", TechController.store);
routes.get("/users/:user_id/techs", TechController.index);
routes.delete("/users/:user_id/techs", TechController.delete);

// Rota do Relatório
routes.get("/report", ReportController.show);

// exportação do arquivo routes
module.exports = routes;

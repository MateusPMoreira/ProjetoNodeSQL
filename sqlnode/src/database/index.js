// importação de coisas do próprio projeto
const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../model/User");
const Address = require("../model/Address");
const Tech = require("../model/Tech");

//estanciando connection do tipo sequelize
const connection = new Sequelize(dbConfig);

//inicialização das devidas conexões
User.init(connection);
Address.init(connection);
Tech.init(connection);

//inicialização da associação
User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;

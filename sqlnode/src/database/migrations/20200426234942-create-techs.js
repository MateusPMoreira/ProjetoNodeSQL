"use strict";

module.exports = {
  //neste metodo cria-se a tabela
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("techs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  // neste metodo apaga, como se fosse uma previsão de um possível erro
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("techs");
  },
};

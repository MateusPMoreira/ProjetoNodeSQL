"use strict";

module.exports = {
  //neste metodo cria-se a tabela
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_techs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "techs", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    return queryInterface.dropTable("user_techs");
  },
};

//importação de módulos que não são do próprio projeto
const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        //o sequelize pluraliza o nome das tabelas assim nos forçamos o nome da tabela a ser "tech"
        tableName: "techs",
      }
    );
  }
  //configuração das chaves estrangeiras e relações de tabelas
  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "tech_id",
      through: "user_techs",
      as: "users",
    });
  }
}

module.exports = Tech;

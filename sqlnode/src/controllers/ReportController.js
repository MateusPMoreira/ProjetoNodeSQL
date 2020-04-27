// relatórios

// importação de coisas do próprio projeto
const { Op } = require("sequelize");
const User = require("../model/User");

module.exports = {
  async show(req, res) {
    // busca todos usuários oonde o email termina com uma string especificada
    // filtra a busca anterior onde temos uma string refererindo-se à rua da consulta e onde as tecnologias começam com uma string específica

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%gordin@mateus.com.br",
        },
      },
      //como tem mais de uma associação colocou-se num array
      include: [
        //filtro pela rua
        {
          association: "addresses",
          where: {
            street: "Rua dos Gordos",
          },
        },
        {
          //retorna apenas as tecnologias requisitadas
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "nodejs%",
            },
          },
        },
      ],
    });

    return res.json(users);
  },
};

// confugurações para conexão com o sgbd
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "sqlnode",
  define: {
    timestamps: true,
    underscored: true,
  },
};

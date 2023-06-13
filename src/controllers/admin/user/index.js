const dataBase = require('../../../database');

module.exports = {
  list: async () => {
    return dataBase.query('SELECT nome, usuario FROM usuario');
  },
  create: async (req) => {
    const { nomeCompleto, usuario, senha } = req.body;
    return dataBase.query('INSERT INTO usuario (nome, usuario, senha) VALUES (?, ?, ?)', [nomeCompleto, usuario, senha]);
  },
};
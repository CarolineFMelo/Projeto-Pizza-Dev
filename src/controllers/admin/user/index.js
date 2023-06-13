const dataBase = require('../../../database');

module.exports = {
  list: async () => {
    return dataBase.query('SELECT nome, usuario FROM usuario');
  },
  create: async (req) => {
    const { nomeCompleto, usuario, senha } = req.body;
    return dataBase.query('INSERT INTO usuario (nome, usuario, senha) VALUES (?, ?, ?)', [nomeCompleto, usuario, senha]);
  },
  delete: async (user) => {
    return dataBase.query('DELETE FROM usuario WHERE usuario = ?', [user]);
  },
  update: async (req, user) => {
    const { nomeCompleto, usuario, senha } = req.body;
    return dataBase.query('UPDATE usuario SET nome = ?, usuario = ?, senha = ? WHERE usuario = ?', [nomeCompleto, usuario, senha, user]);
  },
  searchByUser: async (user) => {
    return dataBase.query('SELECT nome, usuario FROM usuario WHERE usuario = ?', [user]);
  }
};
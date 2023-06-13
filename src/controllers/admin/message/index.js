const dataBase = require('../../../database');

module.exports = {
  list: async () => {
    return dataBase.query('SELECT * FROM mensagem');
  },
  create: async (req) => {
    const { nome, email, assunto, mensagem } = req.body;
    return dataBase.query('INSERT INTO mensagem (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)', [nome, email, assunto, mensagem]);
  },
  delete: async (id) => {
    return dataBase.query('DELETE FROM mensagem WHERE id = ?', [id]);
  }
};
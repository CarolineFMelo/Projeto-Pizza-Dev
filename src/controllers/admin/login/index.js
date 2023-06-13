const dataBase = require('../../../database');

module.exports = {
  login: async (req) => {
    const { usuario, senha } = req.body;
    const data = await dataBase.query('SELECT * FROM usuario WHERE usuario = ? and senha = ?', [usuario, senha]);
    return data;
  },
};
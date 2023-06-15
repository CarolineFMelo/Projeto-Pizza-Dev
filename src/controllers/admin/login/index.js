const dataBase = require('../../../database');

module.exports = {
  login: async (req) => {
    const { usuario, senha } = req.body;
    const data = await dataBase.query('SELECT * FROM usuario WHERE usuario = ? AND senha = ?', [usuario, senha]);
    return data;
  },
  getToken: async (req) => {
    if(!req.session.user && req.session.token){
      const data = await dataBase.query('SELECT * FROM usuario WHERE token = ?', [req.cookies.token]);
      if (data.length) {
        req.session.user = data[0];
      }
    }
  }
};
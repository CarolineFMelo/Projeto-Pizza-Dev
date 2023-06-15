const dataBase = require('../../../database');
const uuidv4 = require('uuid').v4;

module.exports = {
  login: async (req, res) => {
    const { usuario, senha, manterLogado } = req.body;
    const data = await dataBase.query('SELECT * FROM usuario WHERE usuario = ? AND senha = ?', [usuario, senha]);
    if (manterLogado) {
      const token = uuidv4();
      await dataBase.query('UPDATE usuario SET token = ? WHERE usuario = ?', [token, data[0].usuario]);
      res.cookie('token', token);
    }
    return data;
  },
  getToken: async (req) => {
    
    if(!req.session.user && req.cookies.token){
      const data = await dataBase.query('SELECT * FROM usuario WHERE token = ?', [req.cookies.token]);
      if (data.length) {
        req.session.user = data[0];
      }
    }
  }
};
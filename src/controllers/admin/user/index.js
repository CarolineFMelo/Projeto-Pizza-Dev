const dataBase = require('../../../database');

module.exports = {
  list: async () => {
    return dataBase.query('SELECT nome, usuario FROM usuario');
  },
  create: async (req) => {
    const { nomeCompleto, usuario, senha, confirmacaoSenha} = req.body;
    if (nomeCompleto && usuario && ( senha == confirmacaoSenha )) {
      return dataBase.query('INSERT INTO usuario (nome, usuario, senha) VALUES (?, ?, AES_ENCRYPT(?,?))', [nomeCompleto, usuario, senha, 'pwd']);
    } else {
      return {error: true, message: senha == confirmacaoSenha ? 'Verfique os campos' : 'Verifique a senha'};
    }
  },
  delete: async (user) => {
    return dataBase.query('DELETE FROM usuario WHERE usuario = ?', [user]);
  },
  update: async (req, user) => {
    const { nomeCompleto, usuario, senha, confirmacaoSenha} = req.body;
    if (nomeCompleto && usuario && ( senha == confirmacaoSenha )) {
      return dataBase.query('UPDATE usuario SET nome = ?, usuario = ?, senha = AES_ENCRYPT(?,?) WHERE usuario = ?', [nomeCompleto, usuario, senha, 'pwd', user]);
    } else {
      return {error: true, message: senha == confirmacaoSenha ? 'Verfique os campos' : 'Verifique a senha'};
    }
  },
  searchByUser: async (user) => {
    return dataBase.query('SELECT nome, usuario FROM usuario WHERE usuario = ?', [user]);
  }
};
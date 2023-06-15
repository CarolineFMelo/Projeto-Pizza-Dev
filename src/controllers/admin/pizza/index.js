const dataBase = require('../../../database');

module.exports = {
  list: async () => {
    return await dataBase.query('SELECT * FROM pizza');
  },
  create: async (req) => {
    const { nomePizza, descricao, precoBrotinho, precoMedia, precoGrande, foto } = req.body;
    if ( nomePizza && descricao && precoBrotinho && precoMedia && precoGrande && foto ) {
      return await dataBase.query('INSERT INTO pizza (nome, descricao, precoBrotinho, precoMedia, precoGrande, foto) VALUES (?, ?, ?, ?, ?, ?)', [nomePizza, descricao, precoBrotinho, precoMedia, precoGrande, foto]);
    } else {
      return {error: true, message: 'Verfique os campos'};
    }
  },
  delete: async (id) => {
    return await dataBase.query('DELETE FROM pizza WHERE id =?', [id]);
  },
  update: async (req, id) => {
    const { nomePizza, descricao, precoBrotinho, precoMedia, precoGrande, foto } = req.body;
    if ( nomePizza && descricao && precoBrotinho && precoMedia && precoGrande && foto ) {
      return await dataBase.query('UPDATE pizza SET nome = ?, descricao = ?, precoBrotinho = ?, precoMedia = ?, precoGrande = ?, foto = ? WHERE id = ?', [nomePizza, descricao, precoBrotinho, precoMedia, precoGrande, foto, id]);
    } else {
      return {error: true, message: 'Verfique os campos'};
    }
  },
  searchById: async (id) => {
    return await dataBase.query('SELECT * FROM pizza WHERE id = ?', [id]);
  }
};
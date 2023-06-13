const express = require('express');
const { admin } = require('../../../controllers');
const user = express.Router();

user.get('/', async (req, res) => {
  const data = await admin.user.list();
  const dadosTemplate = {
    title: 'Usuários | Administração | Pizza DEV',
    data: data
  };
  res.render('admin/usuarios', dadosTemplate);
});

user.get('/register', (req, res) => {
  const dadosTemplate = {
    title: 'Cadastrar Usuário | Administração | Pizza DEV',
  };
  res.render('admin/cadastrar-usuario', dadosTemplate);
});

user.post('/register', async (req, res) => {
  const data = await admin.user.create(req);
  res.render('admin/cadastrar-usuario', data.length === 0 ? {
    title: 'Usuários | Administração | Pizza DEV',
    error: true,
    message: 'Erro para cadastrar'
  } : {
    title: 'Usuários | Administração | Pizza DEV',
    success: true,
    message: 'Cadastrado com sucesso'
  });
});
 
user.get('/edit', (req, res) => {
  const dadosTemplate = {
    title: 'Editar Usuário | Administração | Pizza DEV',
  };
  res.render('admin/editar-usuario', dadosTemplate);
});

module.exports = user;

const express = require('express');
const { admin } = require('../../../controllers');
const user = express.Router();

user.get('/', async (req, res) => {
  res.render('admin/usuarios', {
    title: 'Usuários | Administração | Pizza DEV',
    data: await admin.user.list()
  });
});

// ========================
//    Register a user
// ========================

user.get('/register', (req, res) => {
  res.render('admin/cadastrar-usuario', {
    title: 'Cadastrar Usuário | Administração | Pizza DEV',
  });
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
    message: 'Deletado com sucesso'
  });
});

// ========================
//    Delete a user
// ========================

user.get('/delete/:user', async (req, res) => {
  await admin.user.delete(req.params.user);
  res.redirect('/user');
});


// ========================
//    Edit a user
// ========================

user.get('/edit', (req, res) => {
  const dadosTemplate = {
    title: 'Editar Usuário | Administração | Pizza DEV',
  };
  res.render('admin/editar-usuario', dadosTemplate);
});

module.exports = user;

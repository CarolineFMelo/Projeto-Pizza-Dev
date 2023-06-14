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
    title: 'Cadastrar Usuário | Administração | Pizza DEV'
  });
});

user.post('/register', async (req, res) => {
  const data = await admin.user.create(req);
  res.render('admin/cadastrar-usuario', {
    title: 'Usuários | Administração | Pizza DEV',
    response: {
      error: data.error || false,
      message: data.error ? data.message : 'Cadastrado com sucesso!'
    }
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
//    Update a user
// ========================

user.get('/update/:user', async (req, res) => {
  const data = await admin.user.searchByUser(req.params.user);
  res.render('admin/editar-usuario', {
    title: 'Editar Usuário | Administração | Pizza DEV',
    data: data[0]
  });
});

user.post('/update/:user', async (req, res) => {
  await admin.user.update(req, req.params.user);
  res.redirect('/user');
});

module.exports = user;

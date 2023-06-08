const express = require('express');
const user = express.Router();

user.get('/', (req, res) => {
  const dadosTemplate = {
    title: 'Usuários | Administração | Pizza DEV',
  };
  res.render('admin/usuarios', dadosTemplate);
});

user.get('/cadastrar', (req, res) => {
  const dadosTemplate = {
    title: 'Cadastrar Usuário | Administração | Pizza DEV',
  };
  res.render('admin/cadastrar-usuario', dadosTemplate);
});

user.get('/editar', (req, res) => {
  const dadosTemplate = {
    title: 'Editar Usuário | Administração | Pizza DEV',
  };
  res.render('admin/editar-usuario', dadosTemplate);
});

module.exports = user;

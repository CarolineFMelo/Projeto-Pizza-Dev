const express = require('express');
const login = express.Router();
const { admin } =  require('../../../controllers');

login.get('/', (req, res) => {
  const dadosTemplate = {
    title: 'Login | Administração | Pizza DEV',
    error: false
  };
  res.render('admin/login', dadosTemplate);
});

login.post('/', async(req, res) => {
  const data = await admin.login.login(req, res);
  if (data.length > 0) {
    req.session.user = data[0];
    res.redirect('/admin');
  } else {
    res.render('admin/login', {
      title: 'Login | Administração | Pizza DEV',
      response: {
        message: 'Usuário ou senha inválido'
      }
    });
  }
});

module.exports = login;
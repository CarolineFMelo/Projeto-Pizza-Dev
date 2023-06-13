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
  const data = await admin.login.login(req);
  if (data.length === 0) {
    res.render('admin/login', {
      title: 'Login | Administração | Pizza DEV',
      error: true,
      message: 'Erro'
    });
  } else {
    res.redirect('/admin');
  }
});

module.exports = login;
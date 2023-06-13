const express = require('express');
const login = express.Router();
const { admin } =  require('../../../controllers');

login.get('/', (req, res) => {
  const dadosTemplate = {
    title: 'Login | Administração | Pizza DEV',
  };
  res.render('admin/login', dadosTemplate);
});

login.post('/', async(req, res) => {
  const dadosTemplate = {
    title: 'Login | Administração | Pizza DEV',
  };
  admin.login.login(req);
  res.render('admin/login', dadosTemplate);
});

module.exports = login;
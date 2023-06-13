const express = require('express');
const admin = express.Router();
const login = require('./login');
const user = require('./user');
const pizza = require('./pizza');

admin.get('/admin', (req, res) => {
  const dadosTemplate = {
    title: 'Nossas Pizzas | Administração | Pizza DEV',
  };
  res.render('admin/index', dadosTemplate);
});


admin.get('/message', (req, res) => {
  const dadosTemplate = {
    title: 'Mensagens | Administração | Pizza DEV',
  };
  res.render('admin/mensagens', dadosTemplate);
});

admin.use('/user', user);
admin.use('/pizza', pizza);
admin.use('/login', login);

module.exports = admin;
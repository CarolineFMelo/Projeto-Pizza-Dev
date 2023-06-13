const express = require('express');
const admin = express.Router();
const login = require('./login');
const message = require('./message');
const user = require('./user');
const pizza = require('./pizza');

admin.get('/admin', (req, res) => {
  const dadosTemplate = {
    title: 'Nossas Pizzas | Administração | Pizza DEV',
  };
  res.render('admin/index', dadosTemplate);
});


admin.use('/login', login);
admin.use('/message', message);
admin.use('/user', user);
admin.use('/pizza', pizza);

module.exports = admin;
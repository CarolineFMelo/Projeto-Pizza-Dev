const express = require('express');
const admin = express.Router();
const login = require('./login');
const message = require('./message');
const user = require('./user');
const pizza = require('./pizza');
const controller = require('../../controllers');

admin.get('/admin', async (req, res) => {
  res.render('admin/index', {
    title: 'Nossas Pizzas | Administração | Pizza DEV',
    data: await controller.admin.pizza.list()
  });
});

admin.use('/login', login);
admin.use('/message', message);
admin.use('/user', user);
admin.use('/pizza', pizza);

module.exports = admin;
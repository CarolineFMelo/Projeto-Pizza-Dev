const express = require('express');
const admin = express.Router();
const login = require('./login');
const message = require('./message');
const user = require('./user');
const pizza = require('./pizza');
const controller = require('../../controllers');

admin.use('*', async (req, res, next) => {
  await controller.admin.login.getToken(req);
  next();
});

admin.use('/login', login);

admin.use('*', async (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }
  next();
});

admin.get('/admin', async (req, res) => {
  res.render('admin/index', {
    title: 'Nossas Pizzas | Administração | Pizza DEV',
    data: await controller.admin.pizza.list()
  });
});

admin.get('/logout', (req, res) => {
  res.cookie('token', '');
  req.session.destroy();
  res.redirect('/login'); 
});

admin.use('/message', message);
admin.use('/user', user);
admin.use('/pizza', pizza);

module.exports = admin;
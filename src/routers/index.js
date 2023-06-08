const express = require('express');
const router = express.Router();
const user = require('./user');
const pizza = require('./pizza');
const admin = require('./admin');
const bd = require('../database');

router.get('/', (req, res) => {
  const dadosTemplate = {
    title: 'Pizza DEV',
  };
  res.render('index', dadosTemplate);
});

router.get('/login', (req, res) => {
  const dadosTemplate = {
    title: 'Login | Administração | Pizza DEV',
  };
  res.render('admin/login', dadosTemplate);
});

router.get('/mensagens', (req, res) => {
  const dadosTemplate = {
    title: 'Mensagens | Administração | Pizza DEV',
  };
  res.render('admin/mensagens', dadosTemplate);
});

router.get('/connection', async (req, res) => {
  const connection = await bd.getConnection();
  console.log(connection);
  res.send('Conexão realizada com sucesso!');
});

router.use('/admin', admin);
router.use('/usuarios', user);
router.use('/pizza', pizza);

module.exports = router;
const express = require('express');
const router = express.Router();
const admin = require('./admin');
const bd = require('../database');
const controller = require('../controllers');

router.get('/', async (req, res) => {
  res.render('index', {
    title: 'Pizza DEV',
    data: await controller.admin.pizza.list()
  });
});

router.get('/connection', async (req, res) => {
  const connection = await bd.getConnection();
  console.log(connection);
  res.send('Conexão realizada com sucesso!');
});


router.use('/', admin);

module.exports = router;
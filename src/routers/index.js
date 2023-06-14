const express = require('express');
const router = express.Router();
const admin = require('./admin');
const bd = require('../database');

router.get('/', (req, res) => {
  const dadosTemplate = {
    title: 'Pizza DEV',
  };
  res.render('index', dadosTemplate);
});

router.get('/connection', async (req, res) => {
  const connection = await bd.getConnection();
  console.log(connection);
  res.send('Conexão realizada com sucesso!');
});


router.use('/', admin);

module.exports = router;
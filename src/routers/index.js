const express = require('express');
const router = express.Router();
const admin = require('./admin');
const bd = require('../database');
const controller = require('../controllers');

// ========================
//        Index
// ========================

router.get('/', async (req, res) => {
  res.render('index', {
    title: 'Pizza DEV',
    data: await controller.admin.pizza.list()
  });
});

// ========================
//   create a message
// ========================

router.post('/message', async (req, res) => {
  await controller.admin.message.create(req);
  res.redirect('/');
});

// ========================
//   Test connection
// ========================

router.get('/connection', async (req, res) => {
  const connection = await bd.getConnection();
  console.log(connection);
  res.send('Conexão realizada com sucesso!');
});


router.use('/', admin);

module.exports = router;
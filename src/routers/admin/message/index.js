const express = require('express');
const message = express.Router();
const { admin } = require('../../../controllers');

message.get('/', async (req, res) => {
  const data = await admin.message.list();
  const dadosTemplate = {
    title: 'Mensagens | Administração | Pizza DEV',
    data: data
  };
  res.render('admin/mensagens', dadosTemplate);
});

// ========================
//   Register a message
// ========================

message.post('/', async (req, res) => {
  const data = await admin.message.create(req);
  if (data.length === 0) {
    console.log('Error');
    res.render('/', {
      title: 'Pizza DEV',
      error: true,
      message: 'Erro ao enviar'
    });
  } else {
    res.redirect('/');
  }
});

// ========================
//   Delete a message
// ========================

message.get('/:id', async (req, res) => {
  await admin.message.delete(req.params.id);
  res.redirect('/mensagens');
});

module.exports = message;
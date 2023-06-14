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
//   create a message
// ========================

message.post('/', async (req, res) => {
  await admin.message.create(req);
  res.redirect('/');
});

// ========================
//   Delete a message
// ========================

message.get('/:id', async (req, res) => {
  await admin.message.delete(req.params.id);
  res.redirect('/message');
});

module.exports = message;
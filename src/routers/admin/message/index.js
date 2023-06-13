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

message.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await admin.message.delete(id);
  const dadosTemplate = data.length === 0 ?
    { 
      title: 'Mensagens | Administração | Pizza DEV',
      error: true,
      message: 'Erro ao deletar'
    } :
    {
      title: 'Mensagens | Administração | Pizza DEV',
      success: true,
      message: 'Deletado com sucesso'
    };

  res.render('admin/mensagens', dadosTemplate);
});

module.exports = message;
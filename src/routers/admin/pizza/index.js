const express = require('express');
const pizza = express.Router();

pizza.get('/register', (req, res) => {
  const dadosTemplate = {
    title: 'Cadastrar Pizza | Administração | Pizza DEV',
  };
  res.render('admin/cadastrar-pizza', dadosTemplate);
});

pizza.get('/edit', (req, res) => {
  const dadosTemplate = {
    title: 'Editar Pizza | Administração | Pizza DEV',
  };
  res.render('admin/editar-pizza', dadosTemplate);
});


module.exports = pizza;
const express = require('express');
const { admin } = require('../../../controllers');
const pizza = express.Router();

// ========================
//    create a user
// ========================

pizza.get('/create', (req, res) => {
  res.render('admin/cadastrar-pizza', {
    title: 'Cadastrar Pizza | Administração | Pizza DEV'
  });
});

pizza.post('/create', async (req, res) => {
  const data = await admin.pizza.create(req);
  res.render('admin/cadastrar-pizza', {
    title: 'Cadastrar Pizza | Administração | Pizza DEV',
    response: {
      error: data.error || false,
      message: data.error ? data.message : 'Cadastrado com sucesso!'
    }
  });
});

// ========================
//    Delete an pizza
// ========================

pizza.get('/delete/:id', async (req, res) => {
  await admin.pizza.delete(req.params.id);
  res.redirect('/admin');
});


// ========================
//   Update an pizza
// ========================

pizza.get('/update/:id', async (req, res) => {
  const data = await admin.pizza.searchById(req.params.id);
  res.render('admin/editar-pizza', {
    title: 'Editar Pizza | Administração | Pizza DEV',
    data: data[0]
  });
});

pizza.post('/update/:id', async (req, res) => {
  const data = await admin.pizza.update(req, req.params.id);
  if (data.error) {
    const search = await admin.pizza.searchById(req.params.id);
    res.render('admin/editar-pizza', {
      title: 'Editar Pizza | Administração | Pizza DEV',
      data: search[0],
      response: {
        error: data.error,
        message: data.message
      }
    });
    return;
  }
  res.redirect('/admin');
});


module.exports = pizza;
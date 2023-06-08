const express = require('express');
const admin = express.Router();

admin.get('/', (req, res) => {
    const dadosTemplate = {
        title: 'Nossas Pizzas | Administração | Pizza DEV',
    }
    res.render('admin/index', dadosTemplate)
})

module.exports = admin;
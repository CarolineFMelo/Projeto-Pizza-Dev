const express = require('express')
const expressHandlebars = require('express-handlebars');
const mysql = require('mysql2/promise')

const app = express()

app.engine('handlebars', expressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/assets', express.static(__dirname + '/assets'))

// Conexão com o banco de dados
async function getConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'senhamysql',
        database: 'pizzadev',
    })
    return connection
}

async function query(sql = '', values = []) {
    const conn = await getConnection()
    const result = await conn.query(sql, values)
    conn.end()

    return result[0]
}

app.get('/connection', async (req, res) => {
    const connection = await getConnection()
    console.log(connection);
    res.send('Conexão realizada com sucesso!')
  });

// Index
app.get('/', (req, res) => {
    const dadosTemplate = {
        title: 'Pizza DEV',
    }
    res.render('index', dadosTemplate)
})

app.get('/index', (req, res) => {
    const dadosTemplate = {
        title: 'Nossas Pizzas | Administração | Pizza DEV',
    }
    res.render('admin/index', dadosTemplate)
})

// Login
app.get('/login', (req, res) => {
    const dadosTemplate = {
        title: 'Login | Administração | Pizza DEV',
    }
    res.render('admin/login', dadosTemplate)
})

// Mensagens
app.get('/mensagens', (req, res) => {
    const dadosTemplate = {
        title: 'Mensagens | Administração | Pizza DEV',
    }
    res.render('admin/mensagens', dadosTemplate)
})

// Pizzas
app.get('/cadastrar/pizza', (req, res) => {
    const dadosTemplate = {
        title: 'Cadastrar Pizza | Administração | Pizza DEV',
    }
    res.render('admin/cadastrar-pizza', dadosTemplate)
})

app.get('/editar/pizza', (req, res) => {
    const dadosTemplate = {
        title: 'Editar Pizza | Administração | Pizza DEV',
    }
    res.render('admin/editar-pizza', dadosTemplate)
})

// Usuarios
app.get('/cadastrar/usuario', (req, res) => {
    const dadosTemplate = {
        title: 'Cadastrar Usuário | Administração | Pizza DEV',
    }
    res.render('admin/cadastrar-usuario', dadosTemplate)
})

app.get('/editar/usuario', (req, res) => {
    const dadosTemplate = {
        title: 'Editar Usuário | Administração | Pizza DEV',
    }
    res.render('admin/editar-usuario', dadosTemplate)
})

app.get('/usuarios', (req, res) => {
    const dadosTemplate = {
        title: 'Usuários | Administração | Pizza DEV',
    }
    res.render('admin/usuarios', dadosTemplate)
})

app.listen(3000, () => {
    console.log('Server online')
})
const express = require('express');
const expressHandlebars = require('express-handlebars');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const router = require('./routers');

const app = express();
const PORT = 3000;

app.engine('handlebars', expressHandlebars.engine())
  .set('view engine', 'handlebars')
  .set('views', __dirname + '/views')
  .use(express.urlencoded({ extended: true }))
  .use('/assets', express.static(__dirname + '/assets'))
  .use(cookieParser())
  .use(sessions({
    secret: 'thisIsMySecretKey',
    saveUninitialized: true,
    resave: false,
    name: 'Cookie de Sessao',
    cookie: { maxAge: 1000 * 60 * 3 } // 3 minutos
  }))
  .use('/', router);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

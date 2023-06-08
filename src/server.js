const express = require('express');
const expressHandlebars = require('express-handlebars');
const router = require('./routers');

const app = express();
const PORT = 3000;

app.engine('handlebars', expressHandlebars.engine())
  .set('view engine', 'handlebars')
  .set('views', __dirname + '/views')
  .use('/assets', express.static(__dirname + '/assets'))
  .use('/', router);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

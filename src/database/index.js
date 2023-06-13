const mysql = require('mysql2/promise');

// Conexão com o banco de dados
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dev@1234',
    database: 'pizzadev',
  });
  return connection;
}

async function query(sql = '', values = []) {
  const conn = await getConnection();
  const result = await conn.query(sql, values);
  conn.end();
  return result[0];
}

module.exports = {
  getConnection: getConnection,
  query: query
};
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
  try {
    const result = await conn.query(sql, values);
    return result[0];
  } catch (error) {
    return {error: true, message: error};
  } finally {
    conn.end();
  }
}

module.exports = {
  getConnection: getConnection,
  query: query
};
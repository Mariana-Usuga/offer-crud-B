const mysql = require('promise-mysql');
const config = require('./index');


const connection = mysql.createConnection({
  port: config.db_port,
    host: config.db_url,
    database: config.database,
    user: config.user,
    password: config.password,
    multipleStatements: true
})

const getConnection = () => {
  return connection;
}

module.exports = { getConnection };


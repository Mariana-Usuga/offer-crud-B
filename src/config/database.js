const mysql = require('promise-mysql');
const config = require('./index');


const connection = mysql.createConnection({
  port: config.db_port,
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
})

const getConnection = () => {
  return connection;
}

module.exports = { getConnection} ;


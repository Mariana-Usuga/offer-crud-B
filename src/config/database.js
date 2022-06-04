const mysql = require('promise-mysql');
const config = require('./index');

console.log('this is db_uurrlll',  config.db_url)

const connection = mysql.createConnection({
  port: config.db_port,
    host: config.db_url,
    database: config.database,
    user: config.user,
    password: config.password,
})

const getConnection = () => {
  return connection;
}

module.exports = { getConnection} ;


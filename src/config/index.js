require('dotenv').config();
console.log('host', process.env.HOST)

const config = {
  port: process.env.PORT,
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
  db_port: process.env.DB_PORT || "",
  db_url: process.env.DB_URL || ""
};

module.exports = config ;

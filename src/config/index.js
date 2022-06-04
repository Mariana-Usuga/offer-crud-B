require('dotenv').config();
console.log('host', process.env.HOST)
const config = {
  // URI: process.env.DB_URI,
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || ""
};

module.exports = config ;

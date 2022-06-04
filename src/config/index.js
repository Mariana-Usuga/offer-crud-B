require('dotenv').config();
console.log('host', process.env.HOST)
const config = {
  // URI: process.env.DB_URI,
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || ""
  // PORT: process.env.PORT || 8080,
  // secrets: {
  //   session: process.env.SECRET_KEY || 'S0p0rt31',
  // },
  // expiresIn: '7d',
  // userRoles: ['user', 'admin'],
};

module.exports = config ;

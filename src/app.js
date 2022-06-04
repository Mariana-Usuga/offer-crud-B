const express = require('express');

const expressConfig = require('./config/express');
// const connectDB = require('./config/database');
const routes = require('./routes');
const { config } = require('./config/index');

const app = express();

expressConfig(app);

// const PORT = process.env.PORT | config.PORT;

// Start server
app.listen(8080, () => {
  // connect to database
//   connectDB();

  // Routes
  routes(app);

  console.log(`Server running 🤖 at http://localhost:${8080}/`);
});

module.exports = app;

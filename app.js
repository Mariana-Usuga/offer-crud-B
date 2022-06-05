const express = require('express');

const expressConfig = require('./src/config/express');
// const connectDB = require('./config/database');
const routes = require('./routes');
const { config } = require('./src/config/index');

const app = express();

expressConfig(app);

const PORT = process.env.PORT || 8080;
// Start server
app.listen(PORT, () => {

  // Routes
  routes(app);

  console.log(`Server running 🤖 at http://localhost:${PORT}/`);
});

module.exports = app;

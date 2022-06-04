const offer = require('./src/api/offer');
const prices = require('./src/api/prices');
const characteristic = require('./src/api/characteristic')

function routes(app) {
   app.use('/api/offer', offer);
   app.use('/api/price', prices);
   app.use('/api/characteristic', characteristic);
}

module.exports = routes;

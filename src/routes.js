const offer = require('./api/offer');
const prices = require('./api/prices');
const characteristic = require('./api/characteristic')

function routes(app) {
   app.use('/api/offer', offer);
   app.use('/api/price', prices);
   app.use('/api/characteristic', characteristic);
}

module.exports = routes;

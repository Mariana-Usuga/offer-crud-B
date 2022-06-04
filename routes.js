const offer = require('./src/api/offer');
const prices = require('./src/api/prices');
const characteristic = require('./src/api/characteristic')
const prueba = require('./src/api/prueba')

function routes(app) {
   app.use('/api/offer', offer);
   app.use('/', (req, res) => {
      res.send('Hello World!')
    })
   app.use('/api/price', prices);
   app.use('/api/characteristic', characteristic);
}

module.exports = routes;

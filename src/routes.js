const offer = require('./api/offer');

function routes(app) {
   app.use('/api/offer', offer);
}

module.exports = routes;
// const { Router } = require('express');

// const router = Router();

// router.get('/', (req, res) => {
//   res.send('nosee')
// })

// module.exports = router
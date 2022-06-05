const { Router } = require('express');
const { getAllPricesHandler, 
  getPriceHandler, 
  createPriceHandler, 
  deletePriceHandler, 
  updatePriceHandler,
  getPriceByOfferIdHandler
} = require('./prices.controller')
const router = Router();

router.get('/', getAllPricesHandler);
router.get('/:id', getPriceHandler);
router.post('/', createPriceHandler);
router.delete('/:id', deletePriceHandler);
router.put('/:id', updatePriceHandler)
router.get('/report/:id', getPriceByOfferIdHandler);

module.exports = router;
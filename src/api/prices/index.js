const { Router } = require('express');
const { getAllPricesHandler, 
  getPriceHandler, 
  createPriceHandler, 
  deletePriceHandler, 
  getPriceByOfferIdHandler
  // updatePriceHandler 
} = require('./prices.controller')
const router = Router();

router.get('/', getAllPricesHandler);
router.get('/:id', getPriceHandler);
router.post('/', createPriceHandler);
// router.put('/:id', updatePriceHandler);
router.delete('/:id', deletePriceHandler);
// router.get('report/:id', getPriceByOfferIdHandler);
router.get('/report/:id', getPriceByOfferIdHandler);

module.exports = router;
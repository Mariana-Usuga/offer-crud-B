const { Router } = require('express');
const { getAllPricesHandler, getPriceHandler, createPriceHandler, deletePriceHandler, updatePriceHandler } = require('./offer.controller')
const router = Router();

router.get('/', getAllPricesHandler);
router.get('/:id', getPriceHandler);
router.post('/', createPriceHandler);
router.put('/:id', updatePriceHandler);
router.delete('/:id', deletePriceHandler);

module.exports = router;
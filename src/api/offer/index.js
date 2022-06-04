const { Router } = require('express');
const { getAllOffersHandler, getOfferHandler, createOfferHandler, deleteOfferHandler, 
  // updateOfferHandler 
} = require('./offer.controller')
const router = Router();

router.get('/', getAllOffersHandler);
router.get('/:id', getOfferHandler);
router.post('/', createOfferHandler);
// router.put('/:id', updateOfferHandler);
router.delete('/:id', deleteOfferHandler);

module.exports = router;
const { Router } = require('express');
const { getAllCharacteristicsHandler,
     getCharacteristicHandler, 
     createCharacteristicHandler, 
     deleteCharacteristicHandler, 
     } = require('./characteristic.controller')
const router = Router();

router.get('/', getAllCharacteristicsHandler);
router.get('/:id', getCharacteristicHandler);
router.post('/', createCharacteristicHandler);
router.delete('/:id', deleteCharacteristicHandler);

module.exports = router;
const { Router } = require('express');
const { getAllCharacteristicsHandler,
     getCharacteristicHandler, 
     createCharacteristicHandler, 
     deleteCharacteristicHandler, 
     updateCharacteristicHandler } = require('./characteristic.controller')
const router = Router();

router.get('/', getAllCharacteristicsHandler);
router.get('/:id', getCharacteristicHandler);
router.post('/', createCharacteristicHandler);
router.put('/:id', updateCharacteristicHandler);
router.delete('/:id', deleteCharacteristicHandler);

module.exports = router;
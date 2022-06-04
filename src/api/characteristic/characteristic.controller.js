const { getConnection } = require('../../config/database')

const getAllCharacteristicsHandler = async (req, res) => {
  try {
    const connection = await getConnection();
    const offers = await connection.query('SELECT id, name FROM characteristics')
    res.json(offers)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getCharacteristicHandler = async (req, res) => {
  console.log('entra en handler')
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const offer = await connection.query('SELECT id, name FROM characteristics WHERE id = ?', id)
    res.json(offer)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const createCharacteristicHandler = async (req, res) => {
  try {
    const { name, description, offer_id } = req.body;
    if (!name) {
      return res.status(422).json({ response: 'Missing values in the body' });
    }

    const offer = { name,  description, offer_id }
    const connection = await getConnection();
    const newOffer = await connection.query('INSERT INTO characteristics SET ?', offer) 

    return res.status(201).json(newOffer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// const updateCharacteristicHandler = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name } = req.body;
//     if (!name) {
//       return res.status(422).json({ response: 'Missing values in the body' });
//     }

//     const offer = { name }
//     const connection = await getConnection();
//     const updateOffer = await connection.query('UPDATE characteristics SET ? WHERE id = ?', [offer, id])
//     res.json(updateOffer)
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }

const deleteCharacteristicHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const offer = await connection.query('DELETE FROM characteristics WHERE id = ?', id)
    res.json(offer)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCharacteristicsHandler,
  createCharacteristicHandler,
  getCharacteristicHandler,
  deleteCharacteristicHandler,
  // updateCharacteristicHandler
};
  
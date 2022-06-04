const { getConnection } = require('../../config/database')

const getAllPricesHandler = async (req, res) => {
  try {
    const connection = await getConnection();
    const offers = await connection.query('SELECT id, name FROM offer')
    res.json(offers)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getPriceHandler = async (req, res) => {
  console.log('entra en handler')
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const offer = await connection.query('SELECT id, name FROM offer WHERE id = ?', id)
    res.json(offer)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const createPriceHandler = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(422).json({ response: 'Missing values in the body' });
    }

    const offer = { name }
    const connection = await getConnection();
    const newOffer = await connection.query('INSERT INTO offer SET ?', offer) 

    return res.status(201).json(newOffer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const updatePriceHandler = async (req, res) => {
  console.log('entra en handler')
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res.status(422).json({ response: 'Missing values in the body' });
    }

    const offer = { name }
    const connection = await getConnection();
    const updateOffer = await connection.query('UPDATE offer SET ? WHERE id = ?', [offer, id])
    res.json(updateOffer)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const deletePriceHandler = async (req, res) => {
  console.log('entra en handler')
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const offer = await connection.query('DELETE FROM offer WHERE id = ?', id)
    res.json(offer)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllPricesHandler,
  createPriceHandler,
  getPriceHandler,
  deletePriceHandler,
  updatePriceHandler
};
  
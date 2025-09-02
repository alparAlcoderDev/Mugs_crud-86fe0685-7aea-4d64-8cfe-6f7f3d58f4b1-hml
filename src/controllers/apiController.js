const express = require('express');
const router = express.Router();
const authService = require('../services/authService');
const siebelService = require('../services/siebelService');
const dynamoService = require('../services/dynamoService');

router.use(authService.verifyToken);

router.get('/data', async (req, res) => {
  try {
    const siebelData = await siebelService.getData();
    await dynamoService.saveData(siebelData);
    res.status(200).json({ message: 'Data successfully fetched and saved' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
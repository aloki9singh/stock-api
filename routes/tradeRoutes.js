const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

router.get('/', tradeController.getAllTrades);
router.get('/:id', tradeController.getTradeById);
router.post('/', tradeController.createTrade);
router.delete('/:id', tradeController.deleteTrade);
router.patch('/:id', tradeController.updateTradePrice);

module.exports = router;

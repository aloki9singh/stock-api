const express = require('express');
const TradeController = require('../controllers/tradeController');

const router = express.Router();

router.get('/', TradeController.getAllTrades);
router.get('/:id', TradeController.getTradeById);
router.post('/', TradeController.createTrade);
router.patch('/:id', TradeController.updateTrade);
router.delete('/:id', TradeController.deleteTrade);

module.exports = router;

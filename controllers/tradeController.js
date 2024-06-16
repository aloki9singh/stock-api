const Trade = require('../models/tradeModel');

module.exports = {
    getAllTrades: (req, res) => {
        const trades = Trade.getAllTrades();
        res.status(200).json({ trades });
    },
    getTradeById: (req, res) => {
        const id = parseInt(req.params.id);
        const trade = Trade.getTradeById(id);
        if (trade) {
            res.status(200).json(trade);
        } else {
            res.status(404).send('ID not found');
        }
    },
    createTrade: (req, res) => {
        const tradeData = req.body;
        const newTrade = Trade.addTrade(tradeData);
        res.status(201).json(newTrade);
    },
    deleteTrade: (req, res) => {
        const id = parseInt(req.params.id);
        const success = Trade.deleteTrade(id);
        if (success) {
            res.status(200).send('Trade deleted');
        } else {
            res.status(404).send('ID not found');
        }
    },
    updateTradePrice: (req, res) => {
        const id = parseInt(req.params.id);
        const { price } = req.body;
        const updatedTrade = Trade.updateTradePrice(id, price);
        if (updatedTrade) {
            res.status(200).json(updatedTrade);
        } else {
            res.status(404).send('ID not found');
        }
    }
};

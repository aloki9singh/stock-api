const TradeModel = require('../models/tradeModel');

class TradeController {
    static async getAllTrades(req, res) {
        try {
            const trades = await TradeModel.find().sort({ id: 1 });
            res.status(200).json({ trades });
        } catch (err) {
            res.status(500).send({ Error: err.message });
        }
    }

    static async getTradeById(req, res) {
        try {
            const trade = await TradeModel.findById(req.params.id);
            if (trade) {
                res.status(200).json(trade);
            } else {
                res.status(404).send('ID not found');
            }
        } catch (err) {
            res.status(500).send({ Error: err.message });
        }
    }

    static async createTrade(req, res) {
        try {
            const trade = new TradeModel(req.body);
            await trade.save();
            res.status(201).json(trade);
        } catch (err) {
            res.status(500).send({ Error: err.message });
        }
    }

    static async updateTrade(req, res) {
        try {
            const updatedTrade = await TradeModel.findByIdAndUpdate(req.params.id, { price: req.body.price }, { new: true });
            if (updatedTrade) {
                res.status(200).json(updatedTrade);
            } else {
                res.status(404).send('ID not found');
            }
        } catch (err) {
            res.status(500).send({ Error: err.message });
        }
    }

    static async deleteTrade(req, res) {
        try {
            const deletedTrade = await TradeModel.findByIdAndDelete(req.params.id);
            if (deletedTrade) {
                res.status(200).send('Trade deleted successfully');
            } else {
                res.status(404).send('ID not found');
            }
        } catch (err) {
            res.status(500).send({ Error: err.message });
        }
    }
}

module.exports = TradeController;

const { Schema, model } = require('mongoose');

const tradeSchema = new Schema({
    type: { type: String, required: true },
    user_id: { type: Number, required: true },
    symbol: { type: String, required: true },
    shares: { type: Number, required: true, min: 10, max: 30 },
    price: { type: Number, required: true },
}, { versionKey: false, timestamps: true });

const TradeModel = model('trade', tradeSchema);

module.exports = TradeModel;

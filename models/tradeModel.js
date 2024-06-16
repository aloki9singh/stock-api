const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/trades.json');

function readTradesFromFile() {
    const tradesData = fs.readFileSync(filePath);
    return JSON.parse(tradesData);
}

function writeTradesToFile(trades) {
    fs.writeFileSync(filePath, JSON.stringify(trades, null, 2));
}

module.exports = {
    getAllTrades: () => {
        return readTradesFromFile();
    },
    getTradeById: (id) => {
        const trades = readTradesFromFile();
        return trades.find(trade => trade.id === id);
    },
    addTrade: (trade) => {
        const trades = readTradesFromFile();
        const newId = trades.length ? trades[trades.length - 1].id + 1 : 1;
        trade.id = newId;
        trades.push(trade);
        writeTradesToFile(trades);
        return trade;
    },
    deleteTrade: (id) => {
        let trades = readTradesFromFile();
        const initialLength = trades.length;
        trades = trades.filter(trade => trade.id !== id);
        writeTradesToFile(trades);
        return trades.length !== initialLength;
    },
    updateTradePrice: (id, price) => {
        const trades = readTradesFromFile();
        const trade = trades.find(trade => trade.id === id);
        if (trade) {
            trade.price = price;
            writeTradesToFile(trades);
            return trade;
        }
        return null;
    }
};

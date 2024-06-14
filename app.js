const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { connection } = require('./configs/dbConfig');
const tradeRoutes = require('./routes/tradeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

// Routes
app.use('/trades', tradeRoutes);

// Landing/default route;
app.get("/", (req, res) => {
    res.send("Welcome to Stock API😊!!!");
});

// Start server
app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (e) {
        console.log({ message: e.message });
    }
    console.log(`Server is running at port ${PORT}`);
});

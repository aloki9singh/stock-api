const express = require('express');
const app = express();
const tradeRoutes = require('./routes/tradeRoutes');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Middleware
app.use(express.json());
app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// Routes
app.use('/trades', tradeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

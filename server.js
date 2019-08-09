const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('combined'));
app.get('/test', (req, res, next) => {
    console.log('Start serving test route');
    res.json({
        ok: true,
        text: 'Server is working'
    });
});
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server started serving requests');
});
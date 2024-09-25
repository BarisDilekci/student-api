const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');

app.use(express.json());


app.use('/', studentRoutes);

app.get('/api/products', (req, res) => {
    res.send(JSON.stringify([1, 2, 3]));
});

module.exports = app; 

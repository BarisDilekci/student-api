const express = require('express');
const app = express();



app.get('/', function(req,res) {
    res.send('hello world');
});

app.get('/api/urunler', function(req,res) {
    res.send(JSON.stringify([1,2,3]));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
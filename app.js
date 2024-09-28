const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');
const bodyParser = require('body-parser')
const connectDB = require('./db');

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/students', studentRoutes); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');
const connectDB = require('./db');

connectDB();

app.use(express.json());

app.use('/students', studentRoutes); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

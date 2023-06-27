const DB = require('./config/connection');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

DB.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Application live at http://localhost:${PORT}.`)
    });
});
const express = require('express');
const api = express.Router();

api.post('/', (req, res) => {
    res.send('api sayfası');
});

module.exports = api;
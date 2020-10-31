const express = require('express');
const home = express.Router();

home.get('/', (req, res) => {
    res.send('home page');
});

home.get('/register/', (req, res) => {
    res.send(`
        <form action="/api/register" method="POST">
            <input type="text" name="name"></input>
            <input type="text" name="username"></input>
            <input type="password" name="password"></input>
            <button type="submit">register</button>
        </form>
    `);
});

module.exports = home;
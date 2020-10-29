const express = require('express');
const bcrypt = require('bcrypt');
const home = express.Router();
const userModel = require('../models/user');

home.get('/', (req, res) => {
    res.send('home page');
});

home.get('/register/', (req, res) => {
    res.send(`
        <form action="/register" method="POST">
            <input type="text" name="name"></input>
            <input type="text" name="username"></input>
            <input type="password" name="password"></input>
            <button type="submit">register</button>
        </form>
    `);
});

home.post('/register/', async (req, res) => {
    hashedPassword = await bcrypt.hash(req.body.password, 10);

    userModel.findOne({
        username: req.body.username
    }, (err, doc) => {
        if (err) throw err;
        if (doc) {
            res.send('user already exists');
        }
        else {
            new userModel({
                name: req.body.name,
                username: req.body.username,
                password: hashedPassword
            }).save({}, (err, product) => {
                if (err) throw err;
                res.send(product);
            });
        }
    });
});

module.exports = home;
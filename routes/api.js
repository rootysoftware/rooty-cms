const express = require('express');
const api = express.Router();

const bcrypt = require('bcrypt');
const userModel = require('../models/user');

api.post('/', (req, res) => {
    res.send('api page');
});

api.post('/register/', async (req, res) => {
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

module.exports = api;
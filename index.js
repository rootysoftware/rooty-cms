const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const mongoConnectionUrl = process.env.MONGO_URL;
mongoose.connect(mongoConnectionUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const port = process.env.PORT || 3000;

//Route definitions
const homeRoute = require('./routes/home');
const adminRoute = require('./routes/admin');
const apiRoute = require('./routes/api');

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));

//Logging requests
app.use(morgan('dev'));

//Routes
app.use('/', homeRoute);

app.use('/admin/', adminRoute);

app.use('/api/', apiRoute);

//404 Page
app.use((req, res) => {
    res.send('404');
});

app.listen(port, () => {
    console.log(chalk.green('ROOTY-CMS Port: ') + chalk.blue(port));
});
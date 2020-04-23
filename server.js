﻿const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
// if we dont have a port then use 8080
const port = process.env.PORT || 8080;

const app = express();
const dev = app.get('env');
if (!dev) {
    app.use(compression())
    app.use(morgan('common'))
}

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))
// create a GET route
app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, 'build', 'index.html')); });
app.listen(port, () => console.log(`Start listening at http://localhost:${port}`))
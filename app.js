var express = require('express');
var consign = require('consign');

var app = express();

app.use(express.static('./public'));

consign({cwd: 'app'})
    .include('routes')
    .then('controllers')
    .into(app);

module.exports = app;
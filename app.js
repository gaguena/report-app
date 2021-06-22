var express = require('express');
var consign = require('consign');

var app = express();

consign({ cwd: './app' })
    .include('config')
    .then('routers')
    .then('controllers')
    .into(app);

module.exports = app;
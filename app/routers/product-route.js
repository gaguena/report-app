var express = require('express');

module.exports = app => {
    var router = express.Router();
    router.get('/', async (req, resp) => {
        resp.json({elemento: 'Teste teste'});
    });

    app.use('/products', router);

}
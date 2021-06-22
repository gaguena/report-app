module.exports = app => {
    let express = require('express');
    app.use(express.static('./public'));

    if (!process.env.ENVIRONMENT)
        require("dotenv").config();

    app.listen(process.env.PORT, () => {
        console.log(`Started APP in port: ${process.env.PORT}`)
    });

}
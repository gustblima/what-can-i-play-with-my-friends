const express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://gustblima.github.io');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const routes =  require('./routes')
routes(app)
app.listen(port)
console.log('Listening on: ' + port);

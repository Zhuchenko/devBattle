var run = function() {
    var express = require('express')
        , app = express()
        , port = process.env.PORT || 3000
        , bodyParser = require('body-parser')
        , handler = require('./handler')
        , rate = require('./rate');

    app.use(bodyParser.json());

    app.post('/api/convert', function (request, response) {
        rate.get()
            .then(function (current_rate) {
                let params = {
                    "from": request.body.from,
                    "to": request.body.to,
                    "value": request.body.value,
                    "valute": current_rate.Valute
                };
                let result = handler.compute(params);
                response.send(result);
            });
    });

    app.get('/api/get-currency', function (request, response) {
        rate.get()
            .then(function (current_rate) {
                let result = handler.create(current_rate.Valute);
                response.send(result);
            });
    });

    app.listen(port)
};

module.exports.run = run;
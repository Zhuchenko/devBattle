var get = function(){
    var fetch = require('isomorphic-fetch');
    return fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(function (response) {
            return response.json();
        });
};

module.exports.get = get;
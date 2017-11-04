function compute(input){
    var Valute = require('./valute')
        , calc = require('./calc');

    if(input.from == input.to){
        let answer = {
            "status": "success",
            "value": input.value
        }
        return answer;
    }

    from_CharCode = input.from.toUpperCase();
    if(!input.valute.hasOwnProperty(from_CharCode) && (from_CharCode !== "RUB")) {
        let answer = {
            "status" : "error",
            "description": "Wrong value of 'from'"
        }
        return answer;
    }

    to_CharCode = input.to.toUpperCase();
    if(!input.valute.hasOwnProperty(to_CharCode) && (to_CharCode !== "RUB")) {
        let answer = {
            "status" : "error",
            "description": "Wrong value of 'to'"
        }
        return answer;
    }

    if(!isFinite(input.value) || input.value<0) {
        let answer = {
            "status" : "error",
            "description": "Wrong value of 'value'"
        }
        return answer;
    }

    if(from_CharCode == "RUB")
    {
        let to = new Valute(input.valute[to_CharCode].Nominal, input.valute[to_CharCode].Value);
        let result = calc.fromRUB_toSMTH(to, input.value);

        let answer = {
            "status": "success",
            "value": result
        };
        return answer;
    }

    if(to_CharCode == "RUB")
    {
        let from = new Valute(input.valute[from_CharCode].Nominal, input.valute[from_CharCode].Value);
        let result = calc.fromSMTH_toRUB(from, input.value);

        let answer = {
            "status": "success",
            "value": result
        };
        return answer;
    }


    let from = new Valute(input.valute[from_CharCode].Nominal, input.valute[from_CharCode].Value);
    let to = new Valute(input.valute[to_CharCode].Nominal, input.valute[to_CharCode].Value);
    let result = calc.fromSMTH_toSMTH(from, to, input.value);

    let answer = {
        "status": "success",
        "value": result
    };
    return answer;
}

function create(valute){
    var answer = new Array();
    let i = 0;
    for (let code in valute)
    {
        answer[i] = {
            "name": code,
            "title": valute[code].Name
        };
        i++;
    }
    answer[i] = {
        "name": "RUB",
        "title": "Рубль"
    };
    return answer;
}

module.exports.compute = compute;
module.exports.create = create;
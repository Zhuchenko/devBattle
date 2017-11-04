function fromSMTH_toSMTH (from, to, value) {
    let diffInValue = from.value / to.value;
    let diffInNominal = to.nominal / from.nominal;
    let result = value * diffInValue * diffInNominal;

    return result;
};

function fromRUB_toSMTH  (to, value) {
    let result_withOutNominal = value / to.value;
    let result = result_withOutNominal * to.nominal;

    return result;
};

function fromSMTH_toRUB  (from, value) {
    let value_from_withNominal = value / from.nominal;
    let result = value_from_withNominal * from.value;

    return result;
};

module.exports.fromSMTH_toSMTH = fromSMTH_toSMTH;
module.exports.fromRUB_toSMTH = fromRUB_toSMTH;
module.exports.fromSMTH_toRUB = fromSMTH_toRUB;
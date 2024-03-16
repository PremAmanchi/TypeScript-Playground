"use strict";
let employee = {
    id: 1,
    personName: "Prem Kuamr",
    retire: (date) => {
        console.log(date);
    }
};
function kgsToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgsToLbs(10);
kgsToLbs('10');
//# sourceMappingURL=index.js.map
"use strict";
let age = 24;
let personName = "Prem Kumar";
let is_student = true;
let age2 = 25;
let name2 = "Akash Reddy";
let is_employee = true;
console.log(name2);
let level;
level = 1;
level = 'L1';
function render(document) {
    console.log(document);
}
let arr1 = [1, 2, 3];
let arr2 = [];
arr2[0] = 1;
arr2[1] = "prem";
let user = [1, 'Prem'];
user.push(1);
console.log(user);
let mySize = 6;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.5;
    return income * 0.2;
}
console.log(calculateTax(10000));
console.log(calculateTax(10000, 10));
//# sourceMappingURL=index.js.map
"use strict";
function printMessage(value) {
    console.log(value);
}
printMessage(100);
class Person {
    constructor(name) {
        this.name = name;
        console.log("created Person ", name);
    }
}
function printPersonOnly(person) {
    console.log("print from generic ", person === null || person === void 0 ? void 0 : person.name);
}
printPersonOnly(new Person("Prem Kumar Amanchi"));
//# sourceMappingURL=constraints.js.map
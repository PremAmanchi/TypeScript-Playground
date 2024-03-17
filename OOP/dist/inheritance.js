"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Teacher extends Person {
    constructor(firstName, lastName, Instructor) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.Instructor = Instructor;
        this.Instructor = Instructor;
    }
    // turn on : "noImplicitOverride": true,  in tsconfig
    get fullName() {
        return this.Instructor + " " + super.fullName;
    }
}
let person = new Teacher("Prem Kumar", "Amanchi", "Java Instructor");
console.log(person.fullName);
//# sourceMappingURL=inheritance.js.map
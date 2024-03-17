"use strict";
class Person2 {
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
class Student2 extends Person2 {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.grade = grade;
    }
    get fullName() {
        return this.grade + " Sudent : " + super.fullName;
    }
}
class Teacher2 extends Person2 {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
        this.course = course;
    }
    get fullName() {
        return this.course + " Professor : " + super.fullName;
    }
}
let people = [
    new Student2("Prem Kumar", "Amanchi", "Masters"),
    new Teacher2("Hannah", "Kerner", "Data Mining")
];
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames(people);
//# sourceMappingURL=polymorphism.js.map
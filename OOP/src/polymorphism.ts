class Person2{
    constructor(
        public firstName: string,
        public lastName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Student2 extends Person2{
    constructor(
        public override firstName: string,
        public override lastName: string,
        public grade: string
    ) {
        super(firstName, lastName);
        this.grade = grade;
    }

    override get fullName() {
        return this.grade + " Sudent : " +  super.fullName;
    }
}

class Teacher2 extends Person2{
    constructor(
        public override firstName: string,
        public override lastName: string,
        public course: string
    ) {
        super(firstName, lastName);
        this.course = course;
    }

    override get fullName() {
        return this.course + " Professor : " +  super.fullName;
    }
}


let people: Person2[] = [
    new Student2("Prem Kumar", "Amanchi", "Masters"),
    new Teacher2("Hannah", "Kerner", "Data Mining")
];

function printNames(people: Person2[]) {
    for (let person of people)
        console.log(person.fullName)
}

printNames(people);
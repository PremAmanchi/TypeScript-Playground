class Person{
    constructor(
        public firstName: string,
        public lastName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Teacher extends Person{
    constructor(
        public override firstName: string,
        public override lastName: string,
        public Instructor: string
    ) {
        super(firstName, lastName);
        this.Instructor = Instructor;
    }

    // turn on : "noImplicitOverride": true,  in tsconfig
    override get fullName(): string {
        return this.Instructor+ " " + super.fullName;  
    }
}

let person:Person = new Teacher("Prem Kumar", "Amanchi", "Java Instructor");

console.log(person.fullName);
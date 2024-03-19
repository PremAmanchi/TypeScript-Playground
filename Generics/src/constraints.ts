function printMessage <T extends string | number>(value: T): void {
    console.log(value);
}

// printMessage(true);
printMessage(100);


 
class Person{
    constructor(public name: string) {
        console.log("created Person :  ",name);
    }
}



function printPersonOnly<T extends Person | null>(person: T): void {
    console.log("print from generic : ",person?.name);
}

printPersonOnly(new Person("Prem Kumar Amanchi"));
let age: number = 24;
let personName: string = "Prem Kumar";
let is_student: boolean = true;

// no annotations requrired when initializedf
let age2 = 25;
let name2 = "Akash Reddy";
let is_employee = true;

console.log(name2);


// new type : any 
// BUT, WHAT'S THE USE, YOU CAN PROCEED 
// WITH JS ONLY IN SUCH CASE
let level;
level = 1;
level = 'L1'

function render(document : any) {
    console.log(document)
}


// You have the option to disable the requirement 
// for explicit type annotations in methods by 
// configuring tsconfig.json.
// "noImplicitAny": false


//----------------ARRAYS------------------
// need to mention array type explicitly 
let arr1: number[] = [1, 2, 3];

// otherwise its any
let arr2 = [];
arr2[0] = 1;
arr2[1] = "prem";


//---------------TUPLES------------------ 
let user: [number, string] = [1, 'Prem'];
// NEVER DO THIS push method -----compliler does not complain 
// restrict tuples to 2 values at max or its messy
user.push(1);
console.log(user)


//------------------ENUMS------------------
// use const will have optimize js code
const enum Size {
    Small = 5,
    Medium,
    Large
}
let mySize: Size = Size.Medium;
console.log(mySize);


//------------------Functions------------------
// annotate return type  : void, number, ....
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 0.5;
    return income * 0.2;
}

// turn on in tsconfig.json
//   "noUnusedParameters": true,  
//   "noImplicitReturns": true
//   "noUnusedLocals": true, 

console.log(calculateTax(10_000));
console.log(calculateTax(10_000, 10));


//------------------OBJECTS------------------
// ? is optional properity
let employee: {
    readonly id: number,
    personName: string,
    retire : (date: Date) => void
} = {
    id: 1,
        personName: '',
        retire: (date: Date) => {
            console.log(date);
        }
};




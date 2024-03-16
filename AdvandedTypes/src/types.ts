type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
};

// ------------------LITERAL TYPES ------------------
let quantity: 50 | 100 = 50;

// or 

type Quantity = 50 | 100;
let quantity2: Quantity = 100;
type Metric = 'cm' | 'inch' 


//------------------NULLABLES------------------
function greet(name: string | null) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log('Hola!');
}
greet(null); 

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined{
    return id == 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log(customer.birthday);
// both above code and below give same
// chaining using ?.
// optional property access
console.log(customer?.birthday?.getFullYear);

// optional element access operator
// customers?.[0]
// optional call 
let log: any = null;
log?.('a');


//------------------Nullish Coalescing------------------
// falsy values : {0 , false, null, undefined}

function getSpeed(num: any): number {
    // skips with falsy values
    // return num || 30;
    // skips with null or undefined
    return num ?? 30;
}


// ------------------UNKOWN------------------
function render(document: unknown) {
    // Narrowing
    // for primitives
    if (typeof document === 'string') {
        document.toLowerCase();
    }
    // for objects
    if (document instanceof WordDocument) {
        document.print();
    }
}

//------------------NEVER------------------
// use it to identify unreachable code 
// make changes in the config file
//  "allowUnreachableCode": false

function processEvents(): never {

    while (true) {
        // Read a message from a queue
        
    }
    console.log("hello world");
}

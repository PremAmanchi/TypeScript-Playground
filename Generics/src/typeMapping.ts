interface Product {
    name: string;
    price: number;
}


// interface readOnlyProduct{
//     readonly name: string;
//     readonly price: number;
// }


// type ReadonlyProduct = {
//     // rather hard coding the properties
//     // add dynamically 
//     readonly [K in keyof Product] : Product[K];
// }

// let product: ReadonlyProduct = {
//     name: 'a';
//     price: 1;
// }


type ReadonlyType<T> = {
    // rather hard coding the properties
    // add dynamically 
    readonly [K in keyof T] : T[K];
}

let newProduct: ReadonlyType<Product> = {
    name: 'a',
    price: 1
};







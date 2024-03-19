class keyValuePair<K, V>{
    constructor(public key: K, public value: V){}
}

// can mention explicitly the type 
let pair1 = new keyValuePair<String, String>('1', 'a');
// or type will be inferred from the input params
let pair2 = new keyValuePair(1, 2); 



// function wrapInArray<T>(value: T) {
//     return [value];
// }

// let numbers = wrapInArray(1); 

class ArrayUtils{
    static wrapInArray<T>(value: T) {
        return [value];
    }
}
 
console.log(ArrayUtils.wrapInArray(1));

// class StringUtils{
//     static toUpperCase<T>(value: T) {
//         if (typeof value !== String)
//             console.log("only strings as input....");
//         else {
//             console.log(value.toUpperCase());
//         }

//     }
// }





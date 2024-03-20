// get method decorator
// you will have seperate method name get in the descriptor 
// unlike the regular methods where you call descriptor.value

function Capitalize(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.get;
    descriptor.get = function(){
        console.log("Before...");
        const result = original?.call(this);
        return (typeof result === 'string') ?
            result.toUpperCase() : result;
        console.log("After....");
    }
}


class Robot{
    constructor(private  _message: string) {
    }
    @Capitalize
    get message() {
        return this._message;
    }
}

let robot = new Robot("hello prem kumar ")
console.log(robot.message);
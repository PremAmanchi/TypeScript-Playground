function Component(value: number) {
    return (constructor: Function) => {
        console.log("inside the decorator with value : ", value);
        constructor.prototype.var1 = 1;
        constructor.prototype.insertInDOM = () => {
            console.log("inside the method....")
        }
    }
}


@Component(100)
class ProfileComponent{
    constructor(){}
}

const person = new ProfileComponent();
console.log(person.constructor.prototype.var1);

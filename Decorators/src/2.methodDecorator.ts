function Log(target: any,
    methodName: string,
    descriptor: PropertyDescriptor) {
    const original: Function = descriptor.value;
    descriptor.value = function (...args : any) {
        console.log('Before Original Method');
        original.call(this, ...args );
        console.log('After Original Method');
    }
}

class Person{
    @Log
    say(message: string) {
        console.log('Person says : ' + message);
    }
}


let p1 = new Person();
console.log(p1.say("hi Prem Kumar Amanchi!!!"));
  
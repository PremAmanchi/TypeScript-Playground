// 0 - 100% abstraction using abstract class;
abstract class Shape1{
    constructor(public color: string) { }
    abstract render(): void;
}


class Circle1 extends Shape1{
    override render(): void {
        console.log("rendering....");
    }
}

// 100% abstraction using interface;
interface Shape2{
    color: string;
    render(): void;
}

class Circle2 implements Shape2{
    // color: string;
    constructor(public color: string) {
        this.color = color;
    }
    render(): void {
        throw new Error("Method not implemented.");
    }

}



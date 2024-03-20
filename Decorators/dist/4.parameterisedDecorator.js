"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(value) {
    return (constructor) => {
        console.log("inside the decorator with value : ", value);
        constructor.prototype.var1 = 1;
        constructor.prototype.insertInDOM = () => {
            console.log("inside the method....");
        };
    };
}
let ProfileComponent = class ProfileComponent {
    constructor() { }
};
ProfileComponent = __decorate([
    Component(100)
], ProfileComponent);
const person = new ProfileComponent();
console.log(person.constructor.prototype.var1);
//# sourceMappingURL=4.parameterisedDecorator.js.map
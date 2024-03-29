"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        console.log("Before...");
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return (typeof result === 'string') ?
            result.toUpperCase() : result;
        console.log("After....");
    };
}
class Robot {
    constructor(_message) {
        this._message = _message;
    }
    get message() {
        return this._message;
    }
}
__decorate([
    Capitalize
], Robot.prototype, "message", null);
let robot = new Robot("hello prem kumar ");
console.log(robot.message);
//# sourceMappingURL=3.accessorDecorators.js.map
"use strict";
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new keyValuePair('1', 'a');
let pair2 = new keyValuePair(1, 2);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
console.log(ArrayUtils.wrapInArray(1));
//# sourceMappingURL=index.js.map
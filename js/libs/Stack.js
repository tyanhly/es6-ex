const key = Symbol("key");
export default class {
    constructor(iterable) {
        this[key] = [];
        if (iterable) {
            for (const item of iterable) {
                this[key].push(item);
            }
        }
    }

    push(item) {
        this[key].push(item);
        return this;
    }

    pop() {
        return this[key].pop();
    }

    forEach(callbackFunction) {
        for (const item of this[key]) {
            callbackFunction.call(null, item);
        }
    }

    get size() {
        return this[key].length;
    }

    has(item) {
        for (let i = 0; i < this.size; i++) {
            if (item === this[key][i]) {
                return true;
            }
        }
        return false;
    }

}
export default class {
    constructor(iterable) {
        this.key = Symbol('key');
        this[this.key ] = [];
        if (iterable) {
            for (const item of iterable) {
                this[this.key ].push(item);
            }
        }
    }

    push(item) {
        this[this.key ].push(item);
        return this;
    }

    pop() {
        return this[this.key ].pop();
    }

    forEach(callbackFunction) {
        for (const item of this[this.key ]) {
            callbackFunction.call(null, item);
        }
    }

    get size() {
        return this[this.key ].length;
    }

    has(item) {
        for (let i = 0; i < this.size; i++) {
            if (item === this[this.key ][i]) {
                return true;
            }
        }
        return false;
    }

}
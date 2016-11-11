import Stack from "./Stack";

export default class extends Stack {

    pop() {
        console.log(this);
        return this[this.key ].shift();
    }

}
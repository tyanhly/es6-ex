import * as common  from "./common";

common.out("tutor7_iterator",1);
common.out("ref: http://es6-features.org/#IteratorForOfOperator");

let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1
        return {
            next () {
                [ pre, cur ] = [ cur, pre + cur ]
                return { done: false, value: cur }
            }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    common.out(n)
}
let printData = `
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1
        return {
           next () {
               [ pre, cur ] = [ cur, pre + cur ]
               return { done: false, value: cur }
           }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}
`;
common.out("================================\n " + printData);
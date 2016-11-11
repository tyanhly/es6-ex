import * as common  from "./common";
import Stack from "./libs/Stack";

common.out("tutor4_class - EX: Stack", true);

let stack = new Stack();
let item1 = "item1";
let item2 = "item2";
let item3 = "item3";
let item4 = "item4";
stack.push(item1);
stack.push(item2);
stack.push(item3);
stack.push(item4);

let hasItem1 = stack.has(item1);
common.out(hasItem1?"Had Item1":"Not Had Item1");

common.out("Size before pop: " + stack.size);
stack.forEach(common.out,false);
stack.pop();
common.out("Size after pop: " + stack.size);
stack.forEach(common.out,false);
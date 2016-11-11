import * as common  from "./common";
import Stack from "./libs/Stack";

common.out("tutor4_class", true);

let stack = new Stack();
let item1 = "item1";
let item2 = "item2";
stack.push(item1);
stack.push(item2);
stack.forEach(common.out,false);

let hasItem1 = stack.has(item1);
common.out(hasItem1?"Had":"Not Had");
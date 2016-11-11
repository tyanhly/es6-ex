import * as common  from "./common";
import Queue from "./libs/Queue";

common.out("tutor5_class_extends - EX: Queue ", true);

let stack = new Queue();
let item1 = "item1";
let item2 = "item2";
let item3 = "item3";
let item4 = "item4";
stack.push(item1);
stack.push(item2);
stack.push(item3);
stack.push(item4);

common.out("Size before pop: " + stack.size);
stack.forEach(common.out,false);
stack.pop();
common.out("Size after pop: " + stack.size);
stack.forEach(common.out,false);
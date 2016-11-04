import * as common  from "./common";

common.out("tutor2 destructuring", 1);

let obj = {name : "ECMASCript 6", attr1:"attr1", attr2: "attr2"};
let  {name, attr2} = obj;

common.out("name: " + name + "; attr2: " + attr2);

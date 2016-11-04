import * as common  from "./common";

common.out("tutor3 arrow function", 1);

let x =2, y=3;
//Function Block Arrow
let bEmpty = () => {return 0};
common.out("bEmpty:" + bEmpty());


let bSquare = num => {return num*num};
common.out("bSquare:" + bSquare(x));


let bSum = (num1,num2) => {return num1+num2};
common.out("bSum:" + bSum(x,y));


//Function Expression Arrow
let expEmpty = () => 0;
common.out("expEmpty:" + expEmpty());


let expSquare = num => num*num;
common.out("expSquare:" + expSquare(x));


let expSum = (num1,num2) => num1+num2;
common.out("expSum:" + expSum(x,y));
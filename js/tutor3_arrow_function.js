out("tutor3 arrow function", 1);

let x =2, y=3;
//Function Block Arrow
let bEmpty = () => {return 0};
out("bEmpty:" + bEmpty());


let bSquare = num => {return num*num};
out("bSquare:" + bSquare(x));


let bSum = (num1,num2) => {return num1+num2};
out("bSum:" + bSum(x,y));


//Function Expression Arrow
let expEmpty = () => 0;
out("expEmpty:" + expEmpty());


let expSquare = num => num*num;
out("expSquare:" + expSquare(x));


let expSum = (num1,num2) => num1+num2;
out("expSum:" + expSum(x,y));
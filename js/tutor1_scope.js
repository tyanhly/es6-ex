import * as common  from "./common";

common.out("tutor1 scope",1);

let ftest = () => {
    if (1) {
        var varScopeCase2 = "varScopeCase2 init";
        // let letScopeCase2 = "letScopeCase2 init";
    }

// var => in scope
    common.out(varScopeCase2);
// let => not in scope
    common.out("letScopeCase2: uncomment line 7 and 14 to get error");
//     common.out(letScopeCase2);
}
ftest();
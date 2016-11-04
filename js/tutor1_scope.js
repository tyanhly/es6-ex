out("tutor1 scope",1);

function test() {
    if (1) {
        let letScopeCase2 = "letScopeCase2 init";
        var varScopeCase2 = "varScopeCase2 init";
    }

// var => in scope
    out(varScopeCase2);
// let => not in scope
    out(letScopeCase2);
}
test();
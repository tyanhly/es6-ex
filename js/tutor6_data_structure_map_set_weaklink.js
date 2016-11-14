import * as common  from "./common";

common.out("tutor6_data_structure_map_set_weaklink",1);

////////////////////////////////////////////////////////////////////////
common.out("---- tutor6 Set",1);
common.out("ref: http://es6-features.org/#SetDataStructure");

let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2
s.has("hello") === true
for (let key of s.values()) // insertion order
    common.out(key)

let printData = `
let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2
s.has("hello") === true
for (let key of s.values()) // insertion order
    console.log(key)
`;
common.out("================================\n " + printData);

////////////////////////////////////////////////////////////////////////
common.out("---- tutor6 Map",1);
common.out("ref: http://es6-features.org/#MapDataStructure");

let m = new Map()
m.set("hello", 42)
m.set(s, 34)
m.get(s) === 34
m.size === 2
for (let [ key, val ] of m.entries())
    common.out(key + " = " + val)

printData = `
let m = new Map()
m.set("hello", 42)
m.set(s, 34)
m.get(s) === 34
m.size === 2
for (let [ key, val ] of m.entries())
    console.log(key + " = " + val)
`;
common.out("================================\n " + printData);

////////////////////////////////////////////////////////////////////////
common.out("---- tutor6 WeakLinkDataStructures",1);
common.out("ref: http://es6-features.org/#WeakLinkDataStructures");

let isMarked     = new WeakSet()
let attachedData = new WeakMap()

class Node {
    constructor (id)   { this.id = id                  }
    mark        ()     { isMarked.add(this)            }
    unmark      ()     { isMarked.delete(this)         }
    marked      ()     { return isMarked.has(this)     }
    set data    (data) { attachedData.set(this, data)  }
    get data    ()     { return attachedData.get(this) }
}

let foo = new Node("foo")

JSON.stringify(foo) === '{"id":"foo"}'?common.out("True"):common.out("False");
foo.mark()
foo.data = "bar"
foo.data === "bar"?common.out("True"):common.out("False");
JSON.stringify(foo) === '{"id":"foo"}'?common.out("True"):common.out("False");

isMarked.has(foo)     === true?common.out("True"):common.out("False");
attachedData.has(foo) === true?common.out("True"):common.out("False");
foo = null  /* remove only reference to foo */
attachedData.has(foo) === false?common.out("True"):common.out("False");
isMarked.has(foo)     === false?common.out("True"):common.out("False");

printData = `
let isMarked     = new WeakSet()
let attachedData = new WeakMap()

class Node {
    constructor (id)   { this.id = id                  }
    mark        ()     { isMarked.add(this)            }
    unmark      ()     { isMarked.delete(this)         }
    marked      ()     { return isMarked.has(this)     }
    set data    (data) { attachedData.set(this, data)  }
    get data    ()     { return attachedData.get(this) }
}

let foo = new Node("foo")

JSON.stringify(foo) === '{"id":"foo"}'
foo.mark()
foo.data = "bar"
foo.data === "bar"
JSON.stringify(foo) === '{"id":"foo"}'

isMarked.has(foo)     === true
attachedData.has(foo) === true
foo = null  /* remove only reference to foo */
attachedData.has(foo) === false
isMarked.has(foo)     === false
`;
common.out("================================\n " + printData);

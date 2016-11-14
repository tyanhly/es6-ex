import * as common  from "./common";
import * as tutor7  from "./tutor7_promise";

common.out("tutor6_fetch", true);
let url = "/js/tutor6_fetch_data.json";

let runTutor7 = () => {
    tutor7.run();
};

fetch(url)
    .then(response => response.json())
    .then(rows => {
        Object.keys(rows).forEach(key => common.out("row[" + key + "]:" + rows[key]));
        runTutor7();
    })
    .catch(e => common.out(e));


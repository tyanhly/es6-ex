import * as common  from "./common";
import * as tutorb  from "./tutorb_promise";

common.out("tutora_fetch", true);
let url = "/js/tutora_fetch_data.json";

let runTutorb = () => {
    tutorb.run();
};

fetch(url)
    .then(response => response.json())
    .then(rows => {
        Object.keys(rows).forEach(key => common.out("row[" + key + "]:" + rows[key]));
        runTutorb();
    })
    .catch(e => common.out(e));


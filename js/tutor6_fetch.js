import * as common  from "./common";

common.out("tutor6_fetch", true);
let url = "/js/tutor6_fetch_data.json";

fetch(url)
    .then(response => response.json())
    .then(rows => {
        let i =0;
        Object.keys(rows).forEach(key => common.out("row[" + key + "]:" + rows[key]));

    })
    .catch(e => common.out(e));
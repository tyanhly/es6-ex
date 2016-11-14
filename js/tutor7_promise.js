import * as common  from "./common";

let fetchAsync = (url, timeout, onData, onError) => {

    window.setTimeout(
        fetch(url)
            .then(response => response.json())
            .then(rows => onData(rows))
            .catch(e => onError(e))
        ,
        timeout
    );
}

let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
        fetchAsync(url, timeout, resolve, reject)
    })
}

export let run = () => {

    common.out("tutor7_promise", true);

    Promise.all([
        fetchPromised("/js/tutor7_fetch_data_1.json", 3000),
        fetchPromised("/js/tutor7_fetch_data_2.json", 3000),
        // fetchPromised("/js/tutor7_fetch_data_error.json", 3000)

    ]).then(
        data => {
            Object.keys(data).forEach(row => Object.keys(data[row]).forEach(col => common.out("data[" + row + "][" + col + "]:" + data[row][col])));
        },
        err => {
            common.out(`error: ${err}`);
        }
    );
}


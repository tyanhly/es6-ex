export function out(data, isHeader = false) {
    let e;
    if(isHeader){
        e = document.createElement('h3');
        console.log("=====HEADER=======" );
        console.log(data );
        console.log("=====/HEADER======" );
    }else {
        e = document.createElement('pre');
        // data = "OUT: " + data ;
        console.log(data);
    }

    e.innerHTML = data;
    document.getElementById('out').appendChild(e);
}

export function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
        var d = new Date();  // Possible memory leak?
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        // d = null;  // Prevent memory leak?
    }
}
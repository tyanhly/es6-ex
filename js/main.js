function out(data, isHeader= false) {
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
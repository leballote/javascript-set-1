function limitFunc(fn, num) {
    let count = 0;
    return function() {
        if (count++ < num) {
            fn(...arguments); 
        }
    };
}

let limited = limitFunc(() => console.log("hi!"), 2);

limited();
limited();
limited();
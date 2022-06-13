function limitFunc(fn, num) {
  let count = 0;
  return function (...args) {
    if (count++ < num) return fn(...args);
  };
}

let limited = limitFunc(() => console.log("hi!"), 2);

limited();
limited();
limited();

let limitedSum = limitFunc((a, b) => a + b, 2);
console.log(limitedSum(4, 5));
console.log(limitedSum(2, 1));
console.log(limitedSum(3, 10));

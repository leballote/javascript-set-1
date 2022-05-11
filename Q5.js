function overloadedFn(x) {
    if (typeof x === "string") {
        let s = x;
        let vowels = ["a", "e", "i", "o", "u"]; 
        let count = 0;
        for (let ch of s) {
            count += vowels.includes(ch);
        }
        return count;
    }
     
    if (typeof x === "number") {
        if (Number.isInteger(x)) {
            return Math.floor(Math.log10(x)) + 1;
        } else {
            throw new Error(`${x} is not an integer`);
        }
    }
}

console.log(overloadedFn("beautification")); // 8
console.log(overloadedFn(1013));
console.log(overloadedFn(1000));
// console.log(overloadedFn(110.5)); //throws error
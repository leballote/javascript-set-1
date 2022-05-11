function copyProp(objA, objB, props) {
    for (const key in objB) {
        if (Object.hasOwnProperty.call(objB, key) && (props == null || props.includes(key))) {
                const element = objB[key];
                objA[key] = element;
        }
    }
}

let objA = {
    "pa": "only this",
}

const objB =  {
    "p1": "hey",
    "p2": "you", 
    "p3": "there" 
}

copyProp(objA, objB);
console.log(objA);

objA = {
    "pa": "only this",
}

copyProp(objA, objB, ["p1", "p2"]);
console.log(objA);




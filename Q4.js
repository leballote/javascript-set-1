// explanation of Object.hasOwnProperty.call:

// The main reason originally was because it is already in my forin snippet, but I researched on that, and the user could have
// created an object with Object.create(null), which makes it safer this way

function copyProp(objA, objB, props) {
  if (props == null) {
    for (const prop in objB) {
      if (Object.hasOwnProperty.call(objB, prop)) {
        objA[prop] = objB[prop];
      }
    }
  } else {
    for (const prop of props) {
      if (Object.hasOwnProperty.call(objB, prop)) {
        objA[prop] = objB[prop];
      }
    }
  }
}

let objA = {
  pa: "only this",
};

const objB = {
  p1: "hey",
  p2: "you",
  p3: "there",
};

copyProp(objA, objB);
console.log(objA);

objA = {
  pa: "only this",
};

copyProp(objA, objB, ["p1", "p2"]);
console.log(objA);

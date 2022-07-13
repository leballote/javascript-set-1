// explanation of Object.hasOwnProperty.call:
//I guess this is more elegant, but I think Object.keys creates a list, which seems like a waste of space
// if you can iterate with a forin instead. But I guess I could make an object iterator if I really wanted to save that space
function copyProp(objA, objB, props) {
  if (props == null) props = Object.keys(objB);

  for (const prop of props) {
    if (Object.hasOwnProperty.call(objB, prop)) {
      objA[prop] = objB[prop];
    }
  }
}

function* objIterator(ob) {
  for (const prop in ob) {
    yield prop;
  }
}

function copyProp(objA, objB, props) {
  if (props == null) props = objIterator(objB);

  for (const prop of props) {
    if (Object.hasOwnProperty.call(objB, prop)) {
      objA[prop] = objB[prop];
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

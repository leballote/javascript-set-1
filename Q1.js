let words = [
  "hello",
  "bye",
  "thanks",
  "something",
  "else",
  "carrot",
  "avocado",
];

function isConsonant(ch) {
  let vowels = ["a", "e", "i", "o", "u"];
  return !vowels.includes(ch);
}

function numConst(tot, ch) {
  tot += isConsonant(ch);
  return tot;
}

//the sorting is in-place, because the sort method is in-place, but it can easily be converted into a non-in-place funciton
function sortWords(words, option = "lexicographic", ascending = true) {
  let compareFn;
  if (option === "lexicographic") {
    return words.sort();
  } else if (option === "length") {
    compareFn = (w1, w2) => w1.length - w2.length;
  } else if (option === "consonants") {
    compareFn = (w1, w2) => {
      let cons1 = Array.prototype.reduce.call(w1, numConst, 0);
      let cons2 = Array.prototype.reduce.call(w2, numConst, 0);

      return cons1 - cons2;
    };
  }
  if (!ascending) finalCompareFn = (w1, w2) => -1 * compareFn(w1, w2);
  else finalCompareFn = compareFn;

  return words.sort((w1, w2) => {
    return finalCompareFn(w1, w2);
  });
}

console.log(sortWords(words, "lexicographic"));
console.log(sortWords(words, "length"));
console.log(sortWords(words, "consonants"));
console.log(sortWords(words, "consonants", false));

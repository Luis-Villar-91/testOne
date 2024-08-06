const str = 'aaaeeeiiooAAEEz';
const collection = {};

for (let character of str) {
  if (character in collection) {
    collection[character] += 1;
  } else {
    collection[character] = 1;
  };
};

console.log(collection);
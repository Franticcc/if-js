const array = [2, 3, 5, 8]
let sum = 1;

for (let i = 0; i < array.length; i++) {
  sum *= array[i]
};

console.log(sum);


const arrayMoreLess = [2, 5, 8, 15, 0, 6, 20, 3]

for (let i = 0; i < arrayMoreLess.length; i++) {
  if (arrayMoreLess[i] > 5 && arrayMoreLess[i] < 10)
    console.log(arrayMoreLess);
};

const arrayEvenElements = [2, 5, 8, 15, 0, 6, 20, 3]

for (let i = 0; i < arrayEvenElements.length; i++) {
  if (arrayEvenElements[i] % 2 === 0)
  console.log(arrayEvenElements[i])
};


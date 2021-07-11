let array = [2, 3, 5, 8]

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let arrayMoreLess = [2, 5, 8, 15, 0, 6, 20, 3]

for (let i = 0; i < arrayMoreLess.length; i++) {
  if (arrayMoreLess[i] > 5 && arrayMoreLess[i] < 10)
    console.log(arrayMoreLess[i]);
}

let arrayEvenElements = [2, 5, 8, 15, 0, 6, 20, 3]

for (let i = 1; i < arrayEvenElements.length; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(arrayEvenElements[i])
}

function checkPalindrome(str) {
  const strRevers = str.split('').reverse().join('');
  if (strRevers === str) {
    return true;
  } 
    return false;
}

test = checkPalindrome('abcdedcba');
test2 = checkPalindrome('sfsfgaa');

console.log(test);

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(min(3, 5));

function max(a, y) {
  if (y > a) {
    return y;
  }
  return a;
}
console.log(max(10, 15));

const zeroArray = [10, 15, 100, 525, 300, 200, 42, 54, 60, 560];
const sumZeroArray = (zeroArray) => {
  let result = zeroArray.map((item) => {
     return (item % 10 === 0) ? item.toString().replace(/0/g, 'zero') : item;
  });
  return result;
}

console.log(sumZeroArray(zeroArray));


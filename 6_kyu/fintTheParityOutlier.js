//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

const isEven = (number) => number % 2 === 0;
const findOutlier = (integers) => {
  if (isEven(integers[0]) !== isEven(integers[1])) {
    if (isEven(integers[0]) === isEven(integers[2])) return integers[1];
    if (isEven(integers[1]) === isEven(integers[2])) return integers[0];
  }

  for (let i = 2; i < integers.length; i++) {
    if (isEven(integers[i]) !== isEven(integers[i - 1])) {
      return integers[i];
    }
  }
};

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));

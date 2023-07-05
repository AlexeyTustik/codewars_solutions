//https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
const between = (a, b) =>
  Array.from({ length: b - a + 1 }, (value, index) => a + index);

console.log(between(1, 3));

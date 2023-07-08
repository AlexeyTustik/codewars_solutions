//https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

const sumOfDigits = (str) => [...str].map(Number).reduce((a, b) => a + b);
const compareWeights = (w1, w2) => {
  weightDelta = sumOfDigits(w1) - sumOfDigits(w2);
  if (!weightDelta) return w1.localeCompare(w2);
  else return weightDelta;
};

const orderWeight = (string) => {
  return string
    .split(" ")
    .sort((a, b) => compareWeights(a, b))
    .join(" ");
};

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

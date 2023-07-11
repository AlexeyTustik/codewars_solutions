//https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript

const remained = (a, b) => {
  let res = 0;
  for (const digit of a) {
    res = (res * 10 + +digit) % b;
  }
  return res;
};

const lastDigit = (str1, str2) => {
  if (str2 === "0") return 1;
  if (str1 === "1") return 1;
  if (str1 === "0") return 0;

  const lastDigitStr1 = +str1[str1.length - 1];
  let remained_b = remained(str2, 4);
  if (!remained_b) remained_b += 4;
  return lastDigitStr1 ** remained_b % 10;
};

console.log(lastDigit("4", "1"), 4);
console.log(lastDigit("4", "2"), 6);
console.log(lastDigit("9", "7"), 9);
console.log(lastDigit("10", "10000000000"), 0);

console.log(remained("100", 3));
console.log(remained("177", 14));

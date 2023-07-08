//https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript

const validate = (number) => {
  const sum = [...number.toString()]
    .reverse()
    .map((value, index) => {
      newValue = index % 2 === 1 ? 2 * value : 1 * value;
      if (newValue > 9) newValue -= 9;
      return newValue;
    })
    .reduce((a, b) => a + b);
  return sum % 10 === 0;
};

console.log(validate(123));
console.log(validate(1));
console.log(validate(2121));
console.log(validate(1230));
